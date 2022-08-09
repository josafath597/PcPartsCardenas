import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";



export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );
        const  result = await singInWithGoogle(); 
        if ( !result.ok ) return dispatch( logout(result.errorMessage) );
        dispatch( login( result ))
    }
}

export const startCreateUserWithEmailPassword = ({ email, password, displayName, phoneNumber, photoURL }) => {
    return async ( dispatch ) => {
        dispatch ( checkingCredentials() );
        const { ok, uid, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName, phoneNumber, photoURL} );

        if( !ok ) return dispatch( logout( {errorMessage} ) );

        dispatch( login( {uid, email, displayName, photoURL, phoneNumber} ) );


    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async ( dispatch ) => {
        dispatch ( checkingCredentials());
        const { ok, uid, errorMessage, displayName, photoURL, phoneNumber } = await loginWithEmailPassword({ email, password });
        if( !ok ) return dispatch( logout( {errorMessage} ) );

        dispatch( login( {uid, email, displayName, photoURL, phoneNumber} ) );


    }

}

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();
        dispatch( logout({}) );
    }
}