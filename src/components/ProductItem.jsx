import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { useEffect, useState } from "react";

function ProductItem({ item }) {
  const { id, title, image, price } = item;

  return (
    <li className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-3 w-full text-center hover:scale-[1.01] cursor-pointer hover:transition-all ease-in hover:ease-in rounded-md hover:duration-200 duration-200">
      <Link
        to={`${id}`}
        className="flex flex-col bg-white rounded-xl pt-5 pb-6 px-1 h-full shadow-md hover:shadow-xl transition ease-in delay-75"
      >
        <div className="w-full overflow-hidden bg-white">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex flex-col justify-between h-20">
          {/* <h3 className="text-white text-xs tracking-widest title-font mb-1 uppercase">
            {category}
          </h3> */}
          <h2 className="text-gray-400 text-m px-3">{title}</h2>
          <p className="mt-2 text-zinc-700 text-[1.1rem]">
            {formatCurrency(price)}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
