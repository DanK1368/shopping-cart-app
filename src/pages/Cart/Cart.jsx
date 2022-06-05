import "./Cart.scss";
import CartItem from "../../components/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

function Cart() {
  const { cart, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <>
        <section className="cart">
          <div className="cart__container">
            <div className="cart__heading">
              <h2>Your Cart is empty</h2>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="cart">
      <div className="cart__container">
        <div className="cart__heading">
          <h2>Your Cart</h2>
        </div>

        {cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="cart__footer">
          <div className="cart__total">
            <p>Total</p>
            <p>$ {total.toFixed(2)}</p>
          </div>
          <button className="cart__btn" onClick={() => dispatch(clearCart())}>
            Empty Cart
          </button>
        </div>
      </div>
    </section>
  );
}
export default Cart;
