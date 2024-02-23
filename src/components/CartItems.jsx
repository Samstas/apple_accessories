import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCart } from '../redux/slices/cartSlice'
import { useCart } from '../context/CartContext'

import { formatCurrency } from '../utils/formatCurrency'
import { useAuth } from '../hooks/useAuth'
import CartItem from './CartItem'

function CartItems() {
  const cart = useSelector(getCart)
  const { totalCartPrice } = useCart()
  const { isAuth } = useAuth()

  return (
    <>
      <div className="mx-auto my-4 min-h-80 w-full max-w-4xl sm:my-8">
        <table className="mx-auto sm:w-full">
          {/* Table head  */}
          <thead>
            <tr className="border-b text-xs uppercase sm:text-sm">
              <th className="w-0 px-2 py-1 font-normal text-zinc-400 md:px-6 md:py-4">
                Product
              </th>
              <th className="w-0 px-1 py-1 font-normal text-zinc-400 md:px-6 md:py-4">
                Name
              </th>
              <th className="w-0 px-2 py-1 font-normal text-zinc-400 md:px-6 md:py-4">
                Quantity
              </th>
              <th className="hidden w-0 px-6 py-4 font-normal text-zinc-400 sm:table-cell">
                Price
              </th>
              <th className="w-0 px-2 py-1 font-normal text-zinc-400 md:px-6 md:py-4">
                Remove
              </th>
            </tr>
          </thead>
          {/* Table Body  */}
          <tbody className="divide-y">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} accessoryItem={cartItem} />
            ))}
            <tr className="text-center">
              <td></td>
              <td className="px-2 py-8 text-base font-semibold uppercase text-zinc-700 sm:px-6">
                Total
              </td>
              {/* TODO: write like reducer to sum all prices  */}
              <td className="w-[30%] px-0 py-4 text-xl font-medium sm:w-[20%]  sm:px-0 ">
                {formatCurrency(totalCartPrice)}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* Buttons  */}
        <div className="mt-6 flex items-center  justify-around">
          <Link
            to="/"
            className="rounded-md border border-zinc-700  bg-inherit  px-3 py-2 text-zinc-700 transition delay-75 ease-in hover:bg-zinc-700 hover:text-white"
          >
            &larr; Back to products
          </Link>
          <Link
            to={isAuth ? '/payment' : '/login'}
            className="rounded-md border border-orange-400 bg-inherit  px-3 py-2 font-bold uppercase text-zinc-800  transition delay-75 ease-in hover:border-zinc-700 hover:bg-orange-400 hover:shadow-md"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartItems
