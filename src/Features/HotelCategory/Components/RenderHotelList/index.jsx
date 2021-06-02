import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Hotel from "./Components/Hotel";
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
//  console.log(HotelList);
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
                     <Hotel hotel={hotel} key={hotel.id}></Hotel>
                    )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderHotelList;
