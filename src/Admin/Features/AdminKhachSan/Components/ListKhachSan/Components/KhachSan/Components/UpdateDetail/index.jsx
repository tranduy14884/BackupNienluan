import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../../../../../../../../Components/Sidebar";
import AdHeader from "../../../../../../../../Components/AdHeader";
import AdFooter from "../../../../../../../../Components/AdFooter";
import detailApi from '../../../../../../../../../api/detailApi';
import { useHistory, useRouteMatch } from "react-router";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import './style.css';
UpdateDetail.propTypes = {
    
};

function UpdateDetail(props) {
     //get data from api
     const math = useRouteMatch();
     const {
       params: { detailId },
     } = math;
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await detailApi.get(detailId);
      setData(dataApi);
    };
    fetchData();
  }, []);
   //set img
   const [image1, setImage] = useState('');
   const [isUpload , setIsUpload] = useState(false);
  const handleChangeImg1 = (e) => {
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
  const { enqueueSnackbar } = useSnackbar();
  const name = createRef();
  const location = createRef();
  const description = createRef();

  const handleForm = () => {
    const dataForm = {
     
    };
    //  history.push(`/Admin/khachsan/room/${data.productId}`);
    // const sendRequest =  roomApi.update(dataForm);

    enqueueSnackbar("Update success", { variant: "success" });
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

          <div className="admin-update-navbar">
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Khách sạn</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="#">Cập nhật chi tiết khách sạn</Link>
          </div>

          <div className="update-ks">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="nam-ks">Tên khách sạn</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.name}
                  name="name-ks"
                  // onChange={handleNameKS}
                  ref={name}
                />
                <br />
                <label htmlFor="nam-ks">Vị trí</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.location}
                  name="location-ks"
                  // onChange={handleNameKS}
                  ref={location}
                />
                <br />
                <label htmlFor="nam-ks">Mô tả</label>
                <br />
                <textarea
                  
                  rows="20"
                  cols="70"
                  defaultValue={data.description}
                  name="description-ks"
                  // onChange={handleNameKS}
                  ref={description}
                />
                <br />
               
              </div>
              <div className="col-md-6">
                <br />
                <label htmlFor="hinhanh-ks">Hình ảnh 1</label>
                <br />
                <input
                      className="img-img-img"
                      type="image"
                      src={image1}
                      alt="Submit"
                      width="50%"
                      height="100"
                      accept="image/*"
                    />
                  <input type="file" onChange={handleChangeImg1} />

                <br />
                <br />

                <input type="submit" onClick={handleForm} />
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

export default UpdateDetail;