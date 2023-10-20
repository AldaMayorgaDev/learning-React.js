//Provedores de autenticacion

import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider(); //1.- crear una nueva instancia


// ** Google
export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }


    } catch (error) {
        console.error('ERROR: ', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
};

// ** user-email - password
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        //1.- Firebase
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL } = resp.user;

        // displayName in Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }


    } catch (error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            error.message = 'Firebase: Usuario ya existe';
        }
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}

// ** login email-password

export const loginWithEmailPassword = async ({ email, password }) => {
    console.log(email, password)
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {

        if (error.message === 'Firebase: Error (auth/invalid-login-credentials).') {
            error.message = 'Firebase: Email y/o contraseña incorrectos';
        }
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}

// ** logOut

export const logOutFirebase = async () => {
    return await FirebaseAuth.signOut(); // Logout de todo Google, email, hotmail, etc.
}