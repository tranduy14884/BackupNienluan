import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Sidebar from "../../Components/Sidebar";
import AdHeader from "../../Components/AdHeader";
import AdHome from "../../Components/AdHome";
import AdFooter from "../../Components/AdFooter";
import userApi from "../../../api/userApi";
import ListKhachHang from "./ListKhachHang";
import productApi from "../../../api/productApi";

function AdminKhachHang(props) {
  //get list customer
  const [listKhachHang, setListKhachHang] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await userApi.getAll();
      setListKhachHang(dataApi);
    };
    fetchData();
  }, []);
  const [listHotel, setListHotel] = useState([]);
  useEffect(() => {
    const getListHotel = async () => {
      const data = await productApi.getAll();
      setListHotel(data);
    };
    getListHotel();
  }, []);

  //  console.log(listKhachHang);
  // console.log(window.location.pathname);
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
          <ListKhachHang listKhachHang={listKhachHang} listHotel={listHotel} />
          {/* --------------------End-Home---------------- */}

          {/* --------------------Footer------------------ */}
          <AdFooter />

          {/* -------------------End-Footer--------------- */}
        </div>
      </div>
    </div>
  );
}

export default AdminKhachHang;
