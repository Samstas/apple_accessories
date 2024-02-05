import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../redux/slices/cartSlice";

function CartItem({ item }) {
  const { id, image, title, quantity, price, totalPrice } = item;
  const dispatch = useDispatch();

  function handleIncreaseQuantity(itemId) {
    dispatch(increaseItemQuantity(itemId));
  }

  function handleDecreaseQuantity(itemId) {
    dispatch(decreaseItemQuantity(itemId));
  }

  function handleRemoveItem(itemId) {
    dispatch(removeItem(itemId));
  }
  // function test(e) {
  //   setNum(e.target.value)
  // }
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
        {/* TODO: I need to resolve problem with input, because now i can just increase quantity no matter if i press arrow up or down  */}
        {/* <input
          type="number"
          className="py-1 px-3 form-input border border-zinc-300 w-16 rounded-sm focus:border-zinc-700 focus:ring-zinc-400"
          value={quantity}
          onChange={(e) => handleUpdateQuantity(id, e.target.value)}
        /> */}
        <button onClick={() => handleDecreaseQuantity(id)} className="text-xl">
          -
        </button>
        <span className="border bg-white px-2 py-1 mx-2">{quantity}</span>
        <button onClick={() => handleIncreaseQuantity(id)} className="text-xl">
          +
        </button>
      </td>

      <td className="text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
        $ <span className="text-lg">{totalPrice}</span>
      </td>

      <td className="font-medium px-4 sm:px-6 py-4">
        <button
          onClick={() => handleRemoveItem(id)}
          className="text-xl text-red-600"
        >
          &times;
        </button>
      </td>
      {/* test  */}
      {/* <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      {num} */}
    </tr>
  );
}

export default CartItem;
