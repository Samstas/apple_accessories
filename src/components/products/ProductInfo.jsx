import { BiHeart } from 'react-icons/bi'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import Loader from '../ui/loader/Loader'

import { useCart } from '../../context/CartContext'
import { getCart } from '../../redux/slices/cartSlice'
import { useWishList } from '../../hooks/useWishList'
import { accessories } from '../../data/data-accessories'
import { formatCurrency } from '../../utils/formatCurrency'

function ProductInfo() {
  const { id } = useParams()
  const { onAddToCart } = useCart()

  const products = accessories
  const cart = useSelector(getCart)

  const {
    onAddProductToWishList,
    onRemoveItemFromWishList,
    isItemAlreadyInWishList,
  } = useWishList()

  //check if item inside wishlist
  const itemInsideWishList = isItemAlreadyInWishList(id)

  const [toggle, setToggle] = useState(itemInsideWishList)

  function handleToggle(productId, image, title, price) {
    if (toggle === true) {
      onRemoveItemFromWishList(productId)
      return setToggle(false)
    } else {
      onAddProductToWishList(productId, image, title, price)
      return setToggle(true)
    }
  }

  const isItemAlreadyInsideCart = cart.some((item) => item.id === id)
  const navigate = useNavigate()

  const { description, image, price, title, category, quantity, totalPrice } =
    products.find((item) => item.id === Number(id))

  return !products ? (
    <Loader />
  ) : (
    <section className="body-font overflow-hidden text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt={`Image ${title}`}
            className="w-full rounded object-cover  object-center lg:h-auto xl:w-1/2"
            src={image}
          />
          <div className="mt-6 w-full xl:mt-0 xl:w-1/2 xl:py-6 xl:pl-10">
            <h2 className="title-font text-sm uppercase tracking-widest text-gray-500">
              {category}
            </h2>
            <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
              {title}
            </h1>
            <div className="mb-4 flex">
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
            <div className="mt-10 flex">
              <span className="title-font mr-2 text-lg font-medium text-zinc-800 sm:text-3xl">
                {formatCurrency(price)}
              </span>
              <button
                onClick={() => navigate('/')}
                className="ml-auto mr-1 flex items-center rounded border border-zinc-700 bg-inherit px-2 py-2 text-sm text-zinc-700  transition delay-75 ease-in hover:bg-zinc-700 hover:text-white focus:outline-none sm:px-4 sm:py-1 md:text-[1rem] lg:px-6 lg:py-2 "
              >
                &larr; Back to store
              </button>
              {isItemAlreadyInsideCart ? (
                <button
                  onClick={() => navigate('/cart')}
                  className="ml-1 mr-1  flex items-center rounded bg-zinc-700 px-2 py-2 text-sm text-white transition delay-75 ease-in hover:border hover:border-zinc-700 hover:bg-inherit hover:text-zinc-700 focus:outline-none sm:px-4 sm:py-1 md:text-[1rem]  lg:px-6 lg:py-2"
                >
                  Go to cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    onAddToCart(id, image, title, quantity, price, totalPrice)
                  }
                  className="ml-1 mr-1  flex  items-center rounded bg-zinc-700  px-3 py-2 text-sm text-white transition delay-75 ease-in hover:border hover:border-zinc-700 hover:bg-inherit hover:text-zinc-700 focus:outline-none sm:px-4 sm:py-1 md:text-[1rem] lg:px-6 lg:py-2"
                >
                  Add to cart
                </button>
              )}

              <button
                onClick={() => handleToggle(id, image, title, price)}
                className={`ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500 shadow transition ease-in hover:scale-110 hover:bg-orange-500 active:scale-90 sm:ml-4  ${
                  itemInsideWishList ? 'bg-orange-400' : ''
                }`}
              >
                <BiHeart size="24" color="#2a2a2a" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
