import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiShoppingBag, BiUser, BiHeart } from "react-icons/bi";

import Logo from "./Logo";
import SearchField from "../SearchField";

import { getCart } from "../../redux/slices/cartSlice";

// const navLinks = [
//   { title: "Home", path: "/" },
//   { title: "Products", path: "products" },
// ];

function Navbar() {
  const cartQuantity = useSelector(getCart).length;

  return (
    <nav className="flex justify-between items-center border-b-2 border-zinc-200 px-4 py-2">
      <Logo />

      <SearchField />

      <ul className="flex gap-2 items-center">
        <li>
          <Link to="cart" className="relative">
            <BiShoppingBag className="cursor-pointer text-[1.5rem] text-zinc-800 hover:text-zinc-600 transition ease-in" />
            {cartQuantity ? (
              <div className=" w-5 h-5 text-center font-bold  absolute -right-2 -top-1 sm:-right-2 sm:-top-1 bg-orange-400 text-zinc-800 text-[12px] rounded-full p-[1px] overflow-hidden">
                {cartQuantity}
              </div>
            ) : null}
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <BiHeart className="cursor-pointer text-[1.5rem] text-zinc-800 hover:text-zinc-600 transition ease-in" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <BiUser className="cursor-pointer text-[1.5rem] text-zinc-800 hover:text-zinc-600 transition ease-in" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
