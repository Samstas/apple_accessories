import CartItems from "../../components/CartItems";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/slices/cartSlice";
import EmptyCart from "../../components/ui/EmptyCart";

function ShoppingCartPage() {
  const isCartHasItems = !!useSelector(getCart).length; //boolean
  // console.log(isCartHasItems);

  return (
    <section className="text-center">
      {/* <h1 className="text-xl font-bold uppercase text-zinc-700">
        Your shopping list
      </h1> */}
      {isCartHasItems ? <CartItems /> : <EmptyCart />}
    </section>
  );
}

export default ShoppingCartPage;
