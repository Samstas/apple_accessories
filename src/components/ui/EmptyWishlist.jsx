import { GiHeartMinus } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function EmptyWishlist() {
  const navigate = useNavigate();

  return (
    // <section className="flex flex-col justify-center items-center">
    //   <BsFillCartDashFill />
    //
    // </section>
    <section className="flex justify-center items-center flex-col mt-6 text-zinc-300 h-[50vh]">
      <GiHeartMinus className="text-[12.5rem]" />
      <h1 className="text-xl uppercase mt-4 mb-4">Your wishlist is empty!</h1>
      <button
        onClick={() => navigate("/")}
        className="hover:underline text-zinc-600"
      >
        &larr; Back to store
      </button>
    </section>
  );
}

export default EmptyWishlist;
