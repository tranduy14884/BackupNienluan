import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

RenderRoom.propTypes = {
  room: PropTypes.object,
  hotel: PropTypes.object,
};

function RenderRoom(props) {
  const { room, hotel } = props;
  const formatter = new Intl.NumberFormat("es");
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (hotel.available === 0) {
      handleClickOpen();
    }
    else{
      history.push(`/hotel/detail/pay/${room.id}`);
    }
  };
  return (
    <div className="room-item">
      <div className="room-item-header d-flex">
        <div className="img">
          <img src={room.thumnailUrl} alt />
        </div>
        <div className="content d-flex flex-column">
          <h3>{room.name}</h3>
          <div className="content-info d-flex">
            <p>
              <span className="icon">
                <i className="fas fa-bed" />
              </span>
              {room.numberBed} giường
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-cube" />
              </span>
              Diện tích : 25 m2
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-bath" />
              </span>
              Bồn tắm
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-tv" />
              </span>
              TV màn hình phẳng
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-swimmer" />
              </span>
              Bể bơi riêng
            </p>
          </div>
        </div>
      </div>
      <div className="room-item-body d-flex">
        <div className="content d-flex">
          <p>
            <span className="icon">
              <i className="fas fa-spinner" />
            </span>
            Hủy phòng
          </p>
          <p>
            <span className="icon">
              <i className="fas fa-utensils" />
            </span>
            Bao gồm buổi sáng
          </p>
          <p>
            <span className="icon">
              <i className="fas fa-male" />
            </span>
            Sức chứa 2 người lớn
          </p>
        </div>
        <div className="price d-flex flex-column">
          <p>
            <span className="old-price">
              {formatter.format(room.oldPrice)}đ
            </span>
            <span className="discount-price">
              -{(room.discount * 1000) / 10}%
            </span>
          </p>
          <p>
            {formatter.format(room.oldPrice - room.oldPrice * room.discount)}
          </p>
          <p>Giá đã bao gồm phí và thuế</p>
        </div>
        <div className="d-flex flex-column">
          <button onClick={handleClick}>Đặt phòng</button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Thông báo từ khách sạn"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Xin lỗi quý khách, khách sạn hiện đã hết phòng.
                Chúc quý khách 1 ngày tốt lành
              </DialogContentText>
            </DialogContent>
            <DialogActions>
             
              <Button onClick={handleClose} color="primary">
                Thoát
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default RenderRoom;
