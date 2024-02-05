import { useParams, useNavigate } from "react-router-dom";
import { accessories } from "../data/data-accessories";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCart } from "../redux/slices/cartSlice";
import { useWishList } from "../hooks/useWishList";
import { useState } from "react";

function ProductInfo() {
  const products = accessories;
  const { id } = useParams();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const {
    handleRemoveItemFromWishList,
    handleAddProductToWishList,
    isItemAlreadyInWishList,
  } = useWishList();

  //check if item inside wishlist

  const itemInsideWishList = isItemAlreadyInWishList(id);
  console.log(itemInsideWishList);

  const [toggle, setToggle] = useState(itemInsideWishList);

  function handleToggle(productId, image, title, price) {
    if (toggle === true) {
      handleRemoveItemFromWishList(productId);
      return setToggle(false);
    } else {
      handleAddProductToWishList(productId, image, title, price);
      return setToggle(true);
    }
  }

  console.log(toggle);
  // console.log(cart);

  const isItemAlreadyInsideCart = cart.some((item) => item.id === id);
  const navigate = useNavigate();

  const { description, image, price, title, category, quantity, totalPrice } =
    products.find((item) => item.id === Number(id));

  function handleAddToCart(id, image, title, quantity, price) {
    const item = {
      id,
      image,
      title,
      quantity,
      price,
      totalPrice: price * quantity,
    };

    dispatch(addToCart(item));
    alert(`you add accessory ${title}`);
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={`Image ${title}`}
            className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              {/* <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span> */}
              {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
            </div>
            <p className="leading-relaxed">{description}</p>
            {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div> */}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button
                onClick={() => navigate("/")}
                className="flex ml-auto text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded mr-1"
              >
                Back to store
              </button>
              {isItemAlreadyInsideCart ? (
                <button
                  onClick={() => navigate("/cart")}
                  className="flex  text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded"
                >
                  Go to cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleAddToCart(
                      id,
                      image,
                      title,
                      quantity,
                      price,
                      totalPrice
                    )
                  }
                  className="flex  text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded"
                >
                  Add to cart
                </button>
              )}

              <button
                onClick={() => handleToggle(id, image, title, price)}
                className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:scale-110 hover:bg-red-500 active:scale-90 ${
                  itemInsideWishList ? "bg-red-500" : ""
                }`}
              >
                <BiHeart size="24" color="#2a2a2a" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
