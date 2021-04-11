import React from "react";
import PropTypes from "prop-types";
import "./style.css";
RenderHotelList.propTypes = {
  HotelList: PropTypes.array,
};
RenderHotelList.defaultProps = {
  HotelList: [],
};
function RenderHotelList(props) {
  const { HotelList } = props;
  const formatter = new Intl.NumberFormat("es");
  return (
    <div>
      <div className="hotel-list-body d-flex justify-content-between">
        <div className="hotel-list-filter-tab">
          <div>
            <div className="hotel-list-list-group-tab d-flex flex-column">
              <div className="group-tab-item">
                <p>Xem giá</p>
              </div>
              <div className="group-tab-item">
                <p>Mức giá</p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      Dưới 500.000đ
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      500.000đ - 1.000.000đ
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="1000-2000"
                      />{" "}
                      1.000.000đ - 2.000.000đ
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2000-5000"
                      />{" "}
                      2.000.000đ - 5.000.000
                    </label>
                  </div>
                </div>
              </div>
              <div className="group-tab-item">
                <p>Xếp hạng khách sạn</p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="1000-2000"
                      />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2000-5000"
                      />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2000-5000"
                      />
                      <i className="fas fa-star" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="group-tab-item">
                <p>Quận huyện</p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      Option 1
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
              <div className="group-tab-item">
                <p>Tiện nghi khách sạn </p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      Hồ bơi
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      Spa
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      Bồn nước nóng
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-list-content">
          <p>
            Trang chủ &gt;{" "}
            <span>
              Khách sạn tại Thành phố Nha Trang, Khánh Hòa có 87 khách sạn có
              phòng
            </span>
          </p>
          <h3>Khách sạn tại Thành phố Nha Trang, Khánh Hòa</h3>
          <div className="hotel-list d-flex flex-column">
            {
              HotelList.map((item) => {
                if (item.name == "Nha Trang") {
                  return item.list.map((hotel) => {
                    return (
                      <a
                        href={hotel.link}
                        className="hotel-list-item d-flex flex-row justify-content-between"
                      >
                        <div className="item-left d-flex flex-row">
                          <div className="item-img">
                            <img src={hotel.thumnailUrl} alt />
                          </div>
                          <div className="item-content">
                            <h5>{hotel.title}</h5>
                            <p>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </p>
                            <p className="item-title">
                              <span>
                                <i
                                  className="fas fa-map-marker-alt"
                                  style={{ marginRight: 5 }}
                                />
                              </span>
                              {hotel.location}
                            </p>
                            <p className="icon-suport">
                              <i className="fas fa-wifi" title="Wifi" />
                              <i className="fas fa-swimmer" title="Bể bơi" />
                              <i className="fas fa-utensils" title="Nhà hàng" />
                              <i className="fas fa-car" title="Bãi đậu xe" />
                            </p>
                          </div>
                        </div>
                        <div className="item-right d-flex flex-column">
                          <div className="item-rank d-flex flex-row justify-content-end">
                            <div className="rank-text">
                              <p>Rất tốt</p>
                              <p>{hotel.rankNumber}</p>
                            </div>
                            <div className="rank-point">
                              <p>
                                <i className="fas fa-angle-right" />
                                <i className="fas fa-angle-right" />
                                <i className="fas fa-star" />
                                <i className="fas fa-angle-left" />
                                <i className="fas fa-angle-left" />
                              </p>
                              <p>{hotel.rankPoint}</p>
                            </div>
                          </div>
                          <div className="item-price">
                            <span className="old-price">
                              {formatter.format(hotel.price)} đ
                            </span>
                            <span className="discount-price">
                              -{hotel.discount}%
                            </span>
                            <p className="price">
                              {formatter.format(
                                hotel.price - hotel.price * hotel.discount
                              )}
                            </p>
                            <button>Xem phòng</button>
                            <p>Chỉ còn {hotel.available} phòng !</p>
                          </div>
                        </div>
                      </a>
                    );
                  });
                }
              })
            }
          </div>
          <div className="pagination" />
        </div>
      </div>
    </div>
  );
}

export default RenderHotelList;
