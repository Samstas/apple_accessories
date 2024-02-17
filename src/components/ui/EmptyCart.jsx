import { BsFillCartDashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center flex-col mt-6 text-zinc-300 h-[50vh]">
      <BsFillCartDashFill className="text-[12.5rem]" />
      <h1 className="text-xl uppercase mt-4 mb-4">Your cart is empty!</h1>
      <button
        onClick={() => navigate("/")}
        className="hover:underline text-zinc-600"
      >
        &larr; Back to store
      </button>
    </section>
  );
}

export default EmptyCart;
