import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

function CartItem({ accessoryItem }) {
  const { id, image, title, quantity, totalPrice } = accessoryItem;
  const { onIncreaseQuantity, onDecreaseQuantity, onRemoveItem } = useCart();

  return (
    <tr className="text-sm sm:text-base text-zinc-600 text-center">
      
      <td className="px sm:px-6 py-4 flex items-center font-medium  ">
        <Link to={`/accessories/${id}`} className="pt-1 hover:opacity-80">
          <img src={image} alt="img" className="sm:inline-flex  w-[200px] " />
        </Link>
      </td>

      <td className="px-4 sm:px-6 py-4 items-center font-medium  ">
        <Link to={`/accessories/${id}`} className="pt-1 hover:text-zinc-500">
          {title}
        </Link>
      </td>

      <td className="font-medium  sm:px-4 py-4">
        <button onClick={() => onDecreaseQuantity(id)} className="text-xl">
          -
        </button>
        <span className="border bg-white px-2 py-1 mx-2">{quantity}</span>
        <button onClick={() => onIncreaseQuantity(id)} className="text-xl">
          +
        </button>
      </td>

      <td className="text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
        <span className="text-lg">{formatCurrency(totalPrice)}</span>
      </td>

      <td className="font-medium px-4 sm:px-6 py-4">
        <button
          onClick={() => onRemoveItem(id)}
          className="text-xl text-red-500 hover:text-red-700 transition ease-in hover:scale-105"
        >
          &times;
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
