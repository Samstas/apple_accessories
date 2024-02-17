import { FaSearchMinus } from "react-icons/fa";
import ProductItem from "./ProductItem";
import Loader from "../components/ui/loader/Loader";
import SortOptions from "./dataOperations/SortOptions";
import FilterOptions from "./dataOperations/FilterOptions";

import { useFilteredData } from "../hooks/useFilteredData";
import { useEffect, useState } from "react";

function ProductsList() {
  const { sortedProducts } = useFilteredData();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(!!sortedProducts);
  }, [sortedProducts]);

  return (
    // Change section style
    <section className="text-gray-400 body-font flex flex-col items-center">
      {/* Filter and Sort field  */}
      <div className="mt-8 px-6 flex flex-col lg:flex-row items-center lg:w-full lg:items-baseline md:justify-between ">
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
        <div className="container px-5 py-8 mx-auto">
          {sortedProducts.length === 0 ? (
            <section className="flex flex-col justify-center items-center gap-4 text-zinc-300 uppercase">
              <FaSearchMinus className="text-[12.5rem]" />
              <h1 className="text-center">
                Sorry, no matches were found.
                <br /> Try a new search
              </h1>
            </section>
          ) : (
            <ul className="flex flex-wrap -m-4">
              {sortedProducts?.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}

export default ProductsList;
