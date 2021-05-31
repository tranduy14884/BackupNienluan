import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import userApi from "../../../../../api/userApi";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./style.css";
import Order from "../../../../../api/orderApi";
import productApi from "../../../../../api/productApi";
DonHang.propTypes = {
  donhang: PropTypes.object,
  handleChangeStatus: PropTypes.func,
};

function DonHang(props) {
  const { enqueueSnackbar } = useSnackbar();
  const { donhang, handleChangeStatus } = props;
  //custom number
  const format = new Intl.NumberFormat("es");
  const handleDelete = () => {
    const requestDelete  =  Order.remove(donhang.id);
    enqueueSnackbar("Xóa đơn hàng thành công", { variant: "success" });
    window.location.reload();
   // history.push('/Admin/khachsan');

    setOpen(false);
  };
  //custom dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //get hotel to change number
  const [numberHotel, setNumberHotel] = useState(0);
  useEffect(() => {
    const fetchData = async () =>{
      const dataApi = await productApi.get(donhang.idProduct);
      setNumberHotel(dataApi.available);
    }
    fetchData();
  }, []);
  const handleStatus = async () => {
     if (handleChangeStatus) {
      const data = {
        id: donhang.id,
        status: 1,
      };
      
      const dataHotel = {
        id : donhang.idProduct,
        available : numberHotel - donhang.roomNumber
      }
      await handleChangeStatus(data);
      const changeStatus = Order.update(data);
      const changeNumberHotel = productApi.update(dataHotel);
    }
  };
  return (
    <tr>
      <td>{donhang.id}</td>
      <td>{donhang.customer}</td>
      <td>{donhang.email}</td>
      <td>{donhang.phone}</td>
      <td>
        <img
          src={donhang.hotelThumnail}
          alt="#"
          title={donhang.hotelName}
          width="80px"
          height="80px"
        />
      </td>
      <td>{donhang.roomName}</td>
      <td>{donhang.timeReceive}</td>
      <td>{format.format(donhang.price)} VND</td>
      <td >
        {donhang.status == 0 && (
          <button className="chuaxuli" onClick={handleStatus}>Chưa xử lý</button>
        )}
        {donhang.status == 1 && (
          <button className="daxuli">Đã xử lý</button>
        )}
      </td>
      <td>
        <p>
          <span className="delete-product" onClick={handleClickOpen}>
            Xóa
          </span>
        </p>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn có chắc là xóa đơn hàng này không ?"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Hủy bỏ
            </Button>
            <Button onClick={handleDelete} color="primary" autoFocus>
              Xác nhận
            </Button>
          </DialogActions>
        </Dialog>
      </td>
    </tr>
  );
}

export default DonHang;
