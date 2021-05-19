import React from "react";
import PropTypes from "prop-types";
import AdHome from "./Components/AdHome";
import AdFooter from "./Components/AdFooter";
import AdHeader from "./Components/AdHeader";
import Sidebar from "./Components/Sidebar";
import "./style.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
Admin.propTypes = {};

function Admin(props) {
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
            <AdHome />
            {/* --------------------End-Home---------------- */}

            {/* --------------------Footer------------------ */}
            <AdFooter />

            {/* -------------------End-Footer--------------- */}
          </div>
        </div>
      
    </div>
  );
}

export default Admin;
