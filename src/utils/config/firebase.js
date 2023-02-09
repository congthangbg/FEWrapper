
// Import the functions you need from the SDKs you need

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdRuvxCCbm3MXHYiDhLn46Ndgrgxi7ekM", 
  authDomain: "testfirebase-6830b.firebaseapp.com",
  projectId: "testfirebase-6830b",
  storageBucket: "testfirebase-6830b.appspot.com",
  messagingSenderId: "988280786920",
  appId: "1:988280786920:web:7a5720d3975a2588c55e5d",
  measurementId: "G-MLH7ZW0DSV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firebase.firestore();
export default db;