import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartItem({ accessoryItem }) {
  const { id, image, title, quantity, totalPrice } = accessoryItem;
  const { onIncreaseQuantity, onDecreaseQuantity, onRemoveItem } = useCart();

  return (
    <tr className="text-sm sm:text-base text-gray-600 text-center">
      <td className="px-4 sm:px-6 py-4 flex items-center font-medium  ">
        <img src={image} alt="img" className="sm:inline-flex  w-[200px]" />
      </td>

      <td className="px-4 sm:px-6 py-4 items-center font-medium  ">
        <Link to="#" className="pt-1 hover:text-zinc-500">
          {title}
        </Link>
      </td>

      <td className="font-medium px-4 sm:px-6 py-4">
        <button onClick={() => onDecreaseQuantity(id)} className="text-xl">
          -
        </button>
        <span className="border bg-white px-2 py-1 mx-2">{quantity}</span>
        <button onClick={() => onIncreaseQuantity(id)} className="text-xl">
          +
        </button>
      </td>

      <td className="text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
        $ <span className="text-lg">{totalPrice}</span>
      </td>

      <td className="font-medium px-4 sm:px-6 py-4">
        <button
          onClick={() => onRemoveItem(id)}
          className="text-xl text-red-600"
        >
          &times;
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
