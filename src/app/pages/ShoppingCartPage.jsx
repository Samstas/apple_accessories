import CartItems from "../../components/CartItems";

function ShoppingCartPage() {
  return (
    <section className="text-center">
      <h1 className="text-xl font-bold uppercase text-zinc-700">Your shopping list</h1>
      <CartItems />
    </section>
  );
}

export default ShoppingCartPage;
