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
import roomApi from '../../../../../../../../../api/roomApj';
Room.propTypes = {
    room : PropTypes.object,
};

function Room(props) {
    const {room} = props;
    const format = new Intl.NumberFormat('es');
  const { enqueueSnackbar } = useSnackbar();

    const handleDelete = () => {
        const requestDelete  = roomApi.remove(room.id);
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
        <tr key={room.id} className="admin-product">
        <td>{room.id}</td>
        <td>{room.name}</td>
        <td><img src={room.thumnailUrl} alt={room.name} width="80px" height="80px" /></td>
        <td>{format.format(room.oldPrice - room.oldPrice*room.discount)}VND</td>
        <td>{room.discount* 100 }%</td>
        <td>{room.numberBed}</td>
        <td>
          <p>
            <Link to={`/Admin/khachsan/room/update/${room.id}`}>Sửa</Link>
  
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

export default Room;