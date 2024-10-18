import { createAsyncThunk } from "@reduxjs/toolkit";
import { jsonAxios } from "../apis/axios.instance";
import Cookies from "js-cookie";
import { notification } from "antd";

interface User {
  username: string;
  password: string;
  // Add other fields as necessary
}

interface UserRegister {
  username: string;
  password: string;
  email: string;
}

interface LoginResponse {
  data: any; // You can define a more specific type if you know the structure of the response data
}

export const register = async (user: UserRegister) => {
  try {
    const response = await jsonAxios.post("auth/register", user);
    return response;
  } catch (err) {
    notification.error({
      message: err.data.data,
    });
  }
};

export const login = createAsyncThunk(
  "auth/login",
  async (user: User): Promise<LoginResponse> => {
    const response = await jsonAxios.post<LoginResponse>("/auth/login", user);
    Cookies.set("token", JSON.stringify(response.data));
    return response.data;
  }
);

/**
 * Function to load user data from cookies and save to Redux
 */
export const loadUserFromCookie = createAsyncThunk(
  "auth/loadUserFromCookie",
  async (token: string): Promise<string> => {
    return token;
  }
);
