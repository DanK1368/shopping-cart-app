import "./SingleProduct.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function SingleProduct({ ...item }) {
  const dispatch = useDispatch();
  const { img, model, price } = item;

  return (
    <div className="singleProduct">
      <h3 className="singleProduct__model">{model}</h3>
      <img src={img} alt={model} />
      <div className="singleProduct__container">
        <button
          className="singleProduct__btn"
          onClick={() => dispatch(addToCart(item))}
        >
          <AddShoppingCartIcon />
        </button>
        {`$ ${price.toFixed(2)}`}
      </div>
    </div>
  );
}
export default SingleProduct;
