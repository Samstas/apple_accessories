import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function CartItem({ accessoryItem }) {
  const { id, image, title, quantity, totalPrice } = accessoryItem
  const { onIncreaseQuantity, onDecreaseQuantity, onRemoveItem } = useCart()

  return (
    <tr className="text-center text-sm text-zinc-600 sm:text-base">
      <td className="flex items-center px-2 py-4 font-medium sm:px-6  ">
        <Link to={`/accessories/${id}`} className="pt-1 hover:opacity-80">
          <img src={image} alt="img" className="w-[200px]  sm:inline-flex " />
        </Link>
      </td>

      <td className="items-center px-2 py-4 font-medium sm:px-6  ">
        <Link to={`/accessories/${id}`} className="pt-1 hover:text-zinc-500">
          {title}
        </Link>
      </td>

      <td className="py-4  font-medium sm:px-4">
        <button onClick={() => onDecreaseQuantity(id)} className="text-xl">
          -
        </button>
        <span className="mx-2 border bg-white px-2 py-1">{quantity}</span>
        <button onClick={() => onIncreaseQuantity(id)} className="text-xl">
          +
        </button>
      </td>

      <td className="mx-4 my-4 hidden w-[15%] text-base font-light sm:mx-0 sm:table-cell">
        <span className="text-lg">{formatCurrency(totalPrice)}</span>
      </td>

      <td className="w-[10%] px-4 py-4 font-medium sm:px-6">
        <button
          onClick={() => onRemoveItem(id)}
          className=" text-xl text-red-500 transition ease-in hover:scale-105 hover:text-red-700"
        >
          &times;
        </button>
      </td>
    </tr>
  )
}

export default CartItem
