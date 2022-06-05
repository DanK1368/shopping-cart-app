import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  values: {
    email: "",
    username: "",
    code: "",
    password: "",
    passwordRepeat: "",
    firstName: "",
    lastName: "",
  },
  token: undefined,
  status: undefined,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async email => {
    try {
      const resp = await axios({
        method: "POST",
        url: "https://motion.propulsion-home.ch/backend/api/auth/registration/",
        data: {
          email: email,
        },
      });
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const validateUser = createAsyncThunk(
  "auth/validateUser",
  async (input, thunkAPI) => {
    try {
      const {
        code,
        email,
        firstName,
        lastName,
        password,
        passwordRepeat,
        username,
      } = input;
      const resp = await axios({
        method: "PATCH",
        url: "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/",
        data: {
          email: email,
          username: username,
          code: code,
          password: password,
          password_repeat: passwordRepeat,
          first_name: firstName,
          last_name: lastName,
        },
      });
      thunkAPI.fulfillWithValue(resp.status);
      return resp.status;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.message,
      });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (input, thunkAPI) => {
    try {
      const { email, password } = input;
      const resp = await axios({
        method: "POST",
        url: "https://motion.propulsion-home.ch/backend/api/auth/token/",
        data: {
          email: email,
          password: password,
        },
      });
      return thunkAPI.fulfillWithValue({
        status: resp.status,
        token: resp.data.access,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.message,
      });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleRegisterInput: (state, { payload }) => {
      state.values = { ...state.values, email: payload };
    },
    handleSignUpInput: (state, { payload }) => {
      const { inputName, value } = payload;
      state.values = { ...state.values, [inputName]: value };
    },
    handleLoginInput: (state, { payload }) => {
      const { inputName, value } = payload;
      state.values = { ...state.values, [inputName]: value };
    },
  },
  extraReducers: {
    [validateUser.fulfilled]: (state, { payload }) => {
      state.status = payload;
    },
    [validateUser.rejected]: (state, { payload }) => {
      state.status = payload.status;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { status, token } = payload;
      state.token = token;
      state.status = status;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.status = payload.status;
    },
  },
});

export const { handleRegisterInput, handleSignUpInput, handleLoginInput } =
  authSlice.actions;

export default authSlice.reducer;
