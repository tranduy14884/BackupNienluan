import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
function Sidebar(props) {
    return (
            <ul className="wrapper-sidebar">
                <li><Link to="/trangchu"><span><i className="fas fa-laugh-wink"></i>Booking AD</span></Link></li>
                <li><Link to="/trangchu"><span><i className="fas fa-fw fa-folder"></i>Địa điểm</span></Link></li>
                <li><Link to="/trangchu"><span><i className="fas fa-fw fa-table"></i>Đơn hàng</span></Link></li>
            </ul>
    );
}

export default Sidebar;