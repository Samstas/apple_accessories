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
        <div className="flex justify-around items-center  mt-6">
          <Link
            to="/"
            className="border-[1px] py-2 px-3  rounded-md  hover:text-white hover:bg-zinc-700 text-zinc-700 bg-inherit border-zinc-700 transition ease-in delay-75"
          >
            &larr; Back to products
          </Link>
          <Link className="border-[1px] py-2 px-3  rounded-md bg-zinc-700 text-white border-zinc-300   hover:text-zinc-700 hover:bg-inherit hover:border-zinc-700 transition ease-in delay-75">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartItems;
