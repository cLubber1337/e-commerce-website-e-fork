import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { CustomButton } from "components/CustomButton"

export const Search = () => {
  const [inputValue, setInputValue] = React.useState("")

  return (
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
  )
}
