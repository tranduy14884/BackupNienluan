import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import categoryApi from '../../../../../api/categoryApi';
import AdHeader from '../../../../Components/AdHeader';
import Sidebar from '../../../../Components/Sidebar';
import { Link } from "react-router-dom";
import AdFooter from '../../../../Components/AdFooter';

import "./style.css";
import { useSnackbar } from 'notistack';
import productApi from '../../../../../api/productApi';
function AdminThemKhachSan(props) {
    //custom thumnailUrl
    const [thumnail, setThumnail] = useState();
    const handleChangeImg = (e) => {
      setThumnail(URL.createObjectURL(e.target.files[0]));
    };

    //set data form
    const history = useHistory();
    const name = createRef();
    const price = createRef();
    const thumnailUrl = createRef();
    const location = createRef();
    const discount = createRef();
    const available = createRef();
    const categoryId = createRef();
    //get category from api
    const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await categoryApi.getAll();
      setCategory(dataApi);
    };
    fetchData();
  }, []);
  const {enqueueSnackbar} = useSnackbar();
  const handleForm = ()=>{
    const dataForm = {
     
        title: name.current.value,
        location: location.current.value,
        price: parseInt(price.current.value),
        discount: parseFloat(discount.current.value),
        thumnailUrl: thumnailUrl.current.src,
        categoryId: parseInt(categoryId.current.value),
        available: parseInt(available.current.value),
        rankNumber : 0,
        rankPoint : 0
      };
      
      if(name.current.value === '' || location.current.value === '' || price.current.value==='' || discount.current.value ===''|| available.current.value === '')
      {
        
        enqueueSnackbar('Data invalid!!!',{variant:'error'});
      }
      else{
        const requestAdd = productApi.add(dataForm);
        history.push('/Admin/khachsan');
        enqueueSnackbar('Add success !!!',{variant:'success'});

      }
      console.log(dataForm);
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

          <div className="admin-themkhachsan-navbar">
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
               
                  name="name-ks"
                  // onChange={handleNameKS}
                  ref={name}
                />
                <br />
                <label htmlFor="diadiem-ks">Địa điểm</label>
                <br />
                <input
                  type="text"
          
                  name="diadiem-ks"
                  ref={location}
                  // onChange={handleLocationKS}
                />
                <br />

                <label htmlFor="gia-ks">Giá</label>
                <br />
                <input
                  type="text"
                 
                  name="gia-ks"
                  ref={price}
                  // onChange={handlePriceKS}
                />
                <br />
                <label htmlFor="khuyenmai-ks">Khuyến mãi</label>
                <br />
                <input
                  type="text"
                  
                  name="khuyenmai-ks"
                  ref={discount}
                  // onChange={handleDiscountKS}
                />
                <br />
                <label htmlFor="soluong-ks">Số lượng</label>
                <br />
                <input
                  type="text"
                  
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
                    src={''}
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

                <button type="submit" onClick={handleForm} > Add</button>
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

export default AdminThemKhachSan;