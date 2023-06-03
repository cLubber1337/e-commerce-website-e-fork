import React from "react"
import { ProductsList } from "components/ProductsList"
import { useAppSelector } from "features/store"
import { selectSearchResults, selectSearchValue } from "features/search"
import { isEmpty } from "lodash"

export const SearchResults = () => {
  const searchResults = useAppSelector(selectSearchResults)
  const searchValue = useAppSelector(selectSearchValue)

  return (
    <section className="search-results-section" style={{ marginTop: "72px", paddingTop: "24px" }}>
      {isEmpty(searchResults) ? (
        <h1>NOTHING WAS FOUND</h1>
      ) : (
        <ProductsList category={`Search : ${searchValue}`} products={searchResults} />
      )}
    </section>
  )
}
