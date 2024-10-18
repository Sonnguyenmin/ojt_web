import React from "react";
import "./userDetail.css";
import { Input } from "antd";
import Upload from "antd/es/upload/Upload";
export default function UserDetail() {
  return (
    <>
      <div>
        <div className="container_info">
          <form
            action="
        "
            className="form_info"
          >
            <div className="container_info-img">
              <h3>Ảnh đại diện</h3>
              <div className="form_info-img">
                <Upload>
                  <img src="/public/Homepage/Avatar.png" alt="" />
                </Upload>
              </div>
              <span>
                Kích thước ảnh nhỏ nhất: 200 x 200px, định dạng PNG hoặc JPG
              </span>
            </div>
            <div className="container_info-text">
              <h3>Cập nhật thông tin cá nhân</h3>
              <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
              <div className="info_input">
                <div className="info_input-left">
                  <div className="info_input-items">
                    <div className="info_input-item">
                      <label>Tên đăng nhập</label>
                      <Input></Input>
                    </div>
                    <div className="info_input-item">
                      <label>Email</label>
                      <Input></Input>
                    </div>
                    <div className="info_input-item">
                      <label>Số điện thoại</label>
                      <Input></Input>
                    </div>
                  </div>
                </div>
                <div className="info_input-right">
                  <div className="info_input-items">
                    <div className="info_input-item">
                      <label>Tên</label>
                      <Input></Input>
                    </div>
                    <div className="info_input-item">
                      <label>Ngày sinh</label>
                      <Input></Input>
                    </div>
                    <div className="info_input-item">
                      <label>Giới tính</label>
                      <select className="info_select">
                        <option>Nam</option>
                        <option>Nu</option>
                        <option>Khac</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info_btn">
                <button className="btn_cancel">Hủy</button>
                <button className="btn_update">Cập nhật</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
