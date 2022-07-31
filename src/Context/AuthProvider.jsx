import { useState } from "react"
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})


    return (
        <AuthContext.Provider value={{setUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}