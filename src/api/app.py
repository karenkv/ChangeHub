from flask import Flask, request, jsonify
from flask_cors import CORS
import json

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

@app.route('/')
def hello():
    return "Hello World!"

# TODO: sign up errors e.g. short password
@app.route('/signup', methods=['POST'])
def signup():
    """
    Create new user
    Expected request body:
        name
        email
        password
        zip
        number
    """
    content = request.json
    # j = json.loads(content)
    user = auth.create_user_with_email_and_password(content["email"], content["password"])
    data = {
        "name":content["name"],
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

@app.route('/signPetitions', methods=['POST'])
def signPetitions():
    """
    Expected request body:
        petitionIDs -> list of IDS
        idToken -> currently signed in user's token
    """
    content = request.json
    

    for petition in content["petitionIDs"]:
        link = db.child("petitions").child(petition).child("link").get().val()
        # Call bot
        # Add petitionid to users signed petitions
        # userAcctInfo = auth.get_account_info(content["idToken"])
        # localId = userAcctInfo["users"][0]["localId"]
        localId = content["localId"]
        db.child("users").child(localId).child("signed-petitions").child(petition).set(True)
        return db.child("users").get().val()


if __name__ == '__main__':
    app.run()
