import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { CustomButton } from "components/CustomButton"
import { debounce } from "lodash"
import { useAppDispatch, useAppSelector } from "features/store"
import { fetchSearchedResults, selectSearchResults } from "features/search"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { PATHS } from "utils/paths"
import SearchResults from "components/Search/SearchResults"

export const Search = () => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState("")
  const [isOpen, setIsOpen] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const location = useLocation().pathname
  const searchResults = useAppSelector(selectSearchResults)
  const navigate = useNavigate()

  // create a debounced function to fetch search results
  const debouncedSearch = useRef(
    debounce(async (searchValue: string) => {
      if (searchValue.length > 0) {
        dispatch(fetchSearchedResults({ searchValue }))
      }
    }, 1000)
  ).current

  // handle input change and call debounced search
  let onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  //clear the input value and focus on it
  const handleClearInput = () => {
    setSearchValue("")
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }

  const handleClickItem = (e: React.MouseEvent<EventTarget>, id: string) => {
    const textContent = (e.target as HTMLElement).textContent
    if (textContent !== null) {
      setSearchValue(textContent)
      setIsOpen(false)
      navigate(`${PATHS.PRODUCT}/${id}`)
    }
  }
  const handleClickInput = () => {
    setIsOpen(true)
  }
  const handleBlurInput = () => {
    setIsOpen(false)
  }

  // cancel the debounced search and clear the input on unmount or location change
  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
      handleClearInput()
    }
  }, [debouncedSearch])

  return (
    <section className="search">
      <form className={"search__form"}>
        <input
          value={searchValue}
          onChange={onChangeInput}
          onClick={handleClickInput}
          className={"search__form__input"}
          onBlur={handleBlurInput}
          ref={inputRef}
          type="text"
          placeholder="Search..."
        />

        {Object.entries(searchResults).length !== 0 && searchValue && isOpen && (
          <SearchResults searchResults={searchResults} handleClickItem={handleClickItem} />
        )}

        {searchValue.length > 0 && (
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClearInput}
            className={"search__form__xmark"}
          />
        )}
        <Link className={"search__form__btn"} to={searchValue.length > 0 ? PATHS.SEARCH : location}>
          <CustomButton
            title={"Find"}
            onClick={() => null}
            size={"-medium"}
            color={"-green"}
            purpose={"-search"}
          />
        </Link>
      </form>
    </section>
  )
}
