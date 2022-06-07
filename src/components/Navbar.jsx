import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const AnimateNav = ({ children }) => {
  return <motion.div whileHover={{ scale: 1.1 }}>{children}</motion.div>;
};

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
        <AnimateNav>
          <NavLink to="/">Home</NavLink>
        </AnimateNav>
        <AnimateNav>
          <NavLink to="products">Products</NavLink>
        </AnimateNav>
        <AnimateNav>
          <NavLink to="register">Register</NavLink>
        </AnimateNav>
        <AnimateNav>
          <NavLink to="login">Login</NavLink>
        </AnimateNav>
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
