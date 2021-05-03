import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router";
import "./style.css";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import RenderSearch from "../RenderSearch";
RenderHotelDetail.propTypes = {};

function RenderHotelDetail(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <>
        <Header />
        {/*--------------------------------- body ------------------------------*/}
        <div className="main">
          <div className="container">
            <div className="hotel-detail">
              {/*------------------ hotel-search ------------------*/}
              <RenderSearch />
              {/*--------------------- title ---------------------*/}
              <div className="title-detail d-flex">
                <a href="#">Trang chủ &gt;</a>
                <a href="#">Khách sạn tại Khánh Hòa &gt;</a>
                <p>Khách sạn Imperial Nha Trang</p>
              </div>
              {/*------------------ hotel-detail-header ----------------*/}
              <div className="hotel-detail-header">
                <div className="d-flex align-items-end">
                  <h2>Khách sạn Imperial Nha Trang</h2>
                  <p>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                </div>
                <p>
                  <span style={{ marginRight: 10 }}>
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  20 Trần Phú, Vĩnh Nguyên, Thành phố Nha Trang, Khánh Hòa, Việt
                  Nam
                </p>
                <div className="img-header">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1529288074_6.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/886x290/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1529288096_view_2.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/584x290/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1528344605_deluxe_1.jpg"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/275x140/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1528344910_sup_1.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/275x140/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1529288096_view_1.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/142x140/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1528346592_bathroom_2.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="img-col">
                        <img
                          src="https://i.vntrip.vn/142x140/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1528344910_sup_5.jpg"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*------------------ hotel-detail-body -------------------*/}
              <div className="hotel-detail-body d-flex flex-column">
                <div className="list-room">
                  <div className="room-item">
                    <div className="room-item-header d-flex">
                      <div className="img">
                        <img
                          src="https://statics2.vntrip.vn/165x165/data-v2/hotels/12536/img_max/12536_1528344910_sup_1.jpg"
                          alt
                        />
                      </div>
                      <div className="content d-flex flex-column">
                        <h3>Superior City View (Window)</h3>
                        <div className="content-info d-flex">
                          <p>
                            <span className="icon">
                              <i className="fas fa-bed" />
                            </span>
                            1 giường
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-cube" />
                            </span>
                            Diện tích : 25 m2
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-bath" />
                            </span>
                            Bồn tắm
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-tv" />
                            </span>
                            TV màn hình phẳng
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-swimmer" />
                            </span>
                            Bể bơi riêng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="room-item-body d-flex">
                      <div className="content d-flex">
                        <p>
                          <span className="icon">
                            <i className="fas fa-spinner" />
                          </span>
                          Hủy phòng
                        </p>
                        <p>
                          <span className="icon">
                            <i className="fas fa-utensils" />
                          </span>
                          Bao gồm buổi sáng
                        </p>
                        <p>
                          <span className="icon">
                            <i className="fas fa-male" />
                          </span>
                          Sức chứa 2 người lớn
                        </p>
                      </div>
                      <div className="price d-flex flex-column">
                        <p>
                          <span className="old-price">850.000đ</span>
                          <span className="discount-price">-40%</span>
                        </p>
                        <p>510.000đ</p>
                        <p>Giá đã bao gồm phí và thuế</p>
                      </div>
                      <div className="d-flex flex-column">
                        <button>Đặt phòng</button>
                      </div>
                    </div>
                  </div>
                  <div className="room-item">
                    <div className="room-item-header d-flex">
                      <div className="img">
                        <img
                          src="https://statics2.vntrip.vn/165x165/data-v2/hotels/12536/img_max/12536_1611041843_suite1.jpg"
                          alt
                        />
                      </div>
                      <div className="content d-flex flex-column">
                        <h3>Superior City View (Window)</h3>
                        <div className="content-info d-flex">
                          <p>
                            <span className="icon">
                              <i className="fas fa-bed" />
                            </span>
                            2 giường
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-cube" />
                            </span>
                            Diện tích : 25 m2
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-bath" />
                            </span>
                            Bồn tắm
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-tv" />
                            </span>
                            TV màn hình phẳng
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-swimmer" />
                            </span>
                            Bể bơi riêng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="room-item-body d-flex">
                      <div className="content d-flex">
                        <p>
                          <span className="icon">
                            <i className="fas fa-spinner" />
                          </span>
                          Hủy phòng
                        </p>
                        <p>
                          <span className="icon">
                            <i className="fas fa-utensils" />
                          </span>
                          Bao gồm buổi sáng
                        </p>
                        <p>
                          <span className="icon">
                            <i className="fas fa-male" />
                          </span>
                          Sức chứa 2 người lớn
                        </p>
                      </div>
                      <div className="price d-flex flex-column">
                        <p>
                          <span className="old-price">1.250.000đ</span>
                          <span className="discount-price">-40%</span>
                        </p>
                        <p>720.000đ</p>
                        <p>Giá đã bao gồm phí và thuế</p>
                      </div>
                      <div className="d-flex flex-column">
                        <button>Đặt phòng</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------- Info-hotel --------------------*/}
              <div className="nesscessary-info">
                <div className="container">
                  <h3>Thông tin về Lucky Star Hotel 146 Nguyen Trai</h3>
                  <div className="row discript">
                    <div className="col-md-3">
                      <h5>Mô tả khách sạn </h5>
                    </div>
                    <div className="col-md-9">
                      LUCKY STAR HOTEL tọa lạc tại 146 đường Nguyễn Trãi quận 1
                      TP HCM, ngay trung tâm thành phố, cách chợ Bến Thành 5
                      phút đi bộ, và cách sân bay chừng 30 phút chạy xe, gần các
                      khu trung tâm mua sắm, giải trí, tài chính, ngân hàng,
                      bệnh viện và các điểm tham quan nổi tiếng của thành phố
                      như: Dinh Độc Lập, bảo tàng Chứng Tích Chiến Tranh, nhà
                      thờ Đức Bà, gần khu phố Tây Bùi Viện, phố đi bộ Nguyễn
                      Huệ, ... Khách sạn nằm ngay trung tâm quận 1, với hệ thống
                      phòng nghỉ có lối kiến trúc hiện đại,nội thất đồ gỗ sang
                      trọng,đạt tiêu chuẩn 1 sao do tổng cục du lịch Việt Nam
                      xếp hạng
                    </div>
                  </div>
                  <div className="row convient">
                    <div className="col-md-3">
                      <h5>Tiện ích xung quanh </h5>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4">
                          <h6>Phương tiện đi lại</h6>
                          <ul>
                            <li>Dịch vụ Taxi</li>
                            <li>Xe đạp</li>
                            <li>Đưa đón sân bay</li>
                            <li>Dịch vụ đưa đón</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>Internet</h6>
                          <ul>
                            <li>Miễn phí Wifi trong phòng</li>
                            <li>Wifi ở khu vực công cộng</li>
                            <li>Miễn phí WIfi ở tất cả các khu vực</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>Ngôn ngữ sử dụng</h6>
                          <ul>
                            <li>Tiếng Anh</li>
                            <li>Tiếng Việt</li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <h6>Dịch vụ lễ tân</h6>
                          <ul>
                            <li>Lễ tân 24 giờ</li>
                            <li>An ninh 24 giờ</li>
                            <li>Nhận/ Trả phòng riêng</li>
                            <li>Dịch vụ hướng dẫn khách</li>
                            <li>Dịch vụ đặt vé</li>
                            <li>Bàn Tour</li>
                            <li>Dịch vụ Nhận/ Trả phòng nhanh</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>Dịch vụ lau dọn</h6>
                          <ul>
                            <li>Dịch vụ lau dọn</li>
                            <li>Giặt khô</li>
                            <li>Dịch vụ ủi (là)</li>
                            <li>Giặt ủi</li>
                            <li>Phục vụ phòng hằng ngày</li>
                            <li>Đánh giày</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>Dịch vụ doanh nhân</h6>
                          <ul>
                            <li>Fax/ Photocopy</li>
                            <li>Dịch vụ Bưu điện</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row nesscessary">
                    <div className="col-md-3">
                      <h5>Thông tin cần biết </h5>
                    </div>
                    <div className="col-md-9">
                      <h6> Nhận phòng/ trả phòng</h6>
                      <p style={{ marginBottom: 0 }}>
                        Nhận phòng từ:{" "}
                        <span style={{ fontWeight: "bold" }}>14:00:00</span>{" "}
                      </p>
                      <p style={{ marginBottom: 0 }}>
                        Trả phòng đến:{" "}
                        <span style={{ fontWeight: "bold" }}>12:00:00</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!----------------------------------- Footer ------------------------------> */}
        <Footer />
      </>
    </div>
  );
}

export default RenderHotelDetail;
