import "./Register.scss";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterInput } from "../../../features/auth/authSlice";
import { registerUser } from "../../../features/auth/authSlice";

function Register() {
  const dispatch = useDispatch();
  const { email } = useSelector(store => store.auth.values);
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("validation");
  };

  return (
    <section className="register">
      <form
        className="register__form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(registerUser(email));
          nextPage();
        }}
      >
        <div className="register__form-heading">
          <h2>Register Here</h2>
          <p>Enter your email address to register.</p>
          <p>A code will be sent to your email for verification.</p>
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
              placeholder="Email"
              value={email}
              onChange={e => {
                e.preventDefault();
                dispatch(handleRegisterInput(e.target.value));
              }}
            />
          </label>
          <button className="form-btn">Register</button>
        </div>
      </form>
    </section>
  );
}
export default Register;
