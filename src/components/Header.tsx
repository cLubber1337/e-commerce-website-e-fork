import React from "react"
import { Link } from "react-router-dom"
import { PATHS } from "utils/paths"
import { CustomButton } from "components/CustomButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"

export const Header = () => {
  const [inputValue, setInputValue] = React.useState("")

  return (
    <header className={"header"}>
      <div className={"container"}>
        <div className="header__row">
          <Link to={PATHS.HOME} className={"header__logo"}>
            <div className={"header__logo-icon"}></div>
          </Link>

          {/*Search form*/}
          <div className={"search-form"}>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className={"search-form__text"}
              type="text"
              placeholder="Search..."
            />

            {inputValue && (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setInputValue("")}
                className={"search-form__xmark"}
              />
            )}
            <CustomButton
              title={"Find"}
              onClick={() => null}
              size={"-medium"}
              color={"-green"}
              purpose={"-search"}
            />
          </div>

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
