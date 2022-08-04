import { useState } from "react"
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {


    const [user, setUser] = useState({})

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [Auth, setAuth] = useState(true);


    return (
        <AuthContext.Provider value={{setUser, user, isAuthenticated, setIsAuthenticated, Auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}