import React from "react";
import "./SearchHomeContent.scss";
import { Button, Dropdown, Input, Menu } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

export default function SearchHomeContent() {
  // Dropdown menu items
  const menuItems = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <img src="/images/location.png" alt="Location" className="mr-2" />{" "}
          {/* Icon địa điểm */}
          Tất cả địa điểm
        </div>
      ),
    },
  ];
  // Dropdown menu
  const menu = <Menu items={menuItems} />;
  return (
    <>
      <div className="relative">
        <div className="home_bg_search relative">
          <div className="w-full block bg-[url('/images/87d12368bef93dfc7b5f89b9927a3239.jpg')] pt-[170%] sm:pt-[80%] md:pt-[30%] bg-cover bg-no-repeat bg-center opacity-[70%]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -right-1/3 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="font-semibold text-[48px] leading-[60px] text-center text-[#FFFFFF]">
            Tìm kiếm việc làm cùng Rikkei Jobs!
          </div>
          <form
            action=""
            className="flex flex-col md:flex-row mt-[24px] gap-[12px]"
          >
            <Input
              type="search"
              placeholder="Vị trí cần tuyển"
              prefix={<img src="/images/search-normal.png"></img>} // Icon kính lúp bên trái
              className="max-w-full md:max-w-[320px] h-[44px] px-[16px] py-[12px] font-medium text-[16px] leading-[24px] text-lg rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="relative bg-white w-full md:w-[320px] h-[44px]"
            >
              <div
                className="flex items-center justify-between px-[16px] py-[12px] font-medium text-[16px] leading-[24px] 
              rounded-lg border border-gray-300 cursor-pointer hover:border-blue-500
              min-w-[197px]"
              >
                <div className="flex">
                  <img
                    src="/images/location.png"
                    alt="Location"
                    className="mr-2 size-[20px]"
                  />{" "}
                  {/* Icon bên trái */}
                  <span className="whitespace-nowrap">
                    Tất cả địa điểm
                  </span>{" "}
                  {/* Text */}
                </div>
                <DownOutlined className="ml-2" /> {/* Icon mũi tên xuống */}
              </div>
            </Dropdown>
            <Button className="md:ml-[12px] font-semibold text-[16px] leading-[24px] text-[#FFFFFF] w-full md:w-[140px] h-[48px] bg-[#AB1F24] border-none px-[20px] py-[12px]">
              Tìm kiếm
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
