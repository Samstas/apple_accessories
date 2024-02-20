import CartItems from "../../components/CartItems";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/slices/cartSlice";
import EmptyCart from "../../components/ui/EmptyCart";

function ShoppingCartPage() {
  const isCartHasItems = !!useSelector(getCart).length; //boolean
  // console.log(isCartHasItems);

  return (
    <section className="text-center">
      {isCartHasItems ? <CartItems /> : <EmptyCart />}
    </section>
  );
}

export default ShoppingCartPage;
