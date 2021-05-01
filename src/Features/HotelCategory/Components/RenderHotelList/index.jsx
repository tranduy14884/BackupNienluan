import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import TabSearch from "./Components/TabSearch";
import "./style.css";
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
  //filter follow price
  
  const [newList,setNewList] = useState(HotelList);
  useEffect(() => {
    setNewList(HotelList);
  }, [HotelList])
  // console.log(newList);
  // let newList = [...HotelList];

 
  const handleFilterPrice = (data) =>{
    let listFilter = [];
    if(data==500)
    {
      listFilter = HotelList.filter(item => ( (item.price - item.price * item.discount) <= 500000));
    }
    if(data==800)
    {
      listFilter = HotelList.filter(item => ( (item.price - item.price * item.discount) > 500000) && ((item.price - item.price * item.discount) <= 1000000));
    }
    if(data==1500)
    {
      listFilter = HotelList.filter(item => ( (item.price - item.price * item.discount) > 1000000) && ((item.price - item.price * item.discount) <= 2000000));
    }
    if(data==2500)
    {
      listFilter = HotelList.filter(item => ( (item.price - item.price * item.discount) > 2000000) && ((item.price - item.price * item.discount) <= 5000000));
    }
    setNewList(listFilter);
  }
  

  return (
    <div>
      <div className="hotel-list-body d-flex justify-content-between">
        <TabSearch handleFilter={handleFilterPrice}/>
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
              newList.map((hotel) => {
                    return (
                      <a
                        
                        className="hotel-list-item d-flex flex-row justify-content-between"
                      >
                        <div className="item-left d-flex flex-row" key={hotel.id}>
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
                              - {(hotel.discount * 1000)/10}%
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
        </div>
      </div>
    </div>
  );
}

export default RenderHotelList;
