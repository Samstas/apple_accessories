import { FaSearchMinus } from 'react-icons/fa'
import ProductItem from './ProductItem'
import Loader from '../components/ui/loader/Loader'
import SortOptions from './dataOperations/SortOptions'
import FilterOptions from './dataOperations/FilterOptions'

import { useFilteredData } from '../hooks/useFilteredData'
import { useEffect, useState } from 'react'
import BackToTopBtn from './ui/BackToTopBtn'

function ProductsList() {
  const { sortedProducts } = useFilteredData()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(!!sortedProducts)
  }, [sortedProducts])

  return (
    // Change section style
    <section className="body-font relative flex flex-col items-center text-gray-400">
      {/* Filter and Sort field  */}
      <div className="mt-8 flex flex-col items-center px-6 md:justify-between lg:w-full lg:flex-row lg:items-baseline ">
        {/* FILTERING  */}
        <FilterOptions filterField="category" />
        {/* SORTING  */}
        <SortOptions />
      </div>

      {/* Products List Block  */}
      {!isLoading ? (
        <div className="mt-20">
          <Loader />
        </div>
      ) : (
        <div className="container mx-auto px-5 py-8">
          {sortedProducts.length === 0 ? (
            <section className="flex flex-col items-center justify-center gap-4 uppercase text-zinc-300">
              <FaSearchMinus className="text-[12.5rem]" />
              <h1 className="text-center">
                Sorry, no matches were found.
                <br /> Try a new search
              </h1>
            </section>
          ) : (
            <ul className="-m-4 flex flex-wrap">
              {sortedProducts?.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Button Back To Top  */}
      <div className="fixed bottom-6 right-4 sm:bottom-10 sm:right-10">
        <BackToTopBtn />
      </div>
    </section>
  )
}

export default ProductsList
