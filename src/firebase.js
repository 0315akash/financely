// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGsmqpieAYBRodJRAe4MI1LTM0dHd0d40",
    authDomain: "financely-9fbdf.firebaseapp.com",
    projectId: "financely-9fbdf",
    storageBucket: "financely-9fbdf.appspot.com",
    messagingSenderId: "163412213828",
    appId: "1:163412213828:web:fd978b2a9d1e38e62d3c11",
    measurementId: "G-X8994C1JPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };