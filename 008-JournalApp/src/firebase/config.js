// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; //Para tomar la parte de la autenticación
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtQJqy-t6w6D8Rd5crFDhGWkFjt0Egf94",
    authDomain: "react-curso-fh-74026.firebaseapp.com",
    projectId: "react-curso-fh-74026",
    storageBucket: "react-curso-fh-74026.appspot.com",
    messagingSenderId: "179671435260",
    appId: "1:179671435260:web:c4c777e98dc42f29b71479"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);