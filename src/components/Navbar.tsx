import React from "react"
import { Link } from "react-router-dom"
import { selectCategories } from "features/categories/categoriesSlice"
import { useAppSelector } from "features/store"
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

export const Navbar = () => {
  const categories = useAppSelector(selectCategories)
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

  return (
    <aside className={"navbar"}>
      <ul className={"navbar__items"}>
        {categories &&
          categories.map((category, index) => (
            <li className={"navbar__items__item"} key={category}>
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
