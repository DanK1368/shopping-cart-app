import "./Validation.scss";
import { Link, useNavigate } from "react-router-dom";
import inputs from "../../../inputs";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../../../features/auth/authSlice";
import React, { useEffect } from "react";

function Validation() {
  const { values, status } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextPage = () => {
    if (status !== 200) {
      return;
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    nextPage();
  }, [status]);

  return (
    <section className="validation">
      <div className="validation__form">
        <div className="validation__form-heading">
          <h2>Sign Up Here</h2>
          <p>Please fill out the form</p>
          <p>You will be able to log in afterwards.</p>
        </div>
        <form
          className="validation__form-container"
          onSubmit={e => {
            e.preventDefault();
            dispatch(validateUser(values));
          }}
        >
          {inputs.map(input => (
            <Input key={input.id} {...input} values={values[input.name]} />
          ))}
          <div className="validation__btn-container">
            <Link to="/register">
              <button className="form-btn">Go Back</button>
            </Link>
            {/* <Link to="login"> */}
            <button className="form-btn">Register</button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </section>
  );
}
export default React.memo(Validation);
