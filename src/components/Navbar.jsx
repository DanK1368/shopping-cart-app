import "./Navbar.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector(store => store.cart);
  const { token } = useSelector(store => store.auth);
  const navigate = useNavigate();

  const allowAccess = () => {
    if (token === undefined) {
      return;
    } else {
      navigate("/cart");
    }
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
      <div className="header__cart-container">
        <div className="header__btn-wrapper">
          <button onClick={allowAccess}>
            {token === undefined ? (
              <h5 className="header__login-msg">Please log in to view cart</h5>
            ) : (
              ""
            )}
            <ShoppingCartIcon />
          </button>
          <p className="header__cart-amount">{amount}</p>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
