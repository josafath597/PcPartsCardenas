import { useState } from "react"
import { registerUserWithEmailPassword, singInWithGoogle, startLoginWithEmailPassword } from "../firebase/providers";
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {


    const [user, setUser] = useState({})

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [Auth, setAuth] = useState(true);

    const [error, setError] = useState()

    const startGoogleSignIn = async () => {
        setIsAuthenticated(true);
        const resp = await singInWithGoogle();
        setUser(resp);
        if(resp.ok) {
          setAuth(true);
        }else{
          setAuth(false);
        }
        setIsAuthenticated(false);
    
    }

    const LoginWithEmailPassword = async (email, password) => {
        setIsAuthenticated(true);
        const resp = await startLoginWithEmailPassword(email, password);
        if(resp.ok) {
            setAuth(true);
            setUser(resp);
        }else {
            setAuth(false);
            setError(resp.errorMessage);
        }
    setIsAuthenticated(false);
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
        <AuthContext.Provider value={{error, setUser, user, isAuthenticated, Auth, setAuth, startGoogleSignIn, LoginWithEmailPassword, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}