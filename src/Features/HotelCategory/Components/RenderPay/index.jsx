import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory, useRouteMatch } from "react-router";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import "./style.css";
import iconhome from "../../../../Components/Header/img/icon-home.png";
import userApi from "../../../../api/userApi";
import productApi from "../../../../api/productApi";
import roomApi from "../../../../api/roomApj";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import Order from "../../../../api/orderApi";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import {
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import OrderList from "./components/OrderList";

RenderPay.propTypes = {};

function RenderPay(props) {
  const match = useRouteMatch();
  const {
    params: { roomId },
  } = match;
  const formatter = new Intl.NumberFormat("es");
  const [product, setProduct] = useState({});
  const [room, setRoom] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const dataRoom = await roomApi.get(roomId);
        setRoom(dataRoom);
        // const dataPro = await productApi.get(room.productId);
        // setProduct(dataPro);
        // console.log(product);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(room.productId)

  useEffect(() => {
    (async () => {
      try {
        const dataPro = await productApi.get(room.productId);
        setProduct(dataPro);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [room.productId]);
  //set Date
  const current = new Date();
  let currentDate = "";
  let currentMonth = "";
  let currentYear = "";
  if (current.getDate() < 10) {
    currentDate = `0${current.getDate()}`;
  } else {
    currentDate = `${current.getDate()}`;
  }
  if (current.getMonth() < 10) {
    currentMonth = `0${current.getMonth() + 1}`;
  } else {
    currentMonth = `${current.getDate() + 1}`;
  }
  if (current.getFullYear() < 10) {
    currentYear = `0${current.getFullYear()}`;
  } else {
    currentYear = `${current.getFullYear()}`;
  }
  const currentTime = `${currentYear}-${currentMonth}-${currentDate}`;
  //access data form
  const { enqueueSnackbar } = useSnackbar();
  const [phone, setPhone] = useState();
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  //check login

  const loggedUser = useSelector((state) => state.user.current);
  const isLogged = !!loggedUser.id;
  const [order, setOrder] = useState([]);
  const history = useHistory();
  const handleSubmit = () => {
    if (!isLogged) {
      enqueueSnackbar("Vui lòng đăng nhập trước khi đặt phòng ", {
        variant: "warning",
      });
    } else {
      if (typeof phone === "undefined" || phone.toString().length != 10) {
        enqueueSnackbar("Số điện thoại không hợp lệ", {
          variant: "warning",
        });
      } else {
        const data = {
          customer: loggedUser.name,
          email: loggedUser.email,
          phone: phone,
          hotelThumnail: product.thumnailUrl,
          hotelLocation: product.location,
          hotelName: product.title,
          timeReceive: currentTime,
          roomName: room.name,
          roomNumber: room.number,
          numbeNight: room.day,
          price: (room.oldPrice - room.oldPrice * room.discount) * room.day,
          idRoom: room.id,
          idCustomer: loggedUser.id,
          idProduct : product.id,
          status : 0
        };

        //Goi Api them vao order
        const getApi = Order.add(data);
        enqueueSnackbar("Đặt phòng thành công", {
          variant: "success",
        });
        //redirect when booking succes
        history.push(`/hotel/detail/${product.id}`);
      }
    }
  };
  //Lay order tu API dem vao thong tin dat phong
  useEffect(() => {
    (async () => {
      const orderApi = await Order.getAll();
      let arrOder = [];
      orderApi.map((item) => {
        if (item.idCustomer === loggedUser.id) {
          return arrOder.push(item);
        }
      });
      setOrder(arrOder);
    })();
  }, []);

  // console.log(order);
  //Xu lí dialog Thông tin đặt phòng
  const [open, setOpen] = useState(false);
  // console.log(room.id, order.idRoom);
  const handleClickOpen = () => {
    if (!isLogged) {
      enqueueSnackbar("Vui lòng đăng nhập để xem thông tin", {
        variant: "info",
      });
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  //set full screen for dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  
  return (
    <div>
      <>
        {/*-------------------------- Pay-header -------------------------*/}
        <div className="pay-header">
          <div className="container-fluid">
            <div className="container d-flex justify-content-between align-items-center">
              <img src={iconhome} alt="true" />
              <p className="detailbooking" onClick={handleClickOpen}>
                Thông tin đặt phòng
              </p>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen={fullScreen}
                // style={{maxWidth : '800px'}}
              >
                <DialogTitle id="alert-dialog-title">
                  {"Thông tin đặt phòng"}
                </DialogTitle>
                <DialogContent dividers style={{ maxWidth: "800px" }}>
                  <table className="dialog-table">
                    <Typography gutterBottom>
                      <thead>
                        <tr>
                          <th>Khách sạn</th>
                          <th>Loại phòng</th>
                          <th>Ngày đặt phòng</th>
                          <th>Giá</th>
                          <th>Tùy chọn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.map((item) => {
                          return (
                            <OrderList orderList={item}/>
                            // <tr key={item.id}>
                            //   <td>{item.hotelName}</td>
                            //   <td>{item.roomNumber} giường đơn</td>
                            //   <td>{item.timeReceive}</td>
                            //   <td>{item.price}</td>
                            //   <td className="huy"> Hủy</td>
                            // </tr>
                          );
                        })}
                      </tbody>
                    </Typography>
                  </table>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Exit
                  </Button>
                </DialogActions>
              </Dialog>
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
                      {isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nhập họ tên"
                          defaultValue={loggedUser.name}
                        />
                      )}
                      {!isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nhập họ tên"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        pattern="[0-9]{10}"
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="emal">Email:</label>
                      {isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="emal"
                          placeholder="Nhập email"
                          defaultValue={loggedUser.email}
                        />
                      )}
                      {!isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="emal"
                          placeholder="Nhập email"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-row-reverse"
                  style={{ width: "100%" }}
                >
                  <button onClick={handleSubmit}>Thanh toán</button>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 pay-right">
                <div className="img">
                  <img src={product.thumnailUrl} alt="true" />
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
                    <p>{currentTime}</p>
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
                    <p>{formatter.format(room.oldPrice * room.discount)}đ</p>
                  </div>
                </div>
                <div className="sum-price">
                  <p>Tổng cộng</p>
                  <p>
                    {formatter.format(
                      room.oldPrice - room.oldPrice * room.discount
                    )}{" "}
                    đ
                  </p>
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
