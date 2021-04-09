import React from "react";
import PropTypes from "prop-types";
import "./style.css";
Mainbar.propTypes = {};

function Mainbar(props) {
  return (
    <div>
      <div className="mainbar">
        <div className="mainbar-background">
          <div className="mainbar-text">
            <p>Làm chủ chuyến đi. Săn ngay đợi gì</p>
            <p>Hành trình tuyệt vời bắt đầu từ một cú nhấp chuột</p>
          </div>
        </div>
        <div className="mainbar-search" style={{ marginBottom: 20 }}>
          <div className="container">
            <ul className="tab-seach">
              <li className="search-item search-item-active">
                <i className="fa fa-globe" aria-hidden="true" />
                <button>
                  <span>Săn máy bay giá rẻ</span>
                </button>
              </li>
              <li className="search-item">
                <i className="fa fa-building" aria-hidden="true" />
                <button>
                  <span>Săn phòng giá rẻ</span>
                </button>
              </li>
              <li className="search-item">
                <i className="fa fa-university" aria-hidden="true" />
                <button>
                  <span>Săn combo 1.999k</span>
                </button>
              </li>
              <div className="line" />
            </ul>
            <div className="tab-search-content active">
              <div className="search-content">
                <div className="search-content-item">
                  <div>
                    <i className="fa fa-location-arrow" aria-hidden="true" />
                  </div>
                  <div>
                    <h5>Điểm khởi hành</h5>
                    <input type="text" placeholder="Điểm khởi hành" />
                  </div>
                </div>
                <div className="search-content-item">
                  <div>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </div>
                  <div>
                    <h5>Điểm đến</h5>
                    <input type="text" placeholder="Điểm đến" />
                  </div>
                </div>
              </div>
              <div className="search-content">
                <button>SĂN NGAY</button>
              </div>
            </div>
            <div className="tab-search-content">
              <div className="search-content">
                <div className="search-content-item search-content-item-2">
                  <div>
                    <i className="fa fa-building" aria-hidden="true" />
                  </div>
                  <div>
                    <h5>Thành phố, địa điểm,hoặc tên khách sạn</h5>
                    <input type="text" placeholder="Nhập điểm đến" />
                  </div>
                </div>
                <div className="search-content-item search-content-item-3">
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true" />
                  </div>
                  <div className="search-content-item-day">
                    <div>
                      <h5>Ngày nhận phòng</h5>
                      <input type="text" placeholder="Nhập ngày" />
                    </div>
                    <div>
                      <h5>Số ngày thuê phòng</h5>
                      <input type="text" placeholder="Nhập số ngày" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-content">
                <button>SĂN NGAY</button>
              </div>
            </div>
            <div className="tab-search-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
