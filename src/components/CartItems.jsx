import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCart } from "../redux/slices/cartSlice";
import { useCart } from "../context/CartContext";

import CartItem from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import { useAuth } from "../hooks/useAuth";

function CartItems() {
  const cart = useSelector(getCart);
  const { totalCartPrice } = useCart();
  const { isAuth } = useAuth();

  return (
    <>
      <div className="min-h-80 max-w-4xl my-4 sm:my-8 mx-auto w-full">
        <table className="mx-auto sm:w-full">
          {/* Table head  */}
          <thead>
            <tr className="uppercase text-xs sm:text-sm border-b">
              <th className="font-normal w-0 text-zinc-400 md:px-6 md:py-4 px-2 py-1">
                Product
              </th>
              <th className="font-normal w-0 text-zinc-400 md:px-6 md:py-4 px-2 py-1">
                Name
              </th>
              <th className="font-normal w-0 text-zinc-400 md:px-6 md:py-4 px-2 py-1">
                Quantity
              </th>
              <th className="font-normal w-0 text-zinc-400 px-6 py-4 hidden sm:table-cell">
                Price
              </th>
              <th className="font-normal w-0 text-zinc-400 md:px-6 md:py-4 px-2 py-1">
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
              <td className="text-base text-zinc-700 font-semibold uppercase px-4 sm:px-6 py-8">
                Total
              </td>
              {/* TODO: write like reducer to sum all prices  */}
              <td className="text-xl font-medium px-4 sm:px-6 py-4">
                {formatCurrency(totalCartPrice)}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* Buttons  */}
        <div className="flex justify-around items-center  mt-6">
          <Link
            to="/"
            className="border py-2 px-3  rounded-md  hover:text-white hover:bg-zinc-700 text-zinc-700 bg-inherit border-zinc-700 transition ease-in delay-75"
          >
            &larr; Back to products
          </Link>
          <Link
            to={isAuth ? "/payment" : "/login"}
            className="border py-2 px-3 border-orange-400  rounded-md bg-inherit text-zinc-800 uppercase font-bold  hover:bg-orange-400 hover:border-zinc-700 transition ease-in hover:shadow-md delay-75"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartItems;
