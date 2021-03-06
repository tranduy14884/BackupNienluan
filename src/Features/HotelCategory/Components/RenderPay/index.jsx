import React, { useEffect, useRef, useState } from "react";
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
import "react-datepicker/dist/react-datepicker.css";
import {
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import OrderList from "./components/OrderList";
import { useForm } from "react-hook-form";

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
  //Xu l?? dialog Th??ng tin ?????t ph??ng
  const [open, setOpen] = useState(false);
  // console.log(room.id, order.idRoom);
  const handleClickOpen = () => {
    if (!isLogged) {
      enqueueSnackbar("Vui l??ng ????ng nh???p ????? xem th??ng tin", {
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
  // X??? l?? ch???nh s???a ????n h??ng
  const [numberNight, setNumbeNight] = useState(1);
  const [numberRoom, setNumberRoom] = useState(1);
  const [dateBooked, setDateBooked] = useState(currentTime);
  const numbersNight = useRef();
  const numbersRoom = useRef();
  const dateBooking = useRef();
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleInscreNumberNight = () => {
    setNumbeNight((x) => x + 1);
  };
  const handleDescreNumberNight = () => {
    setNumbeNight((x) => {
      if (x > 1) {
        return x - 1;
      } else return 1;
    });
  };
  const handleInscreNumberRoom = () => {
    setNumberRoom((x) => x + 1);
  };
  const handleDescreNumberRoom = () => {
    setNumberRoom((x) => {
      if (x > 1) {
        return x - 1;
      } else return 1;
    });
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };
  const { handleSubmit, register } = useForm({});
  const handleSubmitUpdate = () => {
    if (Date.parse(dateBooking.current.value) < Date.parse(currentTime)) {
      enqueueSnackbar("Ng??y nh???n ph??ng kh??ng h???p l??? !!!", { variant: "error" });
    } else {
      setNumbeNight(numbersNight.current.value);
      setNumberRoom(numbersRoom.current.value);
      setDateBooked(dateBooking.current.value);
    }

    handleCloseUpdate();
  };
  //access pay
  const handleSubmitPay = () => {
    if (!isLogged) {
      enqueueSnackbar("Vui l??ng ????ng nh???p tr?????c khi ?????t ph??ng ", {
        variant: "warning",
      });
    } else {
      if (typeof phone === "undefined" || phone.toString().length != 10) {
        enqueueSnackbar("S??? ??i???n tho???i kh??ng h???p l???", {
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
          timeReceive: dateBooked,
          roomName: room.name,
          roomNumber: numberRoom,
          numbeNight: numberNight,
          price: (room.oldPrice - room.oldPrice * room.discount) * numberRoom * numberNight,
          idRoom: room.id,
          idCustomer: loggedUser.id,
          idProduct: product.id,
          status: 0,
        };

        //Goi Api them vao order
        const getApi = Order.add(data);
        enqueueSnackbar("?????t ph??ng th??nh c??ng", {
          variant: "success",
        });
        //redirect when booking succes
        history.push(`/hotel/detail/${product.id}`);
      }
    }
  };
  return (
    <div>
      <>
        {/*-------------------------- Pay-header -------------------------*/}
        <div className="pay-header">
          <div className="container-fluid">
            <div className="container d-flex justify-content-between align-items-center">
              <img src={iconhome} alt="true" />
              <p className="detailbooking" onClick={handleClickOpen}>
                Th??ng tin ?????t ph??ng
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
                  {"Th??ng tin ?????t ph??ng"}
                </DialogTitle>
                <DialogContent dividers style={{ maxWidth: "800px" }}>
                  <table className="dialog-table">
                    <Typography gutterBottom>
                      <thead>
                        <tr>
                          <th>Kh??ch s???n</th>
                          <th>Lo???i ph??ng</th>
                          <th>Ng??y ?????t ph??ng</th>
                          <th>Gi??</th>
                          <th>T??y ch???n</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.map((item) => {
                          return <OrderList orderList={item} key={item.id} />;
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
                <h3>Th??ng tin ?????t ph??ng</h3>

                <div className="row">
                  <div className="col-md-3">
                    <div>
                      <label>Danh x??ng </label>
                      <select className="browser-default custom-select">
                        <option value="brother">Anh</option>
                        <option value="sister">Ch???</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <label htmlFor="name">H??? v?? t??n:</label>
                      {isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nh???p h??? t??n"
                          defaultValue={loggedUser.name}
                        />
                      )}
                      {!isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nh???p h??? t??n"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="phone">S??? ??i???n tho???i:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Nh???p s??? ??i???n tho???i"
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
                          placeholder="Nh???p email"
                          defaultValue={loggedUser.email}
                        />
                      )}
                      {!isLogged && (
                        <input
                          type="text"
                          className="form-control"
                          id="emal"
                          placeholder="Nh???p email"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-row-reverse"
                  style={{ width: "100%" }}
                >
                  <button onClick={handleSubmitPay}>Thanh to??n</button>
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
                    <p>Ng??y nh???n ph??ng</p>
                    <p>{dateBooked}</p>
                  </div>
                  <div className="number-night">
                    <p>S??? ????m</p>
                    <p>{numberNight} ????m</p>
                  </div>
                  <div className="hotel-name">
                    <p>{room.name}</p>
                    <p>x {numberRoom}</p>
                  </div>
                  <p className="detailbooking" onClick={handleClickOpenUpdate}>
                    <button>S???a</button>
                  </p>
                  <Dialog
                    open={openUpdate}
                    onClose={handleCloseUpdate}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"??i???u ch???nh ????n h??ng"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <form onSubmit={handleSubmit(handleSubmitUpdate)}>
                          <div className="take-room">
                            <p>Ng??y nh???n ph??ng</p>
                            <input
                              type="date"
                              id="date"
                              defaultValue={currentTime}
                              className="date-picker"
                              ref={dateBooking}
                            />
                          </div>
                          <div className="number-night">
                            <p>S??? ????m</p>
                            <div className="number-night-content">
                              <span onClick={handleDescreNumberNight}>
                                <i class="fas fa-minus"></i> &nbsp; &nbsp;
                              </span>
                              <input
                                type="text"
                                defaultValue={numberNight}
                                ref={numbersNight}
                              />
                              <span onClick={handleInscreNumberNight}>
                                <i class="fas fa-plus"></i>
                              </span>
                            </div>
                          </div>
                          <div className="hotel-name">
                            <p>{room.name}</p>
                            <div className="number-name-content">
                              <span onClick={handleDescreNumberRoom}>
                                {" "}
                                <i class="fas fa-minus"></i> &nbsp; &nbsp;
                              </span>
                              <input
                                type="text"
                                defaultValue={numberRoom}
                                ref={numbersRoom}
                              />
                              <span onClick={handleInscreNumberRoom}>
                                <i class="fas fa-plus"></i>
                              </span>
                            </div>
                          </div>
                        </form>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleSubmitUpdate} color="primary">
                        X??c nh???n
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <div className="hotel-price">
                    <p>G??a t??? kh??ch s???n</p>
                    <p>{formatter.format(room.oldPrice)}??</p>
                  </div>
                  <div className="hotel-price-discount">
                    <p>Khuy???n m??i</p>
                    <p>{formatter.format(room.oldPrice * room.discount)}??</p>
                  </div>
                </div>
                <div className="sum-price">
                  <p>T???ng c???ng</p>
                  <p>
                    {formatter.format(
                      (room.oldPrice - room.oldPrice * room.discount)*numberRoom*numberNight
                    )}{" "}
                    ??
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
