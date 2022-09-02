// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAat-9HGwp_8FLKSXOd4Hste-Szdi-MgLo",
    authDomain: "lzt-offtopic-reader.firebaseapp.com",
    projectId: "lzt-offtopic-reader",
    storageBucket: "lzt-offtopic-reader.appspot.com",
    messagingSenderId: "264722018334",
    appId: "1:264722018334:web:d774b96262fb39d5edbe0f",
    measurementId: "G-GK4QKKHLYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);