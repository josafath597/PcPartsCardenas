import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { FirebaseAuth, FirebaseDB } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';


export const useCheckAuth = () => {

const {status} = useSelector(state => state.auth);


const dispatch = useDispatch();

useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
    if(!user) return dispatch( logout() );
    const {uid, displayName, email, photoURL, } = user;
    const docRef = doc(FirebaseDB, `users/${uid}`);
    const docSnapshot = await getDoc(docRef);
    if(docSnapshot.exists()){
        const {phoneNumber} = docSnapshot.data();
        dispatch(login({uid, displayName, email, photoURL, phoneNumber}));
    }
    else{
        const phoneNumber = ''
        dispatch( login({uid, displayName, email, photoURL, phoneNumber}) );
    }


    


    })
      
  } , []);

  return {status};
}