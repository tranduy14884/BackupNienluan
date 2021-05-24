import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import userApi from '../../../../../api/userApi';
import { useSnackbar } from 'notistack';
import {Link} from 'react-router-dom';
import { Button } from "@material-ui/core";

KhachHang.propTypes = {
    khachhang : PropTypes.object.isRequired
};

function KhachHang(props) {
    const {enqueueSnackbar} = useSnackbar();
    const {khachhang} = props;
    const handleDelete = () => {
        const requestDelete  =  userApi.remove(khachhang.id);
        enqueueSnackbar("Xóa tài khoản thành công", { variant: "success" });
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
        <tr>
            <td>{khachhang.id}</td>
            <td>{khachhang.name}</td>
            <td>{khachhang.email}</td>
            <td>
            <p>
          <Link to={`/Admin/khachhang/update/${khachhang.id}`}>Sửa</Link>

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
            {"Bạn có chắc là xóa tài khoản này không ?"}
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

export default KhachHang;