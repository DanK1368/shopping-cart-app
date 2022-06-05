import "./CartItem.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { increase, decrease, remove } from "../features/cart/cartSlice";

function CarItem({ img, price, model, amount, id }) {
  const dispatch = useDispatch();

  return (
    <div className="cart__item">
      <div className="cart__item__details-container">
        <img className="cart__item__img" src={img} alt="" />
        <div className="cart__item__details">
          <h3>{model}</h3>
          <p>$ {price.toFixed(2)}</p>
          <button
            className="cart__item__btn"
            onClick={() => dispatch(remove(id))}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cart__item__amount">
        <button onClick={() => dispatch(increase(id))}>
          <KeyboardArrowUpIcon />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(remove(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </div>
  );
}
export default CarItem;
