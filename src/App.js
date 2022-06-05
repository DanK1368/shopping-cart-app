import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Register from "./pages/Validation/Register/Register";
import Login from "./pages/Validation/Login/Login";
import Validation from "./pages/Validation/validation/Validation";
import Cart from "./pages/Cart/Cart";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cart } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="register/validation" element={<Validation />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
