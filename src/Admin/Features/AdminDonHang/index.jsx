import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Sidebar from "../../Components/Sidebar";
import AdHeader from "../../Components/AdHeader";
import AdFooter from "../../Components/AdFooter";
import ListDonHang from "./Components/ListDonHang";
import Order from "../../../api/orderApi";
import productApi from "../../../api/productApi";
AdminDonHang.propTypes = {};

function AdminDonHang(props) {
  //get list don hang
  const [listDonHang, setListDonHang] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await Order.getAll();
      setListDonHang(dataApi);
    };
    fetchData();
  }, []);
  
  //change Order stautus
  const handleChangeStatusOrder = (data) => {
    const newList = [...listDonHang];
    newList.forEach((element) => {
      if (element.id === data.id) {
        element.status = data.status;
        //const reqChangeStatusOrder = Order.update(data);
      }
    });
    setListDonHang(newList);
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
          {/* --------------------End-Home---------------- */}
          <ListDonHang
            listDonHang={listDonHang}
            handleChangeStatusOrder={handleChangeStatusOrder}
          />
          {/* --------------------Footer------------------ */}
          <AdFooter />

          {/* -------------------End-Footer--------------- */}
        </div>
      </div>
    </div>
  );
}

export default AdminDonHang;
