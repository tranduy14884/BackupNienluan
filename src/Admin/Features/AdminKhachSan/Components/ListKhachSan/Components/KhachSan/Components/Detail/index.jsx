import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
Detail.propTypes = {
    detail : PropTypes.object,
};

function Detail(props) {
    const {detail} = props;
  const { enqueueSnackbar } = useSnackbar();

    //custom dialog
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleDelete = () => {
        // const requestDelete  = roomApi.remove(room.id);
        enqueueSnackbar("Xóa khach san thành công", { variant: "success" });
        window.location.reload();
        //history.push('/Admin/khachsan');
    
        setOpen(false);
      };
    return (
        <tr key={detail.id} className="admin-product">
        <td>{detail.id}</td>
        <td>{detail.name}</td>
        <td>{detail.location}</td>
        <td>{detail.description.slice(0,80)}...</td>
        <td><img src={detail.thumnailUrl1} alt={detail.name} width="60px" height="60px" /></td>
        <td><img src={detail.thumnailUrl2} alt={detail.name} width="60px" height="60px" /></td>
        <td><img src={detail.thumnailUrl3} alt={detail.name} width="60px" height="60px" /></td>
        <td><img src={detail.thumnailUrl4} alt={detail.name} width="60px" height="60px" /></td>
        <td><img src={detail.thumnailUrl5} alt={detail.name} width="60px" height="60px" /></td>
        <td><img src={detail.thumnailUrl6} alt={detail.name} width="60px" height="60px" /></td>
        <td><img src={detail.thumnailUrl7} alt={detail.name} width="60px" height="60px" /></td>
        
        
        
        
        
        
        
        <td>
          <p>
            <Link to={`/Admin/khachsan/chitietkhachsan/sua/${detail.id}`}>Sửa</Link>
  
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

export default Detail;