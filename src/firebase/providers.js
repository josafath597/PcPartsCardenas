import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updatePhoneNumber, updateProfile } from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { FirebaseAuth, FirebaseDB } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            //User info
            displayName,
            email,
            photoURL,
            uid,
        }

        
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }

}

export const registerUserWithEmailPassword = async ({email, password, displayName, phoneNumber, photoURL }) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName, photoURL});
        const newDoc = doc(collection(FirebaseDB, `users`) ,uid);
        await setDoc(newDoc, {phoneNumber});

        


        return {
            ok: true,
            uid
        }


        
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
        
    }

}

export const loginWithEmailPassword = async ({email, password}) => {
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const docRef = doc(FirebaseDB, `users/${resp.user.uid}`);
        const docSnapshot = await getDoc(docRef);
        const {phoneNumber} = docSnapshot.data();


        const {uid, photoURL, displayName } = resp.user;


        return{
            ok: true,
            uid, photoURL, displayName, phoneNumber
        }
        
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
        
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}