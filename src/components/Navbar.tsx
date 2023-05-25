import React from "react"
import { Link } from "react-router-dom"
import { getProductsCategory } from "features/categories/categoriesSlice"
import { useAppDispatch, useAppSelector } from "features/store"
import {
  faBagShopping,
  faBottleDroplet,
  faBowlFood,
  faClock,
  faGears,
  faGem,
  faGlasses,
  faHandDots,
  faHouse,
  faKey,
  faLaptop,
  faLightbulb,
  faMobileScreenButton,
  faMotorcycle,
  faPersonDress,
  faShirt,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { selectNamesCategories } from "features/categories"

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectNamesCategories)
  const icons = [
    faMobileScreenButton,
    faLaptop,
    faBottleDroplet,
    faHandDots,
    faBowlFood,
    faHouse,
    faKey,
    faShirt,
    faPersonDress,
    faShoePrints,
    faShirt,
    faShoePrints,
    faClock,
    faClock,
    faBagShopping,
    faGem,
    faGlasses,
    faGears,
    faMotorcycle,
    faLightbulb,
  ]

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
                  <FontAwesomeIcon icon={icons[index]} />
                </span>
                {category[0].toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}
