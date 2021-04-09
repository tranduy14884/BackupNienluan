import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <div className="container-fuild">
        <footer className="footer">
          <div className="container">
            <div className="footer-middle">
              <p>Khách sạn theo tỉnh thành</p>
              <ul className="footer-list">
                <li>
                  <a href="#">Khách sạn An Giang</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bà Rịa - Vũng Tàu</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bắc Giang</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bắc Kạn</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bạc Liêu</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bắc Ninh</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bến Tre</a>
                </li>
                <li>
                  <a href="#">Khách sạn Cần Thơ</a>
                </li>
                <li>
                  <a href="#">Khách sạn Đà Nẵng</a>
                </li>
                <li>
                  <a href="#">Khách sạn Hải Phòng</a>
                </li>
                <li>
                  <a href="#">Khách sạn Hà Nội</a>
                </li>
                <li>
                  <a href="#">Khách sạn TP HCM</a>
                </li>
                <li>
                  <a href="#">Khách sạn Kiên Giang</a>
                </li>
                <li>
                  <a href="#">Khách sạn Cà Mau</a>
                </li>
                <li>
                  <a href="#">Khách sạn Bình Thuận</a>
                </li>
                <li>
                  <a href="#">Khách sạn Đồng Nai</a>
                </li>
                <li>
                  <a href="#">Khách sạn Đồng Tháp</a>
                </li>
                <li>
                  <a href="#">Khách sạn Phú Thọ</a>
                </li>
                <li>
                  <a href="#">Khách sạn Ninh Thuận</a>
                </li>
                <li>
                  <a href="#">Khách sạn Ninh Bình</a>
                </li>
                <li>
                  <a href="#">Khách sạn Nghệ An</a>
                </li>
                <li>
                  <a href="#">Khách sạn Khánh Hòa</a>
                </li>
                <li>
                  <a href="#">Khách sạn Tây Ninh</a>
                </li>
                <li>
                  <a href="#">Khách sạn Thừa Thiên Huế</a>
                </li>
                <li>
                  <a href="#">Khách sạn Vĩnh Long</a>
                </li>
                <li>
                  <a href="#">Khách sạn Quảng Nam</a>
                </li>
                <li>
                  <a href="#">Khách sạn Kon Tum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Bản quyền © 2021 Vntrip.vn</p>
            <div className="group-bottom">
              <a href="#">
                <img
                  src="http://simpleicon.com/wp-content/uploads/facebook-2.png"
                  alt
                  width="40px"
                />
                <span>Facebook</span>
              </a>
              <a href="#">
                <img
                  src="https://icon-library.com/images/instagram-png-icon/instagram-png-icon-1.jpg"
                  alt="Instagram"
                  width="30px"
                />
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
