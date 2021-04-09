import React from "react";
import './style.css';
function HotelSearch(props) {
  return (
    <div>
      <div className="hotel-search">
        <div className="container">
          <ul className="row">
            <li className="active">
              <a href="#">
                <span>
                  <i className="fa fa-building" aria-hidden="true" />
                </span>
                Khách sạn
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i className="fa fa-fighter-jet" aria-hidden="true" />
                </span>
                Máy bay
              </a>
            </li>
          </ul>
          <div className="search">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <p>Thành phố, địa điểm hoặc tên khách sạn</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập điểm đến, khách sạn"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <p>Ngày nhận phòng</p>
                <div
                  id="datepicker"
                  className="input-group date"
                  data-date-format="dd-mm-yyyy"
                >
                  {" "}
                  <input className="form-control" readOnly type="text" />{" "}
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <p>Số ngày thuê phòng</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập số ngày thuê phòng"
                  />
                </div>
              </div>
              <button>Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
