import { AiOutlineApple } from "react-icons/ai"; 
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/accessories?category=all" className="flex items-center gap-1">
      <AiOutlineApple className="cursor-pointer text-[2rem] text-zinc-800 hover:text-zinc-600 transition ease-in" />
    </Link>
  );
}

export default Logo;
