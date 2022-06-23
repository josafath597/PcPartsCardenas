import { Navigate, Route, Routes } from "react-router-dom"
import { PcPartsPage } from "../pages/PcPartsPage"

export const PcPartsRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<PcPartsPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
