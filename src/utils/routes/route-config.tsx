import { RouteProps } from "react-router-dom"
import { Home } from "pages/Home"
import React from "react"
import ProductInfoCard from "pages/ProductInfoCard"
import { Cart } from "pages/Cart"
import { ProductsOfCategory } from "pages/ProductsOfCategory"
import { SearchResultsPage } from "pages/SearchResultsPage"

export enum AppRoutes {
  Home = "home",
  Cart = "cart",
  Products = "products",
  Category = "category",
  Search = "search",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.Cart]: "/cart",
  [AppRoutes.Products]: "/products/:id",
  [AppRoutes.Category]: "/products/category/:categoryName",
  [AppRoutes.Search]: "/search",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: RoutePath.home,
    element: <Home />,
  },
  [AppRoutes.Products]: {
    path: RoutePath.products,
    element: <ProductInfoCard />,
  },
  [AppRoutes.Cart]: {
    path: RoutePath.cart,
    element: <Cart />,
  },
  [AppRoutes.Category]: {
    path: RoutePath.category,
    element: <ProductsOfCategory />,
  },
  [AppRoutes.Search]: {
    path: RoutePath.search,
    element: <SearchResultsPage />,
  },
}
