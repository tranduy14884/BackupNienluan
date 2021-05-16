import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";
function Sidebar(props) {
    
   
    return (
            <ul className="wrapper-sidebar">
                <li><Link to="/Admin"><span><i className="fas fa-laugh-wink"></i>Booking AD</span></Link></li>
                <li><Link to="/Admin/khachsan"><span><i className="fas fa-fw fa-folder"></i>Địa điểm</span></Link></li>
                <li><Link to="/Admin/donhang"><span><i className="fas fa-fw fa-table"></i>Đơn hàng</span></Link></li>
                <li><Link to="/Admin/khachhang"><span><i className="fas fa-fw fa-table"></i>Khách hàng</span></Link></li>
            </ul>
    );
}

export default Sidebar;