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