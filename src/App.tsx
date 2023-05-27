import React from "react"
import "./scss/app.scss"
import { Header } from "components/Header"
import { Home } from "pages/Home"
import { Route, Routes } from "react-router-dom"
import { PATHS } from "utils/paths"
import { Cart } from "pages/Cart"
import ProductInfoCard from "pages/ProductInfoCard"
import { ProductsOfCategory } from "pages/ProductsOfCategory"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={`${PATHS.PRODUCT}/:id`} element={<ProductInfoCard />} />
          <Route path={PATHS.CART} element={<Cart />} />
          <Route path={`${PATHS.CATEGORY}/:categoryName`} element={<ProductsOfCategory />} />
        </Routes>
      </div>
    </>
  )
}

export default App
