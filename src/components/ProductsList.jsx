import ProductItem from "./ProductItem";
import Loader from "../components/ui/loader/Loader";
import SortOptions from "./dataOperations/SortOptions";
import FilterOptions from "./dataOperations/FilterOptions";

import { useFilteredData } from "../hooks/useFilteredData";

function ProductsList() {
  const { sortedProducts } = useFilteredData();

  return !sortedProducts ? (
    <Loader />
  ) : (
    <section className="text-gray-400 body-font">
      {/* Filter and Sort field  */}
      <div className="flex justify-between items-center mt-8 px-6 ">
        {/* FILTERING  */}
        <FilterOptions filterField="category" />
        {/* SORTING  */}
        <SortOptions />
      </div>

      {/* Products List Block  */}
      <div className="container px-5 py-10 mx-auto">
        <ul className="flex flex-wrap -m-4">
          {sortedProducts?.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductsList;

// ===============================================
// <section className="bg-white">
//   <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
//     <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
//       <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//         Trending products
//       </h2>
//       <a
//         href="#"
//         className="hidden text-sm font-semibold text-teal-600 hover:text-cyan-500 sm:block"
//       >
//         See everything
//         <span aria-hidden="true"> &rarr;</span>
//       </a>
//     </div>

//     <div className="relative mt-8">
//       <div className="relative -mb-6 w-full overflow-x-auto pb-6">
//         <ul
//           role="list"
//           className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
//         >
//           <li className="inline-flex w-64 flex-col text-center lg:w-auto">
//             <div className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
//                 <img
//                   src={item.image}
//                   alt="Black machined steel pen with hexagonal grip and small white logo at top."
//                   className="h-full w-full object-cover object-center group-hover:opacity-75"
//                 />
//               </div>
//               <div className="mt-6">
//                 <p className="text-sm text-gray-500">Black</p>
//                 <h3 className="mt-1 font-semibold text-gray-900">
//                   <a href="#">
//                     <span className="absolute inset-0"></span>
//                     Machined Pen
//                   </a>
//                 </h3>
//                 <p className="mt-1 text-gray-900">$35</p>
//               </div>
//             </div>

//           </li>
//         </ul>
//       </div>
//     </div>

//     <div className="mt-12 flex px-4 sm:hidden">
//       <a
//         href="#"
//         className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
//       >
//         See everything
//         <span aria-hidden="true"> &rarr;</span>
//       </a>
//     </div>
//   </div>
// </section>

// ================== TEMPLATE ===================
{
  /* <section className="text-gray-400 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  </div>
</div>
</section> */
}

// ==================
