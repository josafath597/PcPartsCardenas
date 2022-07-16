import { Navigate, Route, Routes } from "react-router-dom"
import { CategoryPage } from "../pages/CategoryPage"
import { ItemPage } from "../pages/ItemPage"
import { PcPartsPage } from "../pages/PcPartsPage"
import { ShopPage } from "../pages/ShopPage"

export const PcPartsRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<PcPartsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ItemPage />} />
    </Routes>
  )
}
