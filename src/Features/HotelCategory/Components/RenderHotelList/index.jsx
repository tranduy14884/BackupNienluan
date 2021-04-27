import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import TabSearch from "./Components/TabSearch";
RenderHotelList.propTypes = {
  HotelList: PropTypes.array,
  name : PropTypes.string,
  number : PropTypes.number,
};
RenderHotelList.defaultProps = {
  HotelList: [],
};
function RenderHotelList(props) {
  const { HotelList ,name, number } = props;
  const formatter = new Intl.NumberFormat("es");
  return (
    <div>
      <div className="hotel-list-body d-flex justify-content-between">
        <TabSearch />
        <div className="hotel-list-content">
          <p>
            Trang chủ &gt;{" "}
            <span>
              Khách sạn tại Thành phố {name} có {number} khách sạn có
              phòng
            </span>
          </p>
          <h3>Khách sạn tại Thành phố {name}</h3>
          <div className="hotel-list d-flex flex-column">
            {
              HotelList.map((hotel) => {
                    return (
                      <a
                        key={hotel.id}
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
                              -{hotel.discount *100}%
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
