import React, { memo } from "react"
import { Products } from "types/product-types"

type Props = {
  searchResults: Products
  handleClickItem: (e: React.MouseEvent<EventTarget>, id: string) => void
}

const SearchResults = memo(({ searchResults, handleClickItem }: Props) => {
  return (
    <ul className={"search__form__results"}>
      {searchResults.products.length > 0 ? (
        searchResults.products.map((product) => (
          <li
            className="search__form__results__item"
            key={product.id}
            onMouseDown={(event) => handleClickItem(event, product.id.toString())}
          >
            {product.title}
          </li>
        ))
      ) : (
        <li className="search__form__results__item">Nothing was found</li>
      )}
    </ul>
  )
})

export default SearchResults
