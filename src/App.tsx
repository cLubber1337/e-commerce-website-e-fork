import React, { useEffect } from "react"
import "./scss/app.scss"
import { Header } from "components/Header"
import { Home } from "pages/Home"
import { Route, Routes } from "react-router-dom"
import { PATHS } from "utils/paths"
import { Navbar } from "components/Navbar"
import { fetchCategories } from "features/categories/categoriesSlice"
import { useAppDispatch } from "features/store"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <>
      <Header />
      <div className="container">
        <Navbar />
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
