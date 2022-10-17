import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcPDMSg09T5R73WRGlxqOGaXo2rZT4gEo",
  authDomain: "beecoz-92b73.firebaseapp.com",
  projectId: "beecoz-92b73",
  storageBucket: "beecoz-92b73.appspot.com",
  messagingSenderId: "568979151802",
  appId: "1:568979151802:web:64702afb5e7e875cecdb83"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };