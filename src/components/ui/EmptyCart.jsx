import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center">
      <img
        src={"https://www.clickscreative.com/images/empty-cart.png"}
        alt="image of empty cart"
      />
      <button onClick={() => navigate("/")} className="hover:underline">
        &larr; Back to store
      </button>
    </section>
  );
}

export default EmptyCart;
