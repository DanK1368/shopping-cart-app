import { useDispatch } from "react-redux";
import "./Input.scss";
import { handleSignUpInput } from "../features/auth/authSlice";

function Input({ ...input }) {
  const dispatch = useDispatch();

  const { name, type, placeholder, icon } = input;
  return (
    <label className="validation__form-label">
      {icon}
      <input
        name={name}
        className="validation__form-input"
        type={type}
        placeholder={placeholder}
        onChange={e => {
          e.preventDefault();
          dispatch(
            handleSignUpInput({ value: e.target.value, inputName: input.name })
          );
        }}
      />
    </label>
  );
}
export default Input;
