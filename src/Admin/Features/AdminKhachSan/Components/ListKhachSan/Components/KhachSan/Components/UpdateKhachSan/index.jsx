import React, { createRef, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import categoryApi from "../../../../../../../../../api/categoryApi";
import productApi from "../../../../../../../../../api/productApi";
import AdFooter from "../../../../../../../../Components/AdFooter";
import AdHeader from "../../../../../../../../Components/AdHeader";
import Sidebar from "../../../../../../../../Components/Sidebar";
import "./style.css";
import { useSnackbar } from "notistack";
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

  const [thumnail, setThumnail] = useState();
  const handleChangeImg = (e) => {
    setThumnail(URL.createObjectURL(e.target.files[0]));
  };
  // Anoucement success
  const {enqueueSnackbar} = useSnackbar();
  const history = useHistory();
  const name = createRef();
  const price = createRef();
  const thumnailUrl = createRef();
  const location = createRef();
  const discount = createRef();
  const available = createRef();
  const categoryId = createRef();
  const handleForm = () => {
   
    const dataForm = {
      id: data.id,
      title: name.current.value,
      location: location.current.value,
      price: parseInt(price.current.value),
      discount: parseFloat(discount.current.value),
      thumnailUrl: thumnailUrl.current.src,
      categoryId: parseInt(categoryId.current.value),
      available: parseInt(available.current.value),
    };
    console.log(dataForm);
    history.push('/Admin/khachsan');
    const sendRequest =  productApi.update(dataForm);
    
    enqueueSnackbar('Update success', {variant : 'success'});
    
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

          <div className="admin-update-navbar">
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Danh sách khách sạn</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="#">Cập nhật khách sạn</Link>
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
                  // onChange={handleNameKS}
                  ref={name}
                />
                <br />
                <label htmlFor="diadiem-ks">Địa điểm</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.location}
                  name="diadiem-ks"
                  ref={location}
                  // onChange={handleLocationKS}
                />
                <br />

                <label htmlFor="gia-ks">Giá</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.price}
                  name="gia-ks"
                  ref={price}
                  // onChange={handlePriceKS}
                />
                <br />
                <label htmlFor="khuyenmai-ks">Khuyến mãi</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.discount}
                  name="khuyenmai-ks"
                  ref={discount}
                  // onChange={handleDiscountKS}
                />
                <br />
                <label htmlFor="soluong-ks">Số lượng</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.available}
                  name="soluong-ks"
                  ref={available}
                  //onChange={handleAvailableKS}
                />
                <br />
              </div>
              <div className="col-md-6">
                <label htmlFor="vitri-ks">Tinh thanh &nbsp;</label>

                <select name="vitri-ks" ref={categoryId}>
                  {category.map((item) => {
                    return (
                      <option key={item.id} value={`${item.id}`}>
                        {item.name}
                      </option>
                    );
                  })}
             
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
                    ref={thumnailUrl}
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
                    ref={thumnailUrl}
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
