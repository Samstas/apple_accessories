import CartItems from '../../components/cart/CartItems'
import { useSelector } from 'react-redux'
import { getCart } from '../../redux/slices/cartSlice'
import EmptyCart from '../../components/ui/EmptyCart'

function ShoppingCartPage() {
  const isCartHasItems = !!useSelector(getCart).length //boolean

  return (
    <section className="text-center">
      {isCartHasItems ? <CartItems /> : <EmptyCart />}
    </section>
  )
}

export default ShoppingCartPage
