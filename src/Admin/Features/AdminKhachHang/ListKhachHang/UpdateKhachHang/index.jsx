import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useHistory, useRouteMatch } from "react-router";
import userApi from "../../../../../api/userApi";
import { set } from "react-hook-form";
import Sidebar from "../../../../Components/Sidebar";
import AdHeader from "../../../../Components/AdHeader";
import AdFooter from "../../../../Components/AdFooter";
import {Link} from 'react-router-dom';
import { current } from "immer";
import { useSnackbar } from "notistack";
UpdateKhachHang.propTypes = {};

function UpdateKhachHang(props) {
  const match = useRouteMatch();
  const {
    params: { khachhangId },
  } = match;
  //get data from api
  const [data, setData ] = useState({});
  useEffect(()=>{ 
   const fetchData =  async () =>
    {
        const dataApi = await userApi.get(khachhangId);
        setData(dataApi);
    }
    fetchData();
  },[]);
  //custom annoucement
  const { enqueueSnackbar } = useSnackbar();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  //redirect form
  const history  = useHistory();
  const handleForm = ()=>{
      const dataForm = {
          id : khachhangId,
          name : name.current.value,
          email : email.current.value,
          username : email.current.value,
          password : password.current.value
      }
      const sendResquest = userApi.update(dataForm);
      history.push('/Admin/khachhang');
      enqueueSnackbar("Cập nhật thành công", {variant : "success"});
  }
  return (
    <div>
      <div className="wrapper">
        {/* SideBar */}
        <Sidebar />
        {/* End - SideBar */}
        <div className="wapper-content">
          {/* ---------------------Header----------------- */}
          <AdHeader />
          {/* ---------------------End-Header------------- */}

          {/* --------------------Home-------------------- */}

          <div className="admin-update-navbar">
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachhang">Danh sách khách hàng</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="#">Cập nhật khách hàng</Link>
          </div>

          <div className="update-ks">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="nam-ks">Tên khách hàng</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.name}
                  name="name-ks"
                  // onChange={handleNameKS}
                  ref={name}
                />
                <br />
                <label htmlFor="diadiem-ks">Email</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.email}
                  name="diadiem-ks"
                  ref={email}
                  // onChange={handleLocationKS}
                />
                <br />

                <label htmlFor="gia-ks">Password</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.password}
                  name="gia-ks"
                  ref={password}
                  // onChange={handlePriceKS}
                />
                <br />
                

                <button type="submit" onClick={handleForm} > CẬP NHẬT</button>
              </div>
            </div>
          </div>

          {/* --------------------End-Home---------------- */}

          {/* --------------------Footer------------------ */}

          <AdFooter />

          {/* -------------------End-Footer--------------- */}
        </div>
      </div>
    </div>
  );
}

export default UpdateKhachHang;
