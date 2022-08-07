import { useSelector } from 'react-redux'

import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter"
import { PcPartsRouter } from "../PcParts/routes/PcPartsRouter"

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth);
  return (
    <Routes>
      {
        status === 'not-authenticated' && <Route path="/auth/*" element={<AuthRouter />} />
      }
      <Route path="/home/*" element={<PcPartsRouter />} />
      <Route path="/*" element={ <Navigate to='/home' /> } />
    </Routes>
  )
}
