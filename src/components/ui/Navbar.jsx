import { BiShoppingBag } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import Logo from "./Logo";
import SearchField from "../SearchField";

// const navLinks = [
//   { title: "Home", path: "/" },
//   { title: "Products", path: "products" },
// ];

function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-2 px-4 py-2">
      <Logo />

      <SearchField />

      <div className="flex gap-2 items-center">
        <BiShoppingBag size="24" color="#2a2a2a" />
        <BiHeart size="24" color="#2a2a2a" />
        <BiUser size="24" color="#2a2a2a" />
      </div>
    </nav>
  );
}

export default Navbar;
