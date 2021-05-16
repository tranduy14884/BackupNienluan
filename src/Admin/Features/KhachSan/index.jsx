import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.css";
import productApi from '../../../api/productApi';
import ListKhachSan from './Components/ListKhachSan';
import AdHeader from '../../Components/AdHeader';
import AdFooter from '../../Components/AdFooter';
import Sidebar from '../../Components/Sidebar';


function AdminKhachSan(props) {
    //get data from api
const [listHotel, setListHotel] = useState([]);
useEffect(()=>{
    const getListHotel = async()=>{
        const data = await productApi.getAll();
        setListHotel(data);
    }
    getListHotel();
},[]);
console.log(listHotel);
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

            <ListKhachSan listHotel={listHotel} />
            {/* --------------------End-Home---------------- */}

            {/* --------------------Footer------------------ */}
           

            <AdFooter />

            {/* -------------------End-Footer--------------- */}
          </div>
        </div>
      </div>
    );
}

export default AdminKhachSan;