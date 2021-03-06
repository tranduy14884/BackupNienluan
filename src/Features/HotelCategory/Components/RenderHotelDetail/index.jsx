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
                <a href="#">Trang ch??? &gt;</a>
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
                      <h3>Th??ng tin v??? {item.name}</h3>

                    )
                  })
                }
                  <div className="row discript">
                    <div className="col-md-3">
                      <h5>M?? t??? kh??ch s???n </h5>
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
                      <h5>Ti???n ??ch xung quanh </h5>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4">
                          <h6>Ph????ng ti???n ??i l???i</h6>
                          <ul>
                            <li>D???ch v??? Taxi</li>
                            <li>Xe ?????p</li>
                            <li>????a ????n s??n bay</li>
                            <li>D???ch v??? ????a ????n</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>Internet</h6>
                          <ul>
                            <li>Mi???n ph?? Wifi trong ph??ng</li>
                            <li>Wifi ??? khu v???c c??ng c???ng</li>
                            <li>Mi???n ph?? WIfi ??? t???t c??? c??c khu v???c</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>Ng??n ng??? s??? d???ng</h6>
                          <ul>
                            <li>Ti???ng Anh</li>
                            <li>Ti???ng Vi???t</li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <h6>D???ch v??? l??? t??n</h6>
                          <ul>
                            <li>L??? t??n 24 gi???</li>
                            <li>An ninh 24 gi???</li>
                            <li>Nh???n/ Tr??? ph??ng ri??ng</li>
                            <li>D???ch v??? h?????ng d???n kh??ch</li>
                            <li>D???ch v??? ?????t v??</li>
                            <li>B??n Tour</li>
                            <li>D???ch v??? Nh???n/ Tr??? ph??ng nhanh</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>D???ch v??? lau d???n</h6>
                          <ul>
                            <li>D???ch v??? lau d???n</li>
                            <li>Gi???t kh??</li>
                            <li>D???ch v??? ???i (l??)</li>
                            <li>Gi???t ???i</li>
                            <li>Ph???c v??? ph??ng h???ng ng??y</li>
                            <li>????nh gi??y</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h6>D???ch v??? doanh nh??n</h6>
                          <ul>
                            <li>Fax/ Photocopy</li>
                            <li>D???ch v??? B??u ??i???n</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row nesscessary">
                    <div className="col-md-3">
                      <h5>Th??ng tin c???n bi???t </h5>
                    </div>
                    <div className="col-md-9">
                      <h6> Nh???n ph??ng/ tr??? ph??ng</h6>
                      <p style={{ marginBottom: 0 }}>
                        Nh???n ph??ng t???:{" "}
                        <span style={{ fontWeight: "bold" }}>14:00:00</span>{" "}
                      </p>
                      <p style={{ marginBottom: 0 }}>
                        Tr??? ph??ng ?????n:{" "}
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
