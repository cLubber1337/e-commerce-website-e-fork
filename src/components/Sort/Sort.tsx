import { Menu } from "@headlessui/react"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "features/store"
import { setSortBy } from "features/filter"
import { SortByType, SortNamesType } from "types/filter-types"

export const Sort = () => {
  const dispatch = useAppDispatch()
  const [sortName, setSortName] = useState<SortNamesType>("Popularity")
  const sortItems: { name: SortNamesType; sortBy: SortByType }[] = [
    { name: "Popularity", sortBy: "popularity" },
    { name: "Price: Low to High", sortBy: "price-asc" },
    { name: "Price: High to Low", sortBy: "price-desc" },
    { name: "Name: A to Z", sortBy: "name-asc" },
    { name: "Name: Z to A", sortBy: "name-desc" },
  ]

  const handleClickItem = (sortItem: { name: SortNamesType; sortBy: SortByType }) => {
    setSortName(sortItem.name)
    dispatch(setSortBy({ sortBy: sortItem.sortBy }))
  }

  return (
    <div className="sort">
      <Menu>
        <Menu.Button className="sort__button">
          Sort by: {sortName}{" "}
          <FontAwesomeIcon className="sort__button__icon" icon={faChevronDown} />{" "}
        </Menu.Button>
        <Menu.Items className="sort__items">
          {sortItems.map((item) => (
            <Menu.Item key={item.sortBy}>
              <p
                onClick={() => handleClickItem(item)}
                className={item.name === sortName ? "sort__item--active" : "sort__item"}
              >
                {item.name}
              </p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}
