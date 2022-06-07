import "./Products.scss";
import cartItems from "../../cart-items";
import SingleProduct from "../../components/SingleProduct";
import Transitions from "../../components/Transition";

function Products() {
  return (
    <Transitions>
      <section className="products">
        <div className="products__grid">
          {cartItems.map(item => (
            <SingleProduct key={item.id} {...item} />
          ))}
        </div>
      </section>
    </Transitions>
  );
}
export default Products;
