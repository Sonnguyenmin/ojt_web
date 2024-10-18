import { Checkbox, Input, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import React from 'react';

export default function InterView() {
  return (
    <>
      <div className="job-info-content">
        <h2 className="text-[24px] font-semibold leading-[32p] gap-3 bg-[rgba(45_44_44_1)] flex items-center my-[32px] mx-[24px] md:mx-[12px] sm:mx-[12px]">
          <i className="text-[16px] fa-solid fa-chevron-left md:hidden sm:hidden"></i>
          Chỉnh sửa tin tuyển dụng
        </h2>
        <form action="">
          <div className="bg-[#fff] m-[24px] max-w-[100%] rounded-[6px] pb-8 md:mx-0 md:max-w-[calc(100%-12px)] sm:mx-0 sm:max-w-[calc(100%-12px)]">
            <div className="flex items-center p-[24px] text-[16px] gap-2 text-[#171717] leading-6  border-b border-solid border-[#ddd] md:px-3 sm:px-3">
              <h3 className=" font-bold whitespace-nowrap">Nội dung tuyển dụng:</h3>
              <span className="font-normal whitespace-nowrap">Software Engineer</span>
            </div>
            <div className="mx-[80px] mt-6  md:m-[0_auto]  sm:m-[0_auto] md:max-w-[calc(100%-12px)] sm:max-w-[calc(100%-12px)]">
              <div className="border-b border-solid border-[#ddd]">
                <h4 className=" flex item-center gap-2 text-[14px] font-semibold leading-5 whitespace-nowrap">
                  <img src="/images/edit-2.png" alt="" className=" object-contain" />
                  Tiêu đề tuyển dụng
                </h4>
                <p className="py-3 text-[16px] text-[#616161] leading-6 font-normal whitespace-nowrap">
                  Software Engineer
                </p>
              </div>
              <div className="mt-[32px]">
                <h4 className="flex item-center gap-2 text-[14px] font-semibold leading-5 whitespace-nowrap pb-[16px] border-b border-solid border-[#ddd]">
                  <img src="/images/clipboard-text.png" alt="" className=" object-contain" />
                  Thông tin chung
                </h4>
                <div className="flex items-center gap-4 my-5 max-md:block  max-sm:block ">
                  <div className="w-full">
                    <label
                      htmlFor="quantity"
                      className="text-[14px] leading-5 font-medium text-[rgb(103,103,103)] mb-1 block"
                    >
                      Số lượng tuyển:
                    </label>
                    <Input
                      name="quantity"
                      id="quantity"
                      autoComplete="quantity"
                      placeholder="Số lượng tuyển"
                      className="h-[46px] text-[14px] font-medium"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="quantity"
                      className="text-[14px] leading-5 font-medium text-[rgb(103,103,103)] mb-1 block"
                    >
                      Số lượng tuyển:
                    </label>
                    <Select style={{ width: '100%', height: '46px', fontSize: '14px', fontWeight: '500' }}>
                      <Option value="option1">Dưới 1 năm kinh nghiệm</Option>
                      <Option value="option2">Tùy chọn 2</Option>
                      <Option value="option3">Tùy chọn 3</Option>
                    </Select>
                  </div>
                </div>
                <div className="my-5">
                  <h3 className="text-[16px] font-medium leading-[24px] text-[rgba(132,132,132)] mb-5">MỨC LƯƠNG</h3>
                  <div className="w-full">
                    <label
                      htmlFor="quantity"
                      className="text-[14px] leading-5 font-medium text-[rgb(103,103,103)] mb-1 block"
                    >
                      Mức lương:
                    </label>
                    <Input
                      name="quantity"
                      id="quantity"
                      autoComplete="quantity"
                      placeholder="1234567"
                      className="h-[46px] text-[14px] font-medium"
                    />
                  </div>
                </div>
                <div className="my-5">
                  <h3 className="text-[16px] font-medium leading-[24px] text-[rgba(132,132,132)] mb-5">
                    Địa chỉ cụ thể:
                  </h3>
                  <div className="w-full">
                    <label
                      htmlFor="quantity"
                      className="text-[14px] leading-5 font-medium text-[rgb(103,103,103)] mb-1 block"
                    >
                      Mức lương:
                    </label>
                    <Input
                      name="quantity"
                      id="quantity"
                      autoComplete="quantity"
                      placeholder="Nhập địa chỉ cụ thể"
                      className="h-[46px] text-[14px] font-medium"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="description"
                      className="flex item-center gap-2 text-[14px] font-semibold leading-5 whitespace-nowrap pb-[16px] "
                    >
                      <img src="/images/edit-2.png" alt="" className=" object-contain" />
                      Mô tả công việc
                    </label>
                    <TextArea
                      name="description"
                      id="description"
                      rows={4}
                      placeholder="Nhập mô tả công việc"
                      className="h-auto text-[14px] font-medium w-full border border-[rgb(224,224,224)] rounded-[4px] px-[16px] py-[12px]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="description1"
                      className="flex item-center gap-2 text-[14px] font-semibold leading-5 whitespace-nowrap pb-[16px] "
                    >
                      <img src="/images/edit-2.png" alt="" className=" object-contain" />
                      Yêu cầu công việc
                    </label>
                    <TextArea
                      name="description1"
                      id="description1"
                      rows={4}
                      placeholder="Nhập mô tả công việc"
                      className="h-auto text-[14px] font-medium w-full border border-[rgb(224,224,224)] rounded-[4px] px-[16px] py-[12px]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="description1"
                      className="flex item-center gap-2 text-[14px] font-semibold leading-5 whitespace-nowrap pb-[16px] "
                    >
                      <img src="/images/edit-2.png" alt="" className=" object-contain" />
                      Quyền lợi
                    </label>
                    <TextArea
                      name="description1"
                      id="description1"
                      rows={4}
                      placeholder="Nhập mô tả công việc"
                      className="h-auto text-[14px] font-medium w-full border border-[rgb(224,224,224)] rounded-[4px] px-[16px] py-[12px]"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="flex item-center gap-2 text-[14px] font-semibold leading-5 whitespace-nowrap pb-[16px] border-b border-solid border-[#ddd]">
                    <img src="/images/edit-2.png" alt="" className=" object-contain" />
                    Thông tin nhận CV
                  </h4>
                  <div className="flex items-center gap-4 my-5">
                    <div className="w-[50%]">
                      <label
                        htmlFor="quantity"
                        className="text-[14px] leading-5 font-medium text-[rgb(103,103,103)] mb-1 block"
                      >
                        Hạn nhận CV
                      </label>
                      <Input
                        type="date"
                        name="quantity"
                        id="quantity"
                        autoComplete="quantity"
                        className="h-[46px] text-[14px] font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] m-[24px] max-w-[100%] rounded-[6px] p-6 flex items-center justify-between md:block sm:block">
            <h5 className="text-[#171717] font-semibold text-[16px] leading-4">Hiển thị tuyển dụng</h5>
            <div className="md:mt-4 sm:mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-normal  text-[#616776] leading-6 mr-2">Công khai</span>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-10 h-5 bg-[rgb(188,34,40)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[rgb(188,34,40)] dark:peer-focus:ring-[rgb(188,34,40)] rounded-full peer dark:bg-[#D2D2D2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:ring-[rgb(188,34,40)]"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 m-[24px_24px_48px_24px] max-w-[100%] rounded-[6px] p-6 md:flex-col sm:flex-col">
            <button className="w-[160px] h-[48px] rounded-[8px] bg-[rgba(221,221,221,1)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] font-semibold text-[#171717] text-[16px] leading-6 md:mb-4 sm:mb-4">
              Hủy
            </button>
            <button className="w-[210px] h-[48px] rounded-[8px] bg-[rgb(171,31,36)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] text-[#fff] font-semibold md:w-full sm:w-full">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
