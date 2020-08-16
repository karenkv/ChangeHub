from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup 
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

import json
import requests 
import re
import os
import pyrebase

config = {
    "apiKey": "AIzaSyDraH3OzSJ29OnnOwoWwmOS32bB9AMcQfY",
    "authDomain": "changehub-aa0e8.firebaseapp.com",
    "databaseURL": "https://changehub-aa0e8.firebaseio.com",
    "projectId": "changehub-aa0e8",
    "storageBucket": "changehub-aa0e8.appspot.com",
    "messagingSenderId": "950450336150",
    "appId": "1:950450336150:web:cbefaf1f8bc499b7c46db7"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
auth = firebase.auth()

app = Flask(__name__)
CORS(app)

@app.route('/scrapper', methods=['GET'])
def scrape_for_petitions():
    """
    Scraps all new petitions from Color of Change and puts it 
    into Firebbase
    """
    # set up site for scraping
    URL = "https://colorofchange.org/campaigns/active/"
    r = requests.get(URL) 
    soup = BeautifulSoup(r.content, features="html.parser") 

    # retrieve all articles
    articles = soup.find_all('article')
    count = 2

    for article in articles:

        # find petition information
        link = article.find("a").attrs.get("href")
        category = article.find("ul").find("li").text
        if "social list opener" in category:
            category = "General"
        try:
            description = article.find("p").text
        except:
            description = "Description not found."
        name = article.find("h3").find("a").text
        
        # set up json object to add to firebase
        data = {
            "name" : name,
            "link" : link,
            "category" : category,
            "description" : description
        }

        db.child("petitions").child(count).set(data)
        count += 1

    return jsonify({"message":"Petitions have been added to Firebase"})

    
# TODO: sign up errors e.g. short password
@app.route('/signup', methods=['POST'])
def signup():
    """
    Create new user
    Expected request body:
        first name
        last name
        email
        password
        zip
        number
    """
    content = request.json
    user = auth.create_user_with_email_and_password(content["email"], content["password"])
    data = {
        "first_name":content["first_name"],
        "last_name":content["last_name"],
        "email":content["email"],
        "number":content["number"],
        "zip" :content["zip"]
    }
    
    userAcctInfo = auth.get_account_info(user["idToken"])
    localId = userAcctInfo["users"][0]["localId"]
    db.child("users").child(localId).set(data)

    return jsonify({"message":"Sign up successful"})

@app.route('/login', methods=['POST'])
def login():
    """
    Sign in existing user
    Expected request body:
        email
        password
    """
    content = request.json
    user = auth.sign_in_with_email_and_password(content["email"], content["password"])
    return jsonify(user)

@app.route('/logout', methods=['GET'])
def logout():
    """
    Signs current user out
    """
    auth.current_user = None
    return jsonify()


@app.route('/signPetitions', methods=['POST'])
def signPetitions():
    """
    Expected request body:
        category -> what petition category
    """
    content = request.json
    localId = auth.current_user["localId"]

    petitionsToSign = getUnsignedPetitions(localId, content["category"])

    successfulSigns = 0
    for petitionId, petitionInfo in petitionsToSign.items():
        # TODO: Call bot on petitionInfo["link"]
        db.child("users").child(localId).child("signed-petitions").child(petitionId).set(True)
    
    return jsonify({"count-signed":successfulSigns})

@app.route('/usersPetitions', methods=['GET'])
def getSignedPetitions():
    """
    Return body:
        {"1":true, "3":true, ...}
        boolean value doesn't matter
    """
    localId = auth.current_user["localId"]
    signed = db.child("users").child(localId).child("signed-petitions").get().val()
    petitions = {}
    if signed is not None:
        for petitionId in signed.keys():
            petitions[petitionId] = getPetitionInfo(petitionId)
    return jsonify(petitions)

@app.route('/categories', methods=['GET'])
def getCategories():
    pDB = db.child("petitions").get().val()
    petitions = [petition for petition in pDB if petition is not None]
    categories = set()
    for petition in petitions:
        categories.add(petition.get("category"))
    return jsonify({"categories": list(categories)})


def getPetitionInfo(petitionId):
    """
    Expected request body:
        petitionID

    Return body:
        link, name, category
    """
    return db.child("petitions").child(petitionId).get().val()

def getUnsignedPetitions(localId, category):
    content = request.json
    localId = content["localId"]
    category = content["category"]
    relevantPetitions = db.child("petitions").order_by_child("category").equal_to(category).get().val()
    usersPetitions = db.child("users").child(localId).child("signed-petitions").get().val()
    for petition in usersPetitions.keys():
        if petition in relevantPetitions:
            relevantPetitions.pop(petition)
    
    return relevantPetitions

def sendEmails(to, subject, content):
    """
    Send emails to representatives using SendGrid API
    
    Expected inputs:
        to: a list of emails to send to
        subject: subject of email
        content: html content for email body
    """
    message = Mail(
        from_email='areetaw@gmail.com',
        to_emails=to,
        subject=subject,
        html_content=content)

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        sg.send(message)
    except Exception as e:
        print(e)

if __name__ == '__main__':
    app.run()
