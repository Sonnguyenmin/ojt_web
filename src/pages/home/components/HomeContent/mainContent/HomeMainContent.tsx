import { Button, Dropdown, Menu } from "antd";
import React from "react";
import {
  DownOutlined,
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Pagination } from "antd";
import "./HomeMainContent.scss";
export default function HomeMainContent() {
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

  const onChange = (page: number) => {
    console.log("Page:", page);
  };
  return (
    <>
      <div className="px-[12px] py-[24px]   sm:px-[12px] sm:py-[24px] lg:px-[120px] lg:py-[80px]">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-[32px] leading-[40px] text-[#000000]">
            Việc làm nổi bật
          </div>
          <div>
            <button className="flex gap-2">
              <p className="text-[#BC2228] font-semibold text-[16px] leading-[24px]">
                Xem tất cả
              </p>
              <img src="/images/arrow-up-right.png" alt="" />
            </button>
          </div>
        </div>
        {/* select btns */}
        <div className="flex flex-col md:flex-row gap-[16px] md:justify-between lg:flex-row lg:justify-between mt-[24px]">
          <div className="flex gap-[16px] sm:flex-row flex-col">
            <Button className="hover:!bg-[#AB1F24] hover:!text-white px-[16px] py-[10px] bg-[#F4F4F4] font-semibold text-[14px] leading-[20px]">
              Ngẫu nhiên
            </Button>
            <Button className="hover:!bg-[#AB1F24] hover:!text-white px-[16px] py-[10px] bg-[#F4F4F4] font-semibold text-[14px] leading-[20px]">
              Hà Nội
            </Button>
            <Button className="hover:!bg-[#AB1F24] hover:!text-white px-[16px] py-[10px] bg-[#F4F4F4] font-semibold text-[14px] leading-[20px]">
              TP Hồ Chí Minh
            </Button>
            <Button className="hover:!bg-[#AB1F24] hover:!text-white px-[16px] py-[10px] bg-[#F4F4F4] font-semibold text-[14px] leading-[20px]">
              Miền Bắc
            </Button>
            <Button className="hover:!bg-[#AB1F24] hover:!text-white px-[16px] py-[10px] bg-[#F4F4F4] font-semibold text-[14px] leading-[20px]">
              Miền Nam
            </Button>
          </div>
          <div>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="relative bg-white md:w-[320px] h-[44px]"
            >
              <div className="flex items-center justify-between px-[16px] py-[12px] font-medium text-[16px] leading-[24px] rounded-lg border border-gray-300 cursor-pointer hover:border-blue-500">
                <div className="flex">
                  <div className="mr-2 text-gray-400">Lọc theo:</div>
                  {/* Icon bên trái */}
                  <span>Địa điểm</span> {/* Text */}
                </div>
                <DownOutlined className="ml-2" /> {/* Icon mũi tên xuống */}
              </div>
            </Dropdown>
          </div>
        </div>
        {/* list boxes jobs cards*/}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-[24px]">
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
          {/* card */}
          <div className=" relative min-w-[340px] max-w-full bg-[#FAFAFA] border-[1px] rounded-[8px] p-[16px]">
            <div className="flex gap-5">
              {/* img */}
              <div className="size-[80px]">
                <img
                  src="/images/d2632c98557e42d135e3df42f3b52a63.png"
                  className="size-[80px] object-cover"
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex flex-col max-w-[256px] gap-[8px]">
                <div className="font-semibold text-[16px] leading-[24px] text-[#AB1F24]">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </div>
                <div className=" w-[64px] bg-[#ECFDF3] px-[12px] py-[3px] font-medium leading-[18px] text-[12px] text-center text-[#027A48] rounded-md">
                  Fresher
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] my-[12px]">
              <div className="flex gap-[8px]">
                <img src="/images/money.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  400 - 600 man
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img src="/images/JP.png" className="size-[16px]" alt="" />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Nhật Bản
                </div>
              </div>
              <div className="flex gap-[8px]">
                <img
                  src="/images/briefcase.png"
                  className="size-[16px]"
                  alt=""
                />
                <div className="font-normal text-[#3D3D3D] text-[12px] leading-[18px]">
                  Toàn thời gian
                </div>
              </div>
            </div>
            <span className="font-semibold text-[12px] leading-[18px] text-[#848484]">
              Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
            </span>
            <button className="absolute bottom-2 right-2 border-[#DDDDDD] border-[1px] rounded-md p-[8px]">
              <HeartOutlined className="text-[16px]" />
            </button>
          </div>
        </div>
        {/* pagnigation */}
        <Pagination align="end" defaultCurrent={1} total={50} />
      </div>
    </>
  );
}
