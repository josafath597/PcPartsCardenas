import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckingAuth = (setAuth, setUser) => {
    useEffect(() => {

        onAuthStateChanged( FirebaseAuth , async ( user ) =>{
          if(user){
            setUser(user)
            setAuth(true)
          }
            else{
                setAuth(false)
                }
        });
      }, [])
}