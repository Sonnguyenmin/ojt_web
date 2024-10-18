import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadUserFromCookie, login } from "../services/authService";
import Cookies from "js-cookie";

interface AuthState {
  status: "idle" | "pending" | "successfully" | "failed";
  data: any | null; // Replace `any` with the specific data structure if available
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  status: "idle",
  data: null,
  error: null,
  isLoggedIn: false, // Trạng thái đăng nhập
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("token");
      state.data = null;
      state.isLoggedIn = false; // Đặt lại trạng thái đăng nhập
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true; // Đặt trạng thái đăng nhập thành true khi đăng nhập thành công
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "pending";
      })

      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "successfully";
        state.isLoggedIn = true;
        console.log("action.status = " + action.payload);
        state.data = action.payload;
      })

      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.isLoggedIn = false;
        state.error = action.error.message || "Login failed";
      })

      .addCase(loadUserFromCookie.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
