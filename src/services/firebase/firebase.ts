// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqvfvnaJpBIuSgFDeYDqKwGSkIN0QvwtA",
    authDomain: "pricechamps-32d4d.firebaseapp.com",
    projectId: "pricechamps-32d4d",
    storageBucket: "pricechamps-32d4d.firebasestorage.app",
    messagingSenderId: "908427958682",
    appId: "1:908427958682:web:cd3e146d7ae3cce0e10223",
    measurementId: "G-3BDK4M2X2S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
isSupported().then((supported) => {
    if (supported) {
        getAnalytics(app);
        console.log("ANALITICA")
    } else {
        console.log("Analytics is not supported in this environment.");
    }
});