import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter"
import { AuthContext } from "../Context/AuthContext"
import { PcPartsRouter } from "../PcParts/routes/PcPartsRouter"

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>

      {
        !user.displayName && <Route path="/auth/*" element={<AuthRouter />} />
      }
      
      <Route path="/home/*" element={<PcPartsRouter />} />
         
        

        <Route path="/*" element={ <Navigate to='/home' /> } />


    </Routes>
  )
}
