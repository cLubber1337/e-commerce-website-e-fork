import React from "react"
import { Link } from "react-router-dom"
import { getProductsCategory } from "features/categories/categoriesSlice"
import { useAppDispatch, useAppSelector } from "features/store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { selectNamesCategories } from "features/categories"
import { iconsForNavbar } from "utils/constants"
import { getCategoryNameHelper } from "utils/productHelpers"

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectNamesCategories)

  const handleSelectCategory = (category: string) => {
    dispatch(getProductsCategory(category))
  }
  return (
    <aside className={"navbar"}>
      <ul className={"navbar__items"}>
        {categories &&
          categories.map((category, index) => (
            <li
              className={"navbar__items__item"}
              key={category}
              onClick={() => handleSelectCategory(category)}
            >
              <Link className={"navbar__items__item-link"} to={`/products/category/${category}`}>
                <span className={"navbar__items__item-icon"}>
                  <FontAwesomeIcon icon={iconsForNavbar[index]} />
                </span>
                {getCategoryNameHelper(category)}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}
