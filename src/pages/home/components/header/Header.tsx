import "./header.scss";
import { DownOutlined, LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Button } from "antd";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export default function Header() {
  // check if there are any user
  const [user, setUser] = useState(null);

  const [isHasUser, setIsHasUser] = useState(false);
  useEffect(() => {
    if (Cookies.get("token") != null) {
      const token = JSON.parse(Cookies.get("token"));
      console.log("token check: " + JSON.stringify(token.data));
      setUser(token.data.user);
      setIsHasUser(true);
    } else {
      setIsHasUser(false);
    }
  }, []);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    const menu = document.querySelector(".menu_sidebar_res");
    setIsOpenMenu(!isOpenMenu);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="profile">
          <div className="profile_img">
            <img src="" alt="" />
            <span></span>
          </div>
          <div className="profile_text">
            <p>Vien nguyen</p>
            <span>vien@gmail.com</span>
          </div>
        </div>
      ),
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <Link to="/user-info" className="profile_item">
          Thông tin cá nhân
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="#" className="profile_item">
          Cài đặt
        </Link>
      ),
    },
    {
      key: "4",
      label: <div className="profile_item active">Đăng Xuất</div>,
      icon: (
        <div className="profile_icon">
          <LogoutOutlined />
        </div>
      ),
    },
  ];

  const drops: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href="https://www.luohanacademy.com"
        >
          English
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href="https://www.aliyun.com"
        >
          Japanese
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href="https://www.luohanacademy.com"
        >
          Vietnamese
        </a>
      ),
    },
  ];

  const menuRes: MenuProps["items"] = [
    {
      key: "100",
      label: (
        <div className="profile">
          <div className="profile_img">
            <img src="" alt="" />
            <span></span>
          </div>
          <div className="profile_text">
            <p>Vien nguyen</p>
            <span>vien@gmail.com</span>
          </div>
        </div>
      ),
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "98",
      label: (
        <p onClick={handleOpenMenu} className="profile_item">
          Menu
        </p>
      ),
    },
    {
      key: "101",
      label: (
        <Link to="/user-info" className="profile_item">
          Thông tin cá nhân
        </Link>
      ),
    },
    {
      key: "102",
      label: (
        <Link to="#" className="profile_item">
          Cài đặt
        </Link>
      ),
    },
    {
      key: "103",
      label: <div className="profile_item active">Đăng Xuất</div>,
      icon: (
        <div className="profile_icon">
          <LogoutOutlined />
        </div>
      ),
    },
  ];
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="logo">
          <div className="logo_img">
            <Link to="/">
              <img src="/public/images/Logo.png" alt="" />
            </Link>
          </div>
          <ul className="header_items">
            <li className="header_item">
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? "link-item active" : "link-item"
                }
              >
                Việc Làm
              </NavLink>
            </li>
            <li className="header_item">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "link-item active" : "link-item"
                }
              >
                Hồ sơ & CV
              </NavLink>
            </li>
            <li className="header_item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link-item active" : "link-item"
                }
              >
                Về chúng tôi
              </NavLink>
            </li>
            <li className="header_item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link-item active" : "link-item"
                }
              >
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_icon">
          <div className="header_icon-lang">
            <div className="header_lang">
              <div className="icon_img">
                <img src="/public/Homepage/Vector.png" alt="" />
              </div>
              <div className="drop_lang">
                <Dropdown
                  menu={{ items: drops }}
                  placement="bottomRight"
                  className="cursor-pointer"
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="icon-text">
                      VN <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>

            {isHasUser ? (
              <>
                <div className="drop_menu">
                  <Space direction="vertical">
                    <Space wrap>
                      <Dropdown
                        menu={{ items }}
                        placement="bottomLeft"
                        arrow={{ pointAtCenter: true }}
                      >
                        <Button className="header_btn">
                          <img src="" alt="" />
                        </Button>
                      </Dropdown>
                    </Space>
                  </Space>
                </div>
                <div className="drop_menu_res hidden">
                  <Space direction="vertical">
                    <Space wrap>
                      <Dropdown
                        menu={{ items: menuRes }}
                        placement="bottomLeft"
                        arrow={{ pointAtCenter: true }}
                      >
                        <MenuOutlined />
                      </Dropdown>
                    </Space>
                  </Space>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-[12px]">
                  <Button className="border-none font-semibold text-[14px] leading-[20px] text-[#848484]">
                    <Link to="/register">Đăng ký</Link>
                  </Button>
                  <Button
                    className="border-none bg-[#AB1F24] px-[16px] py-[10px] rounded-[8px]
                  font-semibold text-[14px] leading-[20px] text-white"
                  >
                    <Link to="/login">Đăng nhập</Link>
                  </Button>
                </div>
                <div className="drop_menu_res hidden">
                  <MenuOutlined
                    onClick={() => {
                      setIsOpenMenu(!isOpenMenu);
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      <div
        className={
          isOpenMenu
            ? "w-[100%] menu_sidebar_res open_menu_res"
            : "w-[100%] menu_sidebar_res"
        }
      >
        <nav className="grid grid-flow-row px-5">
          <div className="">
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "link-item active h-[40px] mb-2 flex w-full items-center"
                  : "link-item h-[40px] mb-2 flex w-full items-center"
              }
            >
              Việc Làm
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "link-item active h-[40px] mb-2 flex w-full items-center"
                  : "link-item h-[40px] mb-2 flex w-full items-center"
              }
            >
              Hồ sơ & CV
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "link-item active h-[40px] mb-2 flex w-full items-center"
                  : "link-item h-[40px] mb-2 flex w-full items-center"
              }
            >
              Về chúng tôi
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "link-item active h-[40px] mb-2 flex w-full items-center"
                  : "link-item h-[40px] mb-2 flex w-full items-center"
              }
            >
              Liên Hệ
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
