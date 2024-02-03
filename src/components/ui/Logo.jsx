import { AiOutlineApple } from "react-icons/ai"; 
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/accessories?category=all" className="flex items-center gap-1">
      <AiOutlineApple size="30" color="#2a2a2a" />
    </Link>
  );
}

export default Logo;
