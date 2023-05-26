import React from "react"
import { Link } from "react-router-dom"
import { PATHS } from "utils/paths"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { Search } from "components/Search"

export const Header = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className={"header"}>
      <div className={"container"}>
        <div className="header__row">
          <Link to={PATHS.HOME} className={"header__logo"} onClick={handleLogoClick}>
            <div className={"header__logo-icon"}></div>
          </Link>

          {/*Search form*/}
          <Search />

          {/*Actions*/}
          <div className="header__actions">
            <Link to={""} className={"header__actions__item"}>
              <FontAwesomeIcon icon={faUser} style={{ height: "26px", width: "26px" }} />
            </Link>
            <Link to={PATHS.CART} className={"header__actions__item"}>
              <span className={"header__actions__item__circle-cart"}>{1}</span>
              <FontAwesomeIcon icon={faCartShopping} style={{ height: "26px", width: "26px" }} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
