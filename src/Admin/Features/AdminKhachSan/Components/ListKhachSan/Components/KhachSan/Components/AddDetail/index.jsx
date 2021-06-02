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
import Detail from "../Detail";
import detailApi from "../../../../../../../../../api/detailApi";
AddDetail.propTypes = {
    
};

function AddDetail(props) {
    //set img
//   const [image, setImage] = useState('');
//   const [isUpload , setIsUpload] = useState(false);
//   const handleChangeImg = (e) => {
//     if(e.target.files[0] && e.target.files)
//     {
//         let reader = new FileReader();
//         reader.onload = (e)=>{
//             setImage(e.target.result);
//             setIsUpload(true);
//         }
//         reader.readAsDataURL(e.target.files[0]);
//     }
//   };
  //set data form
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  //validate form
  const schema = yup.object().shape({
    nameks: yup.string().required("Vui lòng nhập vào trường này"),
    vitriks: yup.string().required("Vui lòng nhập vào trường này"),
    motaks: yup.string().required("Vui lòng nhập vào trường này"),
    
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
  //set img
  const [image1, setImage1] = useState("");
  const handleChangeImg1 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage1(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image2, setImage2] = useState("");
  const handleChangeImg2 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage2(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image3, setImage3] = useState("");
  const handleChangeImg3 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage3(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image4, setImage4] = useState("");
  const handleChangeImg4 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage4(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image5, setImage5] = useState("");
  const handleChangeImg5 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage5(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image6, setImage6] = useState("");
  const handleChangeImg6 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage6(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image7, setImage7] = useState("");
  const handleChangeImg7 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage7(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const name = createRef();
  const location = createRef();
  const description = createRef();

  // console.log(khachsanId);
  const onSubmit = (data) => {
      try {
        const dataForm = {
            productID : khachsanId,
            name : data.nameks,
            location : data.vitriks,
            description : data.motaks,
            thumnailUrl1 : image1,
            thumnailUrl2 : image2,
            thumnailUrl3 : image3,
            thumnailUrl4 : image4,
            thumnailUrl5 : image5,
            thumnailUrl6 : image6,
            thumnailUrl7 : image7,
            
          };
          // console.log(dataForm);
          if (dataForm.thumnailUrl1 === "" || dataForm.thumnailUrl2 === "" || dataForm.thumnailUrl3 === "" ||
          dataForm.thumnailUrl4 === "" || dataForm.thumnailUrl6 === "" || dataForm.thumnailUrl7 === "" || 
          dataForm.thumnailUrl5 === "") {
            enqueueSnackbar("Vui lòng thêm đầy đủ hình ảnh!!!", {
              variant: "error",
            });
          } else {
              const requestAdd = detailApi.add(dataForm);
              history.push(`/Admin/khachsan/chitietkhachsan/${khachsanId}`);
            enqueueSnackbar("Add success !!!", { variant: "success" });
          }
      } catch (error) {
          console.log(error);
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
                    <label htmlFor="nameks">Tên khách sạn</label>
                    <br />
                    <input {...register("nameks")} />
                    <p className="error-form-add-product">
                      {errors.nameks?.message}
                    </p>
                    <label htmlFor="vitriks">Vị trí</label>
                    <br />
                    <input {...register("vitriks")} />
                    <p className="error-form-add-product">
                      {errors.vitriks?.message}
                    </p>
                    <label htmlFor="motaks">Mô tả</label>
                    <br />
                    <input {...register("motaks")}/>
                    <p className="error-form-add-product">
                      {errors.motaks?.message}
                    </p>
  
                    
                  </div>
                  <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 1</label>
                    <br />
                   
                   
                      <input
                        type="image"
                        src={image1}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                     
                      />
                  
                    <input type="file" onChange={handleChangeImg1} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 2</label>
                    <br />
                  
                    
                      <input
                        type="image"
                        src={image2}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                      
                      />
                    
                    <input type="file" onChange={handleChangeImg2} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 3</label>
                    <br />
                
                   
                      <input
                        type="image"
                        src={image3}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                       
                      />
                   
                    <input type="file" onChange={handleChangeImg3} />

                    <br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 4</label>
                    <br />
                
                    
                      <input
                        type="image"
                        src={image4}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        
                      />
                    
                    <input type="file" onChange={handleChangeImg4} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 5</label>
                    <br />
                   
                  
                      <input
                        type="image"
                        src={image5}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                      
                      />
                    
                    <input type="file" onChange={handleChangeImg5} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 6</label>
                    <br />
                 
                 
                      <input
                        type="image"
                        src={image6}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                      
                      />
                    
                    <input type="file" onChange={handleChangeImg6} />

                    <br />
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">Hình ảnh 7</label>
                    <br />
                   
                 
                      <input
                        type="image"
                        src={image7}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        
                      />
                    
                    <input type="file" onChange={handleChangeImg7} />

                    <br />
                  </div>
                </div>
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

export default AddDetail;