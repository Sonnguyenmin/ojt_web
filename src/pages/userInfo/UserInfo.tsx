import React, { useState } from "react";
import {
  FileDoneOutlined,
  ContainerOutlined,
  KeyOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./userInfo.css";

type MenuItem = Required<MenuProps>["items"][number];

export default function UserInfo() {
  const items: MenuItem[] = [
    {
      key: "1",
      icon: <FileDoneOutlined className="info_icon-user" />,
      label: <NavLink to="/user-info/user-detail">Thông tin cá nhân</NavLink>,
    },
    {
      key: "3",
      icon: <KeyOutlined className="info_icon-user" />,
      label: <NavLink to="/user-info/changePass">Đổi mật khẩu</NavLink>,
    },
    { key: "4", icon: <ContainerOutlined />, label: "Option 3" },
    { key: "5", icon: <ContainerOutlined />, label: "Option 4" },
  ];
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="sidebar">
      <div style={{ width: 402, height: 720 }}>
        <div className="header_title">
          <div className="header_title-img">
            <img src="" alt="" />
          </div>
          <div className="header_title-text">
            <h4>Vien nguyen</h4>
            <span>vien@gmail.com</span>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          className="info-menu"
        />
      </div>
      <div style={{ flex: 1, padding: "16px", background: " #FAFAFA" }}>
        <Outlet />
      </div>
    </div>
  );
}
