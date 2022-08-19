import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckingAuth = (setIsAuthenticated, setUser) => {
    useEffect(() => {

        onAuthStateChanged( FirebaseAuth , async ( user ) =>{
          if(user){
            setUser(user)
            setIsAuthenticated(true)
          }
            else{
                setIsAuthenticated(false)
                }
        });
      }, [])
}