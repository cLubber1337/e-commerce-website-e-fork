import React from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "utils/routes/route-config"

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  )
}
