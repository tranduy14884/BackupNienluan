import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Sidebar from "../../../../../../../../Components/Sidebar";
import AdHeader from "../../../../../../../../Components/AdHeader";
import AdFooter from "../../../../../../../../Components/AdFooter";
import "./style.css";
import productApi from "../../../../../../../../../api/productApi";
import categoryApi from "../../../../../../../../../api/categoryApi";
import { set } from "react-hook-form";
UpdateKhachSan.propTypes = {};

function UpdateKhachSan(props) {
  const math = useRouteMatch();
  const {
    params: { khachsanId },
  } = math;
  //get data from api
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await productApi.get(khachsanId);
      setData(dataApi);
    };
    fetchData();
  }, []);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await categoryApi.getAll();
      setCategory(dataApi);
    };
    fetchData();
  }, []);

  //format number
  const formatNumber = new Intl.NumberFormat("es");
  //custom change img
 
  
  //hanlde form
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [available, setAvailable] = useState();
  const [categoryId, setCategoryId] = useState();
  const [thumnail, setThumnail] = useState();
  const handleChangeImg = (e) => {
    setThumnail(URL.createObjectURL(e.target.files[0]));
  };
  const handleNameKS = (e) => {
    setName(e.target.value);
  };
  const handleLocationKS = (e) => {
    setLocation(e.target.value);
  };
  const handlePriceKS = (e) =>{
    setPrice(e.target.value);
  }
  const handleDiscountKS = (e)=>{
    setDiscount(e.target.value);
  }
  const handleAvailableKS = (e)=>{
    setAvailable(e.target.value);
  }
  const handleCategoryKS = (e)=>{
    setCategoryId(e.target.value);
    // console.log(e.target.value);
  }

 
  const handleForm = () => {
    console.log(categoryId);
  };
  // console.log(category);
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

          <div>
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Danh sách khách sạn</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Chinh Sua khách sạn</Link>
          </div>

          <div className="update-ks">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="nam-ks">Tên khách sạn</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.title}
                  name="name-ks"
                  onChange={handleNameKS}
                />
                <br />
                <label htmlFor="diadiem-ks">Địa điểm</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.location}
                  name="diadiem-ks"
                  onChange={handleLocationKS}
                />
                <br />

                <label htmlFor="gia-ks">Giá</label>
                <br />
                <input type="text" defaultValue={data.price} name="gia-ks" onChange={handlePriceKS}/>
                <br />
                <label htmlFor="khuyenmai-ks">Khuyến mãi</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.discount}
                  name="khuyenmai-ks"
                  onChange={handleDiscountKS}
                />
                <br />
                <label htmlFor="soluong-ks">Số lượng</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.available}
                  name="soluong-ks"
                  onChange={handleAvailableKS}
                />
                <br />
              </div>
              <div className="col-md-6">
                <label htmlFor="vitri-ks">Tinh thanh &nbsp;</label>

                <select name="vitri-ks"  onChange={handleCategoryKS}>
                  {category.map((item) => {
                    return <option key={item.id} value={`${item.id}`}>{item.name}</option>;
                  })}
                  {/* <option  value='3'>3</option>
                  <option  value='2'>2</option>
                  <option  value='1'>1</option>
                  <option  value='0'>0</option> */}
                </select>
                <br />
                <br />
                <label htmlFor="hinhanh-ks">Hình ảnh</label>
                <br />
                {typeof thumnail === "undefined" && (
                  <input
                    type="image"
                    src={data.thumnailUrl}
                    alt="Submit"
                    width="100"
                    height="440"
                  />
                )}
                {typeof thumnail !== "undefined" && (
                  <input
                    type="image"
                    src={thumnail}
                    alt="Submit"
                    width="100"
                    height="440"
                    accept="image/*"
                  />
                )}

                <input type="file" onChange={handleChangeImg} />
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

export default UpdateKhachSan;
