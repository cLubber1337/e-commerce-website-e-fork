import React from "react"
import { Link } from "react-router-dom"
import { selectCategories } from "features/categories/categoriesSlice"
import { useAppSelector } from "features/store"

export const Navbar = () => {
  const { categories } = useAppSelector(selectCategories)

  return (
    <aside>
      <ul>
        {categories &&
          categories.map((category) => (
            <li key={category}>
              <Link style={{ color: "red" }} to={`/${category}`}>
                {category}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}
