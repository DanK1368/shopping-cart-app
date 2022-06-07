import "./Login.scss";
import { useNavigate } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { handleLoginInput } from "../../../features/auth/authSlice";
import { loginUser } from "../../../features/auth/authSlice";
import Transitions from "../../../components/Transition";

function Login() {
  const { email, password } = useSelector(store => store.auth.values);
  const { status } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(status);

  const nextPage = useCallback(() => {
    if (status !== 200) {
      return;
    } else {
      navigate("/products");
    }
  }, [status, navigate]);

  useEffect(() => {
    nextPage();
  }, [status, nextPage]);

  return (
    <Transitions>
      <section className="register">
        <form
          className="register__form"
          onSubmit={e => {
            e.preventDefault();
            dispatch(loginUser({ email: email, password: password }));
          }}
        >
          <div className="register__form-heading">
            <h2>Login</h2>
          </div>
          <div className="register__form-container">
            <label className="register__form-label">
              <EmailIcon
                className="register__form-input-icon"
                htmlColor="dodgerblue"
              />
              <input
                className="register__form-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => {
                  e.preventDefault();
                  dispatch(
                    handleLoginInput({
                      value: e.target.value,
                      inputName: e.target.name,
                    })
                  );
                }}
                value={email}
              />
            </label>
            <label className="register__form-label">
              <KeyIcon
                className="register__form-input-icon"
                htmlColor="dodgerblue"
              />
              <input
                className="register__form-input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => {
                  e.preventDefault();
                  dispatch(
                    handleLoginInput({
                      value: e.target.value,
                      inputName: e.target.name,
                    })
                  );
                }}
                value={password}
              />
            </label>
            <button className="form-btn">Login</button>
          </div>
        </form>
      </section>
    </Transitions>
  );
}
export default Login;
