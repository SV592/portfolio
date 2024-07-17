// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBOI8257zkItsmlwVJzEr3hbGnXLbB67E",
    authDomain: "https://shaquillepearson.com/",
    projectId: "portfolio-138ec",
    storageBucket: "portfolio-138ec.appspot.com",
    messagingSenderId: "702158367005",
    appId: "1:702158367005:web:3aab48035bfbe48d6e59f4",
    measurementId: "G-R246V7TX0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');