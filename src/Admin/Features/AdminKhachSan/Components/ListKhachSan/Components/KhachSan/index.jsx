import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
  const handleDelete = () => {
    const requestDelete  = productApi.remove(khachsan.id);
    enqueueSnackbar("Xoa thanh cong", { variant: "success" });
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
            {"Are you sure you will delete this product?"}
          </DialogTitle>
          {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </td>
    </tr>
  );
}

export default KhachSan;
