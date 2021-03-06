import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router";
import "./style.css";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import RenderSearch from "../RenderSearch";
import detailApi from "../../../../api/detailApi";
import RenderRoom from "../RenderRoom";
import roomApi from "../../../../api/roomApj";
import productApi from "../../../../api/productApi";
RenderHotelDetail.propTypes = {};

function RenderHotelDetail(props) {
  const match = useRouteMatch();
  const {
    params: { hotelId },
  } = match;
  //get detail from Api
  const [data,setData] = useState([]);
  useEffect(() => {
    const getData = async ()=>{
        // const dataDetailApi = await detailApi.get(hotelId);
        const dataApi = await detailApi.getAll();
        const data = dataApi.filter(item =>{
            return item.productID == hotelId;
        });
        setData(data);
    }
    getData();
  },[hotelId]);

  console.log(data);
  //get rooms from Api
  const [ room,setRoom ] = useState([]);
  useEffect(() => {
    const getData = async ()=>{
        const dataApi = await roomApi.getAll();
        setRoom(dataApi);
    }
    getData();
  },[]);
  const roomFilter = room.filter(item => (item.productId == hotelId));
  // console.log(roomFilter);
  //get hotel to check number
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    const getData = async ()=>{
        const dataApi = await productApi.get(hotelId);
        setHotel(dataApi);
    }
    getData();
  },[]);
  return (
    <div>
      <>
        <Header />
        {/*--------------------------------- body ------------------------------*/}
        <div className="main">
          <div className="container">
            <div className="hotel-detail">
              {/*------------------ hotel-search ------------------*/}
              
              {/*--------------------- title ---------------------*/}
              <div className="title-detail d-flex">
                <a href="#">Trang chủ &gt;</a>
                {
                  data.map(item =>{
                    return (
                      <p>{item.name}</p>
                    )
                  })
                }
              </div>
              {/*------------------ hotel-detail-header ----------------*/}
              <div className="hotel-detail-header">
                <div className="d-flex align-items-end">
                {
                  data.map(item =>{
                    return (
                      <h2>{item.name}</h2>
                    )
                  })
                }
                  

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
                  {
                  data.map(item =>{
                    return (
                      <>{item.location}</>

                    )
                  })
                }
                </p>
                <div className="img-header">
                 {
                   data.map(item => {
                     return (
                       <>
                      <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl1}
                            alt={item.thumnailUrl1}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl2}
                            alt={item.thumnailUrl1}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl3}
                            alt={item.thumnailUrl3}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl4}
                            alt={item.thumnailUrl4}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl5}
                            alt={item.thumnailUrl5}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl6}
                            alt={item.thumnailUrl6}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="img-col">
                          <img
                            src={item.thumnailUrl7}
                            alt={item.thumnailUrl7}
                          />
                        </div>
                      </div>
                    </div>
                    </>
                     )
                   })
                 }
                </div>
              </div>
              {/*------------------ hotel-detail-body -------------------*/}
              <div className="hotel-detail-body d-flex flex-column">
                <div className="list-room">
                  
                    {
                      roomFilter.map(item =>{
                        return <RenderRoom room={item} key={item.id} hotel={hotel}></RenderRoom>
                      })
                    }
                 
                </div>
              </div>
              {/*--------------------- Info-hotel --------------------*/}
              <div className="nesscessary-info">
                <div className="container">
                {
                  data.map(item =>{
                    return (
                      <h3>Thông tin về {item.name}</h3>

                    )
                  })
                }
                  <div className="row discript">
                    <div className="col-md-3">
                      <h5>Mô tả khách sạn </h5>
                    </div>
                    <div className="col-md-9">
                      
                    {
                  data.map(item =>{
                    return (
                      <p>{item.description}</p>

                    )
                  })
                }
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
