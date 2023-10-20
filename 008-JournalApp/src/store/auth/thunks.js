import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logOutFirebase } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, logout, login } from "./authSlice";


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle();


        if (!result.ok) {
            return dispatch(logout(result.message));
        };

        dispatch(login(result));

    }
};


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));

    }
};


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const { ok, uid, photoURL, errorMessage, displayName } = await loginWithEmailPassword({ email, password })

        console.log('displayName', displayName)
        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

// ** logouts

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await logOutFirebase();
            dispatch(clearNotesLogout())
            dispatch(logout({}));
        } catch (error) {

        }

    }
}