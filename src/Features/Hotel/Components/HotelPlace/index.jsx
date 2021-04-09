import React from "react";
import "./style.css";
function HotelPlace(props) {
  return (
    <div>
      <div className="hotel-place">
        <div className="container">
          <h2>ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h2>
          <div className="row">
            <div className="hotel-place-col col-sm-6 col-md-4">
              <div>
                <a href="#">
                  <img
                    src="https://statics.vntrip.vn/website/images/dest.373x181.01.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Hà Nội</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="hotel-place-col col-sm-6 col-md-2">
              <div>
                <a href="../hotel-list/index.html">
                  <img
                    src="https://statics.vntrip.vn/website/images/dest.181x181.01.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Đà Nẵng</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="hotel-place-col col-sm-6 col-md-2">
              <div>
                <a href="../hotel-list/index.html">
                  <img
                    src="https://statics.vntrip.vn/images/dest/dest.181x181.02.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Hội An</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="hotel-place-col col-sm-6 col-md-4">
              <div>
                <a href="../hotel-list/index.html">
                  <img
                    src="https://statics.vntrip.vn/images/dest/dest.373x181.02.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Tp. Hồ Chí Minh</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="hotel-place-col col-sm-6 col-md-4">
              <div>
                <a href="../hotel-list/index.html">
                  <img
                    src="https://statics.vntrip.vn/images/dest/dest.373x181.03.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Phú Quốc</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="hotel-place-col col-sm-6 col-md-4">
              <div>
                <a href="../hotel-list/index.html">
                  <img
                    src="https://statics.vntrip.vn/images/dest/dest.373x181.04.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Nha Trang</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="hotel-place-col col-sm-6 col-md-4">
              <div>
                <a href="../hotel-list/index.html">
                  <img
                    src="https://statics.vntrip.vn/images/dest/dest.373x181.05.png"
                    alt
                    width="100%"
                    height="100%"
                  />
                  <div className="content">
                    <h3>Đà Lạt</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelPlace;
