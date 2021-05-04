import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import "./style.css";
import iconhome from "../../../../Components/Header/img/icon-home.png";
import userApi from "../../../../api/userApi";
import productApi from "../../../../api/productApi";
import roomApi from "../../../../api/roomApj";
import { useSelector } from "react-redux";
RenderPay.propTypes = {};

function RenderPay(props) {
  const match = useRouteMatch();
  const {
    params: { roomId },
  } = match;
  const formatter = new Intl.NumberFormat('es');
  const [product, setProduct ] = useState({});
  const [ room, setRoom ] = useState({});
  const [user, setUser] = useState({});
  const loggedUser = useSelector(state => (state.user.current));
  const isLogged = !!loggedUser.id;
  useEffect(()=>{
    (
        async () =>{
            try {
                const dataRoom = await roomApi.get(roomId);
                setRoom(dataRoom);
                const dataPro = await productApi.get(room.productId);
                setProduct(dataPro);

            } catch (error) {
                console.log(error);
            }
        }
    )()
  },[]);
  console.log(product);
  return (
    <div>
      <>
        {/*-------------------------- Pay-header -------------------------*/}
        <div className="pay-header">
          <div className="container-fluid">
            <div className="container d-flex justify-content-between align-items-center">
              <img src={iconhome} alt="true" />
              <p>Thông tin đặt phòng</p>
            </div>
          </div>
        </div>
        {/*---------------------------- Pay body -----------------------*/}
        <div className="pay-body">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12 pay-left">
                <h3>Thông tin đặt phòng</h3>
                <div className="row">
                  <div className="col-md-3">
                    <div>
                      <label>Danh xưng </label>
                      <select className="browser-default custom-select">
                        <option value="brother">Anh</option>
                        <option value="sister">Chị</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <label htmlFor="name">Họ và tên:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nhập họ tên"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="emal">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="emal"
                        placeholder="Nhập email"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-row-reverse"
                  style={{ width: "100%" }}
                >
                  <button>Tiếp tục</button>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 pay-right">
                <div className="img">
                  <img
                    src="https://i.vntrip.vn/345x180/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1607680588_1211.jpg"
                    alt
                  />
                </div>
                <div className="hotel-info">
                  <h3>{product.title}</h3>
                  <p className="icon">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p>
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ marginRight: 10 }}
                    />
                    {product.location}
                  </p>
                  <div className="take-room">
                    <p>Ngày nhận phòng</p>
                    <p>04-04-2021</p>
                  </div>
                  <div className="repay">
                    <p>Ngày trả phòng</p>
                    <p>05-04-2021</p>
                  </div>
                  <div className="number-night">
                    <p>Số đêm</p>
                    <p>{room.day} đêm</p>
                  </div>
                  <div className="hotel-name">
                    <p>{room.name}</p>
                    <p>x1</p>
                  </div>
                  <div className="hotel-price">
                    <p>Gía từ khách sạn</p>
                    <p>{formatter.format(room.oldPrice)}đ</p>
                  </div>
                  <div className="hotel-price-discount">
                    <p>Khuyến mãi</p>
                    <p>{formatter.format((room.oldPrice * room.discount))}đ</p>
                  </div>
                </div>
                <div className="sum-price">
                  <p>Tổng cộng</p>
                  <p>{formatter.format(room.oldPrice - room.oldPrice * room.discount)} đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default RenderPay;
