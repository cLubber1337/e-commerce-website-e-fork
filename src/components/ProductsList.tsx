import React, { useEffect, useState } from "react"
import { ProductCard } from "components/ProductCard"
import { Product, Products } from "types/product-types"
import { Sort } from "components/Sort/Sort"
import { useAppSelector } from "features/store"
import { selectSortBy } from "features/filter"
import { selectAppStatus } from "features/app"
import { Loader } from "components/Loader"
import { sortingProducts } from "utils/productHelpers"
import InfiniteScroll from "react-infinite-scroll-component"
import { productsApi } from "api/products.api"
import { debounce } from "lodash"

type Props = {
  category: string
  products: Products
}

export const ProductsList = ({ category, products }: Props) => {
  const sortBy = useAppSelector(selectSortBy)
  const status = useAppSelector(selectAppStatus)
  const [skip, setSkip] = useState(6)
  const [hasMore, setHasMore] = useState(true)
  const [productsList, setProductsList] = useState<Product[]>(products.products)

  const loadMore = async () => {
    if (products.total > productsList.length && skip < products.total && skip > 6) {
      try {
        const { data } = await productsApi.getAllProducts(6, skip)
        setProductsList([...productsList, ...data.products])
        setSkip(skip + 6)
      } catch (error) {
        console.log(error)
      }
    } else {
      setHasMore(false)
    }
  }
  const debouncedLoadMore = debounce(loadMore, 1000)

  useEffect(() => {
    setSkip((prevState) => prevState + 6)
    setProductsList(products.products)
    return () => {
      setProductsList([])
    }
  }, [hasMore, products.products])

  const sortedProducts = sortingProducts(productsList, sortBy)

  return (
    <section className="products-section">
      <div className="products-section__footer">
        <h1 className="products-section__footer__title">{category}</h1>
        <div className="products-section__footer__sort">
          <Sort />
        </div>
      </div>

      {status !== "success" ? (
        <Loader />
      ) : (
        <>
          <ul>
            <InfiniteScroll
              className="products"
              dataLength={sortedProducts.length}
              next={debouncedLoadMore}
              loader={
                <div style={{ margin: "0 auto" }}>
                  <Loader />
                </div>
              }
              hasMore={hasMore}
              scrollThreshold={1}
            >
              {sortedProducts &&
                sortedProducts.map((product) => (
                  <li className="products__item" key={product.id}>
                    <ProductCard {...product} />
                  </li>
                ))}
            </InfiniteScroll>
          </ul>
        </>
      )}
    </section>
  )
}
