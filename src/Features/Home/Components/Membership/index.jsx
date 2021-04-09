import React from "react";
import './style.css';
function Membership(props) {
  return (
    <div>
      <div className="membership" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="membership-img">
                <img
                  src="https://statics.vntrip.vn/images/membershipBox-img.png"
                  alt="Membership"
                  width="290px"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="membership-content"
                style={{ justifyContent: "center" }}
              >
                <h2>Ưu đãi đặc biệt cho thành viên Vntrip</h2>
                <p>
                  Giảm thêm tối thiểu 10% cho khách hàng là thành viên Vntrip
                  đảm bảo giá tốt nhất.
                </p>
                <p>
                  Ưu đãi đặc biệt chỉ áp dụng khi đặt phòng tại các khách sạn 4
                  sao, 5 sao trên Vntrip
                </p>
                <div className="content-btn">
                  <button>Đăng ký thành viên</button>
                  <div className="content-btn-info">
                    <p>Bạn đã là thành viên</p>
                    <a href="#">Đăng nhập ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
