import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css"; // This includes the core Swiper styles
// import "swiper/modules/pagination/pagination.min.css"; // Pagination module styles
import "./SpecialUserContent.scss";

export default function SpecialUserContent() {
  const swiperRef = useRef<any>(null);
  return (
    <>
      <div className="w-full bg-[#FAFAFA] py-[80px] px-[24px] md:py-[80px] md:px-[120px] relative">
        {/* image background */}
        <div className="absolute top-0 left-0 h-full">
          <img src="/images/DecorSlide.png" alt="" />
        </div>
        {/* content */}
        <div>
          {/* first line */}
          <div className="flex justify-between ">
            <div className="font-semibold text-[32px] leading-[40px] text-black font-bold">
              Ứng viên nổi bật
            </div>
            <button className="flex gap-2">
              <p className="text-[#BC2228] font-semibold text-[16px] leading-[24px]">
                Xem tất cả
              </p>
              <img src="/images/arrow-up-right.png" alt="" />
            </button>
          </div>
          {/* second line is slide */}
          <div className="">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 }, // Điều chỉnh khoảng cách nhỏ hơn cho thiết bị nhỏ
                640: { slidesPerView: 1, spaceBetween: 10 }, // Giữ khoảng cách hợp lý khi responsive
                768: { slidesPerView: 2, spaceBetween: 20 }, // Khoảng cách hợp lý hơn cho thiết bị trung bình
                1024: { slidesPerView: 4, spaceBetween: 40 }, // Khoảng cách phù hợp cho màn hình lớn
              }}
              modules={[Pagination]}
              className="mySwiper min-h-[280px] max-w-[290px] sm:max-w-full"
            >
              {/* project manager */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Đỗ Hữu Duy
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#027A48] bg-[#ECFDF3] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Project Manager
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Middle
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* fullstack */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Nguyễn Việt An
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#026AA2] bg-[#F0F9FF] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Full-stack Developer
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Senior
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* tester */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Nguyễn Việt An
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#C4320A] bg-[#FFF6ED] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Tester
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Senior
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* front end developer */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Nguyễn Việt An
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#B42318] bg-[#FEF3F2] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Front-end Developer
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Senior
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* project manager */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Đỗ Hữu Duy
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#027A48] bg-[#ECFDF3] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Project Manager
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Middle
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* tester */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Nguyễn Việt An
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#C4320A] bg-[#FFF6ED] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Tester
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Senior
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* front end developer */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Nguyễn Việt An
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#B42318] bg-[#FEF3F2] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Front-end Developer
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Senior
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* project manager */}
              <SwiperSlide className="!w-[280px]">
                <div className="p-[20px]">
                  <div className="flex justify-between items-start border-b-[0.5px] border-[#DDDDDD] pb-[16px]">
                    <div>
                      <img
                        src="/images/81e30fbdca53ce246a613b78628176e0.jpg"
                        className="size-[52px] object-cover"
                        alt=""
                      />
                      <div className="font-semibold text-[16px] leading-[24px] text-black whitespace-nowrap text-left">
                        Đỗ Hữu Duy
                      </div>
                      <div className="font-normal text-[12px] leading-[18px] text-[#676767] whitespace-nowrap text-left">
                        26 tuổi
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[18px] text-center text-[#027A48] bg-[#ECFDF3] px-[12px] py-[2px] whitespace-nowrap rounded-[11px]">
                      Project Manager
                    </div>
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/teacher.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Trình độ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        Middle
                      </div>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      <div className="flex gap-1 items-baseline">
                        <img
                          src="/images/archive-book.png"
                          className="size-[16px]"
                          alt=""
                        />
                        <div className="font-semibold text-[14px] leading-[20px] text-[#2D2C2C]">
                          Ngoại ngữ:
                        </div>
                      </div>
                      <div className="font-normal text-[14px] leading-[20px] text-[#676767]">
                        IELTS 7.0
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
