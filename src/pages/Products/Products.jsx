import "./Products.scss";
import cartItems from "../../cart-items";
import SingleProduct from "../../components/SingleProduct";

function Products() {
  return (
    <section className="products">
      <div className="products__grid">
        {cartItems.map(item => (
          <SingleProduct key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
export default Products;
