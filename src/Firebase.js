import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzQczUxZauyOa3MsfLkIscR4Mj-9Cg_HM",
  authDomain: "facebook-messenger-clone-4ba9d.firebaseapp.com",
  projectId: "facebook-messenger-clone-4ba9d",
  storageBucket: "facebook-messenger-clone-4ba9d.appspot.com",
  messagingSenderId: "731197416098",
  appId: "1:731197416098:web:c475b836c365658b87adfb",
  measurementId: "G-XGN5L8RGLQ",
});
const db = firebaseApp.firestore();

export default db;
