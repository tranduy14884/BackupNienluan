import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import productApi from "../../../../../../../api/productApi";
import { useSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import "./style.css";
KhachSan.propTypes = {
  khachsan: PropTypes.object,
};

function KhachSan(props) {
  const { khachsan } = props;
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const handleDelete = () => {
    const requestDelete  = productApi.remove(khachsan.id);
    enqueueSnackbar("Xóa khach san thành công", { variant: "success" });
    window.location.reload();
    //history.push('/Admin/khachsan');

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
 
  return (
    <tr key={khachsan.id} className="admin-product">
      <td>{khachsan.id}</td>
      <td>{khachsan.title}</td>
      <td>
        <img src={khachsan.thumnailUrl} alt="#" />
      </td>
      <td>{khachsan.location}</td>
      <td>{khachsan.price}</td>
      <td>{khachsan.discount}</td>
      <td>{khachsan.available}</td>
      <td><Link to={`/Admin/khachsan/room/${khachsan.id}`} className="detail-room">Xem</Link></td>
      <td><Link to={`/Admin/khachsan/chitietkhachsan/${khachsan.id}`} className="detail-room">Xem</Link></td>
      <td>
        <p>
          <Link to={`/Admin/khachsan/update/${khachsan.id}`}>Sửa</Link>

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
            {"Bạn có chắc là xóa sản phẩm này không ?"}
          </DialogTitle>
          {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
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

export default KhachSan;
