import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter"
import { PcPartsRouter } from "../PcParts/routes/PcPartsRouter"

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/home" element={<PcPartsRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />

        <Route path="/*" element={ <Navigate to='/home' /> } />

    </Routes>
  )
}
