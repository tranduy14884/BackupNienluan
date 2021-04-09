import React from "react";
import "./style.css";
function AppInfo(props) {
  return (
    <div>
      <div className="app-info container-fluid">
        <div className="container">
          <div>
            <img
              src="https://statics.vntrip.vn/images/appBox-iphone.png"
              alt="Info-App"
              width="255px"
            />
          </div>
          <div className="app-content">
            <h1>Du lịch dễ dàng với một ứng dụng duy nhất.</h1>
            <p>
              Dùng ứng dụng để đặt vé máy bay, khách sạn chỉ trong vài giây cùng
              với thông tin cập nhật về chuyến bay theo thời gian thực.
            </p>
            <div className="app-img">
              <img
                src="https://statics.vntrip.vn/images/logo/appStore.png"
                alt="Apple App"
                width="180px"
              />
              <img
                src="https://statics.vntrip.vn/images/logo/googlePlay.png"
                alt="Android APp"
                width="180px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
