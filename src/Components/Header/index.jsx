import React from "react";
import PropTypes from "prop-types";
import iconhome from "./img/icon-home.png";
import ReactDOM from "react-dom";
import "./style.css";
import { $ } from "react-jquery-plugin";
import Hotdeal from "../../Features/Home/Components/Hotdeal";
import { NavLink, Route } from "react-router-dom";
import Hotel from "../../Features/Hotel";
function Header(props) {
  return (
    <div>
      <div className="container header">
        <div className="container-fluid">
          <div className="flex-container header-1">
            <div className="icon-home">
              <img src={iconhome} alt="icon-home" />
            </div>
            <ul className="info-home">
              <li>
                <a href="#">Tra cứu đơn hàng</a>
              </li>
              <li className="info-phone">
                <a href="#">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  12345678
                </a>
              </li>
              <li>
                <div className="info-login"></div>
              </li>
              <li>
                <p>Đăng nhập</p>
              </li>
              <li>
                <p style={{ backgroundColor: "#ff8917" }}>Đăng ký</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="container-fluid container-navbar">
          <div className="flex-container">
            <ul className="header-2">
              <li className="tab-item">
                <NavLink to="/" exact>
                  <span>
                    <i className="fab fa-asymmetrik" />
                  </span>
                  Săn giá rẻ
                </NavLink>
              </li>
              <li className="tab-item">
                <NavLink to="/hotel" exact>
                  <span>
                    <i className="fa fa-building" aria-hidden="true" />
                  </span>
                  Khách sạn
                </NavLink>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i className="fa fa-plane" aria-hidden="true" />
                  </span>
                  Vé máy bay
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i className="fa fa-bed" aria-hidden="true" />
                  </span>
                  Nhà nghỉ
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i
                      className="fa fa-american-sign-language-interpreting"
                      aria-hidden="true"
                    />
                  </span>
                  Doanh nghiệp
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i className="fa fa-archive" aria-hidden="true" />
                  </span>
                  Cẩm nang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
