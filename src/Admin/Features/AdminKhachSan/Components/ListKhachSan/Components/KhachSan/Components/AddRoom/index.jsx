import React from "react";
import PropTypes from "prop-types";
import AdHeader from "../../../../../../../../Components/AdHeader";
import Sidebar from "../../../../../../../../Components/Sidebar";
import AdFooter from "../../../../../../../../Components/AdFooter";
import { createRef, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import "./style.css";
import { useSnackbar } from "notistack";
import roomApi from "../../../../../../../../../api/roomApj";

AddRoom.propTypes = {};

function AddRoom(props) {
  //set img
  const [image, setImage] = useState('');
  const [isUpload , setIsUpload] = useState(false);
  const handleChangeImg = (e) => {
    if(e.target.files[0] && e.target.files)
    {
        let reader = new FileReader();
        reader.onload = (e)=>{
            setImage(e.target.result);
            setIsUpload(true);
        }
        reader.readAsDataURL(e.target.files[0]);
    }
  };
console.log(isUpload);
  //set data form
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  //validate form
  const schema = yup.object().shape({
    nameks: yup.string().required("Vui lòng nhập vào trường này"),
    giaks: yup
      .number()
      .typeError("Vui lòng nhập số")
      .integer()
      .required("Vui lòng nhập vào trường này"),
    khuyenmaiks: yup
      .number()
      .typeError("Vui lòng nhập số")
      .required("Vui lòng nhập vào trường này"),
    soluongks: yup
      .number()
      .typeError("Vui lòng nhập số")
      .integer()
      .required("Vui lòng nhập vào trường này"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const { listRoom } = props;
  const match = useRouteMatch();
  const {
    params: { khachsanId },
  } = match;
  const onSubmit = (data) => {
    const dataForm = {
      name: data.nameks,
      oldPrice: data.giaks,
      discount: data.khuyenmaiks,
      thumnailUrl: image,
      numberBed: data.soluongks,
      day: 1,
      number: 1,
      productId: khachsanId,
    };
    if (typeof dataForm.thumnailUrl === "undefined") {
      enqueueSnackbar("Vui lòng thêm hình ảnh cho phòng !!!", {
        variant: "error",
      });
    } else {
         const requestAdd = roomApi.add(dataForm);
        history.push(`/Admin/khachsan/room/${khachsanId}`);
      enqueueSnackbar("Add success !!!", { variant: "success" });
    }
  };
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

          <div className="admin-themkhachsan-navbar">
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Danh sách phòng</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan/them">Thêm phòng</Link>
          </div>

          <div className="update-ks">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="nameks">Tên phòng</label>
                  <br />
                  <input {...register("nameks")} />
                  <p className="error-form-add-product">
                    {errors.nameks?.message}
                  </p>

                  <label htmlFor="giaks">Giá</label>
                  <br />
                  <input {...register("giaks")} />
                  <p className="error-form-add-product">
                    {errors.giaks?.message}
                  </p>
                  <label htmlFor="khuyenmaiks">Khuyến mãi</label>
                  <br />
                  <input {...register("khuyenmaiks")} />
                  <p className="error-form-add-product">
                    {errors.khuyenmaiks?.message}
                  </p>
                  <label htmlFor="soluongks">Số giường</label>
                  <br />
                  <input {...register("soluongks")} />
                  <p className="error-form-add-product">
                    {errors.soluongks?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="hinhanhks">Hình ảnh</label>
                  <br />
               
                  <input
                      type="image"
                      src={image}
                      alt="Submit"
                      width="100"
                      height="440"
                      accept="image/*"
                    />
                  <input type="file" onChange={handleChangeImg} />

                  <br />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
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

export default AddRoom;
