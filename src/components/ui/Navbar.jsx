import { BiShoppingBag, BiUser, BiHeart } from "react-icons/bi";

import Logo from "./Logo";
import SearchField from "../SearchField";
import { Link } from "react-router-dom";

// const navLinks = [
//   { title: "Home", path: "/" },
//   { title: "Products", path: "products" },
// ];

function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-2 px-4 py-2">
      <Logo />

      <SearchField />

      <ul className="flex gap-2 items-center">
        <li>
          <Link to="cart" className="relative">
            <BiShoppingBag
              size="24"
              color="#2a2a2a"
              className="cursor-pointer"
            />
            <div className=" w-5 h-5 text-center font-bold  absolute -right-2 -top-1 sm:-right-2 sm:-top-1 bg-violet-400 text-zinc-800 text-[12px] rounded-full p-[1px] overflow-hidden">
              1
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <BiHeart size="24" color="#2a2a2a" className="cursor-pointer" />
          </Link>
        </li>
        <li>
          <Link>
            <BiUser size="24" color="#2a2a2a" className="cursor-pointer" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
