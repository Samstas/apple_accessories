import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCart } from "../redux/slices/cartSlice";
import { useCart } from "../context/CartContext";

import CartItem from "./CartItem";

function CartItems() {
  const cart = useSelector(getCart);
  const { totalCartPrice } = useCart();

  return (
    <>
      <div className="min-h-80 max-w-4xl my-4 sm:my-8 mx-auto w-full">
        <table className="mx-auto">
          {/* Table head  */}
          <thead>
            <tr className="uppercase text-xs sm:text-sm border-b">
              <th className="font-normal text-zinc-400 px-6 py-4">Product</th>
              <th className="font-normal text-zinc-400 px-6 py-4">Name</th>
              <th className="font-normal text-zinc-400 px-6 py-4">Quantity</th>
              <th className="font-normal text-zinc-400 px-6 py-4 hidden sm:table-cell">
                Price
              </th>
              <th className="font-normal text-zinc-400 px-6 py-4">Remove</th>
            </tr>
          </thead>
          {/* Table Body  */}
          <tbody className="divide-y">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} accessoryItem={cartItem} />
            ))}
            <tr className="text-center">
              <td></td>
              <td className="text-base text-zinc-700 font-semibold uppercase px-4 sm:px-6 py-4">
                Total
              </td>
              {/* TODO: write like reducer to sum all prices  */}
              <td className="text-lg font-medium px-4 sm:px-6 py-4">
                ${totalCartPrice}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* Buttons  */}
        <div className="flex gap-2 items-center justify-end ">
          <Link
            to="/"
            className="border px-4 py-2 border-zinc-600 hover:bg-zinc-600 hover:text-white "
          >
            Back to products
          </Link>
          <Link className="border px-4 py-2 border-zinc-600 hover:bg-zinc-600 hover:text-white ">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartItems;
