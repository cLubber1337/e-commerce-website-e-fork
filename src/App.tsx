import React, { useEffect } from "react"
import "./scss/app.scss"
import { Header } from "components/Header"
import { getAllProducts } from "features/products"
import { useAppDispatch } from "features/store"
import { fetchNamesCategories } from "features/categories"
import { AppRouter } from "utils/routes"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNamesCategories())
    dispatch(getAllProducts({ limit: 12, skip: 0 }))
  }, [dispatch])

  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  )
}

export default App
