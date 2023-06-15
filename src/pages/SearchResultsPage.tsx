import React from "react"
import { ProductsList } from "components/ProductsList"
import { useAppSelector } from "features/store"
import { selectSearchResults, selectSearchValue } from "features/search"
import { isEmpty } from "lodash"

export const SearchResultsPage = () => {
  const searchResults = useAppSelector(selectSearchResults)
  const searchValue = useAppSelector(selectSearchValue)
  console.log(searchResults)
  return (
    <section className="search-results-section" style={{ marginTop: "72px", paddingTop: "24px" }}>
      {isEmpty(searchResults.products) ? (
        <h1>NOTHING WAS FOUND</h1>
      ) : (
        <ProductsList category={`Search : ${searchValue}`} products={searchResults} />
      )}
    </section>
  )
}
