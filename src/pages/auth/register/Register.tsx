import { Button, Input, notification } from "antd";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { register } from "@/services/authService";
import { validateEmail } from "@/utils/validateData";
import Cookies from "js-cookie";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
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

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateData = (name: string, value: string) => {
    let invalid = true;
    switch (name) {
      case "email":
        if (!value) {
          setEmailError("Email không được để trống");
          invalid = false;
        } else {
          if (!validateEmail(value)) {
            setEmailError("Email sai định dạng");
            invalid = false;
          } else {
            setEmailError("");
          }
        }
        break;

      case "password":
        if (!value) {
          setPasswordError("Mật khẩu không thể trống");
          invalid = false;
        } else {
          if (value.length < 6) {
            setPasswordError("Mật khẩu phải nhiều hơn 6 kí tự");
            invalid = false;
          } else {
            setPasswordError("");
          }
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
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }

    validateData(name, value);
  };

  const handleSubmitForm = async (e: any) => {
    // Submit forrm
    e.preventDefault();
    const fullNameValid = validateData("username", user.username);
    const emailValid = validateData("email", user.email);
    const passwordValid = validateData("password", user.password);
    if (!fullNameValid && !emailValid && !passwordValid) {
      return;
    }
    if (confirmPassword != password) {
      notification.error({
        message: "Mật khẩu và xác nhận mật khẩu không khớp",
      });
      return;
    }
    try {
      const response = await register({
        username: email.split("@")[0],
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (err) {
      notification.error({
        message: "Tài khoản đã bị ",
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
        <div className="fixed top-0 left-0 right-[-10%] bottom-0 bg-[url(/images/img_register.jfif)] bg-center bg-no-repeat bg-cover pt-[40px] z-0 max-md:hidden"></div>
        <div className="register-wrapper">
          <form className="register-content" onSubmit={handleSubmitForm}>
            <img
              src="/images/Logo.png"
              alt=""
              className="w-[138px] h-[32px] object-contain"
            />
            <div className="mt-[30px] mb-[26px]">
              <h2 className="text-[32px] leading-[40px] font-bold">Đăng ký</h2>
              <p className="my-2 text-[14px]">
                Cùng phát triển con đường sự nghiệp với Rekkei Jobs
              </p>
            </div>

            <div className="mb-5 relative">
              <label
                htmlFor="email"
                className="font-medium text-[14px] text-[#3d3d3d] block"
              >
                Email:
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                className="h-[40px] cursor-pointer leading-[40px] pl-4"
                value={email}
                onChange={handleChange}
              />
              {email?.length === 0 && (
                <div className="absolute top-[50%] ml-5 text-[#a7a7a7] text-[14px] font-normal flex items-center">
                  <i className="relative top-[1px] fa-regular fa-envelope"></i>
                  <span className="ml-2">you@company.com</span>
                </div>
              )}
              {emailError?.length !== 0 && (
                <>
                  <div className="absolute top-[100%] left-0 text-[#bc2228] text-[13px] font-normal">
                    {emailError}
                  </div>
                </>
              )}
            </div>

            <div className="mb-5 relative">
              <label
                htmlFor="password"
                className="font-medium text-[14px] text-[#3d3d3d] block"
              >
                Mật khẩu:
              </label>
              <Input.Password
                type="password"
                name="password"
                id="password"
                className="h-[40px] cursor-pointer leading-[40px] pl-4"
                value={password}
                onChange={handleChange}
              />
              {password?.length === 0 && (
                <div className="absolute top-[50%] ml-5 text-[#a7a7a7] text-[14px] font-normal flex items-center">
                  <i className="fa-solid fa-lock"></i>
                  <span className="ml-2 relative top-[3px]">***********</span>
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

            <div className="mb-5 relative">
              <label
                htmlFor="confirmPassword"
                className="font-medium text-[14px] text-[#3d3d3d] block"
              >
                Xác nhận mật khẩu:
              </label>
              <Input.Password
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="h-[40px] cursor-pointer leading-[40px] pl-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPassword?.length === 0 && (
                <div className="absolute top-[50%] ml-5 text-[#a7a7a7] text-[14px] font-normal flex items-center">
                  <i className="fa-solid fa-lock"></i>
                  <span className="ml-2 relative top-[3px]">**********</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="flex items-center justify-center rounded-[6px] w-full text-[#fff] bg-[#bc2228] h-[46px] font-semibold hover:opacity-80 hover:bg-[#bc2228]"
              >
                Đăng ký
              </button>
              <div className="mt-6 text-center">
                Bạn đã có tài khoản?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#bc2228] hover:text-[#bc2228] hover:opacity-80"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
