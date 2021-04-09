import React from "react";
import './style.css';
function HotelTrip(props) {
  return (
    <div>
      <div className="vntrip-app">
        <div className="container">
          <div className="row">
            <div className="col-md-2 vntrip-img">
              <img
                src="https://statics.vntrip.vn/logo/image_download_app.png"
                alt="img"
              />
            </div>
            <div className="col-md-6 vntrip-content">
              <h5>
                Theo dõi chuyến bay 24/7 cùng Vntrip App <span>Mới</span>
              </h5>
              <p>
                Theo dõi chuyến bay của các thành viên trong gia đình, những
                người thân yêu như thể bạn đang đi du lịch cùng với họ, hoặc tìm
                được thời điểm tốt nhất để đón họ tại sân bay
              </p>
            </div>
            <div className="col-md-3 vntrip-qr">
              <img
                src="https://statics.vntrip.vn/logo/logo_QR_app.png"
                alt
                width="30%"
              />
              <p>QUÉT MÃ ĐỂ TẢI ỨNG DỤNG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelTrip;
