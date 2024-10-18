import React from "react";
import { Input } from "antd";
import "./changePass.css";
export default function ChangePass() {
  return (
    <>
      <div className="info_changPass">
        <form action="" className="change_form">
          <div className="change_info-text">
            <h3>Đổi mật khẩu</h3>
            <span>
              Hãy nhập mật khẩu hiện tại của bạn để thay đổi mật khẩu mới.
            </span>
            <div className="change_input">
              <div className="change_input-items">
                <div className="change_input-item">
                  <label>Mật khẩu hiện tại</label>
                  <Input.Password></Input.Password>
                </div>
                <div className="change_input-item">
                  <label>Mật khẩu mới</label>
                  <Input.Password></Input.Password>
                </div>
                <div className="change_input-item">
                  <label>Xác nhận mật khẩu mới</label>
                  <Input.Password></Input.Password>
                </div>
              </div>
            </div>
            <div className="change_btn">
              <button className="btn_cancel">Hủy</button>
              <button className="btn_update">Cập nhật</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
