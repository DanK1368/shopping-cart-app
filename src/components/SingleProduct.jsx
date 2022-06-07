import "./SingleProduct.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

function SingleProduct({ ...item }) {
  const dispatch = useDispatch();
  const { img, model, price } = item;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="singleProduct"
    >
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
    </motion.div>
  );
}
export default SingleProduct;
