import React from 'react';
import './job.scss';
import { NavLink, Outlet } from 'react-router-dom';

export default function Job() {
  return (
    <>
      <div className="max-w-full mx-[0_auto] flex justify-between bg-[#fafafa]">
        <nav className="w-[402px] h-[974px] bg-[white] job-nav">
          <div className="w-[338px] h-[332px] mt-[24px] ml-[32px] gap-[24px]">
            <header className="w-full flex justify-start h-[72px] border-b border-solid border-[#ddd]">
              <img src="/images/Favicon.png" alt="" className="size-[48px] object-cover rounded-full bg-[#f4f4f4]" />
              <div className="flex flex-col ml-3">
                <h5 className="font-semibold text-[18px] text-[black] leading-[28px]">Công ty TNHH Rikkei Education</h5>
                <p className="text-[14px] leading-[20px] font-normal text-[#676767]">rikkei1232gmail.com</p>
              </div>
            </header>
            <ul className="mt-6">
              <li className="h-[56px] mb-2 flex items-center">
                <NavLink
                  end
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive
                      ? ' job-active flex items-center gap-3 leading-4 font-semibold text-[16px] size-full pl-5 rounded-[6px] cursor-pointer '
                      : 'flex items-center gap-3 leading-4 font-semibold text-[16px] size-full pl-5 rounded-[6px] cursor-pointer  '
                  }
                >
                  <i className="fa-regular fa-address-card"></i>
                  Thông tin doanh nghiệp
                </NavLink>
              </li>
              <li className="h-[56px] mb-2 flex items-center">
                <NavLink
                  to="jobInfo"
                  className={({ isActive }) =>
                    isActive
                      ? ' job-active flex items-center gap-3 leading-4 font-semibold text-[16px] size-full pl-5 rounded-[6px] cursor-pointer '
                      : 'flex items-center gap-3 leading-4 font-semibold text-[16px] size-full pl-5 rounded-[6px] cursor-pointer '
                  }
                >
                  <i className="fa-solid fa-book-open"></i>
                  Tin tuyển dụng
                </NavLink>
              </li>
              <li className="h-[56px] mb-2 flex items-center">
                <NavLink
                  to="jobPosting"
                  className={({ isActive }) =>
                    isActive
                      ? ' job-active flex items-center gap-3 leading-4 font-semibold text-[16px] size-full pl-5 rounded-[6px] cursor-pointer '
                      : 'flex items-center gap-3 leading-4 font-semibold text-[16px] size-full pl-5 rounded-[6px] cursor-pointer '
                  }
                >
                  <i className="fa-regular fa-calendar"></i>
                  Lịch phỏng vấn
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <section className="flex-1 justify-start  ">
          <Outlet />
        </section>
      </div>
    </>
  );
}
