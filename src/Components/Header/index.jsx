import { Box, IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../../Features/Auth/Components/Login";
import Register from "../../Features/Auth/Components/Register";
import { logout } from "../../Features/Auth/userSlice";
import iconhome from "./img/icon-home.png";
import "./style.css";
const useStyle = makeStyles((theme) => ({
  closeBtn: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 2,
  },
}));
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};
function Header(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const loggedUser = useSelector((state) => state.user.current);
  const isLogged = !!loggedUser.id;

  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUserClick = (e) =>{
    setAnchorEl(e.currentTarget);
  }
  const handleLogoutClick = () =>{
    const action= logout();
    dispatch(action);
  }

  const handleCloseMenu = () =>{
    setAnchorEl(null);
  }
  const handleClose = () => {
    setOpen(false);
  };
  
  //style material-UI
  const classes = useStyle();
  return (
    <div>
      <div className="container header">
        <div className="container-fluid">
          <div className="flex-container header-1">
            <div className="icon-home">
              <img src={iconhome} alt="icon-home" />
            </div>
            <ul className="info-home">
              <li>
                <a href="#">Tra cứu đơn hàng</a>
              </li>
              <li className="info-phone">
                <a href="#">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  12345678
                </a>
              </li>
              <li>
                <div className="info-login"></div>
              </li>

              <li>
                {!isLogged && (
                  <p
                    style={{ backgroundColor: "#ff8917" }}
                    onClick={handleClickOpen}
                  >
                    Đăng nhập
                  </p>
                )}

                {isLogged && (
                  <p>Hi {loggedUser.name} &ensp;
                    <i className="far fa-user-circle icon-user" onClick={handleUserClick}></i>
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="container-fluid container-navbar">
          <div className="flex-container">
            <ul className="header-2">
              <li className="tab-item">
                <NavLink to="/" exact>
                  <span>
                    <i className="fab fa-asymmetrik" />
                  </span>
                  Săn giá rẻ
                </NavLink>
              </li>
              <li className="tab-item">
                <NavLink to="/hotel" exact>
                  <span>
                    <i className="fa fa-building" aria-hidden="true" />
                  </span>
                  Khách sạn
                </NavLink>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i className="fa fa-plane" aria-hidden="true" />
                  </span>
                  Vé máy bay
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i className="fa fa-bed" aria-hidden="true" />
                  </span>
                  Nhà nghỉ
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i
                      className="fa fa-american-sign-language-interpreting"
                      aria-hidden="true"
                    />
                  </span>
                  Doanh nghiệp
                </a>
              </li>
              <li className="tab-item">
                <a href="#">
                  <span>
                    <i className="fa fa-archive" aria-hidden="true" />
                  </span>
                  Cẩm nang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Close />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have account . Login here !
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an accounts . Register here !
                </Button>
              </Box>
            </>
          )}
          {/* <Login closeDialog={handleClose} /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
