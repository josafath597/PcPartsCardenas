import { useState } from "react"
import { registerUserWithEmailPassword, singInWithGoogle, startLoginWithEmailPassword } from "../firebase/providers";
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {


    const [user, setUser] = useState({})


    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [error, setError] = useState()

    const startGoogleSignIn = async () => {
        setIsAuthenticating(true);
        const resp = await singInWithGoogle();
        setUser(resp);
        if(resp.ok) {
          setIsAuthenticated(true);
        }else{
          setIsAuthenticated(false);
        }
        setIsAuthenticating(false);
    
    }

    const loginWithEmailPassword = async (email, password) => {
        setIsAuthenticating(true);
        const resp = await startLoginWithEmailPassword(email, password);
        if(resp.ok) {
            setIsAuthenticated(true);
            setUser(resp);
        }else {
            setIsAuthenticated(false);
            setError(resp.errorMessage);
        }
    setIsAuthenticating(false);
    }

    const registerUser = async ({email, password, name:displayName}) => {
        const resp = await registerUserWithEmailPassword(email, password, displayName);
        if(resp.ok) {
            setUser(resp);
        }
        else {
            setError(resp.errorMessage);
        }
    }




    return (
        <AuthContext.Provider value={{error, setUser, user, isAuthenticating, isAuthenticated, setIsAuthenticated, startGoogleSignIn, loginWithEmailPassword, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}