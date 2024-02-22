import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BiShoppingBag, BiUser, BiHeart } from 'react-icons/bi'

import Logo from './Logo'
import SearchField from '../SearchField'

import { getCart } from '../../redux/slices/cartSlice'

function Navbar() {
  const cartQuantity = useSelector(getCart).length

  return (
    <nav className="flex items-center justify-between border-b-2 border-zinc-200 px-4 py-2">
      <Logo />

      <SearchField />

      <ul className="flex items-center gap-2">
        <li>
          <Link to="cart" className="relative">
            <BiShoppingBag className="cursor-pointer text-[1.5rem] text-zinc-800 transition ease-in hover:text-zinc-600" />
            {cartQuantity ? (
              <div className=" absolute h-5 w-5 overflow-hidden  rounded-full bg-orange-400 p-[1px] text-center text-[12px] font-bold text-zinc-800 firefox:-right-[2rem] firefox:top-[0.75rem] safari:-right-2 safari:-top-5  chrome:-right-2 chrome:-top-1">
                {cartQuantity}
              </div>
            ) : null}
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <BiHeart className="cursor-pointer text-[1.5rem] text-zinc-800 transition ease-in hover:text-zinc-600" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <BiUser className="cursor-pointer text-[1.5rem] text-zinc-800 transition ease-in hover:text-zinc-600" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
