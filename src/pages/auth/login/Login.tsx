import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { Checkbox, Input, message, notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../services/authService";
import { unwrapResult } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  /**
   * @description check token if has -> user pageg/home else -> stay in login page
   */
  useEffect(() => {
    if (Cookies.get("token") != null) {
      const token = JSON.parse(Cookies.get("token"));
      console.log("token check: " + JSON.stringify(token.data));
      navigate("/");
    } else {
      // navigate("/register");
    }
  }, []);

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const validateData = (name: string, value: string) => {
    console.log("validateData", name, value);
    let invalid = true;
    switch (name) {
      case "email":
        if (!value) {
          setUserNameError("Tên đăng nhập không được để trống");
          invalid = false;
        } else {
          setUserNameError("");
        }
        break;
      case "password":
        if (!value) {
          setPasswordError("Mật khẩu không được để trống");
          invalid = false;
        } else {
          setPasswordError("");
        }
        break;

      default:
        break;
    }
    return invalid;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }

    validateData(name, value);
  };
  const formSubmit = async (e: any) => {
    e.preventDefault();
    const userNameValid = validateData("username", user.username);
    const passwordValid = validateData("password", user.password);
    if (!userNameValid && !passwordValid) {
      return;
    }
    try {
      setUser({
        username: email,
        password: password,
      });
      const resultAction = await dispatch(
        login({
          username: email,
          password: password,
        })
      );
      const originalPromiseResult = unwrapResult(resultAction);
      console.log("check", originalPromiseResult);
      if (
        originalPromiseResult.data.roles.some(
          (item: any) => item === "ROLE_STUDENT"
        )
      ) {
        navigate("/test");
      } else {
        //move to admin page or something
        navigate("/register");
      }
      notification.success({
        message: "Đăng nhập thành công",
      });
    } catch (err) {
      notification.error({
        message: "Tài khoản hoặc mật khẩu bị sai. Mời thử lại",
      });
    }
  };
  return (
    <>
      <div className="overflow-hidden">
        <img
          src="/images/Decor_bg.png"
          alt=""
          className="absolute top-[-10%] left-0 z-[11]"
        />
        <div className="login-wrapper ">
          <form className="login-content" onSubmit={formSubmit}>
            <img
              src="/images/Logo.png"
              alt=""
              className="w-[138px] h-[32px] object-contain"
            />
            <div className="mt-[30px] mb-[26px]">
              <h2 className="text-[32px] leading-[40px] font-bold">
                Đăng nhập
              </h2>
              <p className="my-2 text-[14px]">
                Cùng phát triển con đường sự nghiệp với Rekkei Jobs
              </p>
            </div>

            <div className="mb-5 relative">
              <label
                htmlFor="email"
                className="font-medium text-[14px] text-[#3d3d3d] block"
              >
                Email: <span className="text-[14px] text-[#bc2228]">&#42;</span>
              </label>
              <Input
                type="text"
                name="email"
                id="email"
                className="h-[40px] cursor-pointer leading-[40px] pl-4"
                value={email}
                onChange={handleChange}
              />

              {email.length === 0 && (
                <div className="absolute top-[50%] ml-5 text-[#a7a7a7] text-[14px] font-normal flex items-center">
                  <i className="relative top-[1px] fa-regular fa-envelope"></i>
                  <span className="ml-2">you@company.com</span>
                </div>
              )}
              {userNameError?.length !== 0 && (
                <>
                  <div className="absolute top-[100%] left-0 text-[#bc2228] text-[13px] font-normal">
                    {userNameError}
                  </div>
                </>
              )}
            </div>

            <div className="mb-5 relative">
              <label
                htmlFor="password"
                className="font-medium text-[14px] text-[#3d3d3d] block"
              >
                Mật khẩu:{" "}
                <span className="text-[14px] text-[#bc2228]">&#42;</span>
              </label>
              <Input.Password
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                className="h-[40px] cursor-pointer leading-[40px] pl-4"
              />

              {password.length === 0 && (
                <div className="absolute top-[50%] ml-5 text-[#a7a7a7] text-[14px] font-normal flex items-center">
                  <i className="fa-solid fa-lock"></i>
                  <span className="ml-2 relative top-[3px]">**********</span>
                </div>
              )}
              {passwordError?.length !== 0 && (
                <>
                  <div className="absolute top-[100%] left-0 text-[#bc2228] text-[13px] font-normal">
                    {passwordError}
                  </div>
                </>
              )}
            </div>
            <div className="my-1 flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox />{" "}
                <span className="ml-2 text-[14px] text-[#3d3d3d] font-medium">
                  Ghi nhớ đăng nhập
                </span>
              </div>
              <Link
                to=""
                className="text-[#bc2228] text-[14px] font-semibold py-2"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="flex items-center justify-center rounded-[6px] w-full text-[#fff] bg-[#bc2228] h-[46px] font-semibold hover:opacity-80 hover:bg-[#bc2228]"
              >
                Đăng Nhập
              </button>
              <div className="mt-6 text-center">
                Bạn chưa có tài khoản?{" "}
                <Link
                  to="/register"
                  className="ml-1 font-semibold text-[#bc2228] hover:text-[#bc2228] hover:opacity-80"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="login-images-form absolute top-0 right-0 bottom-0 w-[50%] bg-[url(/images/img_login.jfif)] bg-center bg-no-repeat bg-cover pt-[40%] z-0 max-md:hidden"></div>
      </div>
    </>
  );
}
