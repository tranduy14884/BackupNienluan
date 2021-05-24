import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import KhachHang from "./KhachHang";
ListKhachHang.propTypes = {
  listKhachHang: PropTypes.array,
  listHotel : PropTypes.array,
};

function ListKhachHang(props) {
  const { listKhachHang , listHotel} = props;
  console.log(listKhachHang);
  return (
    <>
      <div className="admin-themkhachsan-navbar">
        <Link to="/Admin">Admin</Link>
        <span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <Link to="/Admin/khachhang">Danh sách khách hàng</Link>
        {/* <span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <Link to="/Admin/khachhang/update">Chinh Sua khách hàng</Link> */}
         <div className="container">
        <div className="render-list-hotel">
          <table>
            <thead>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Email</th>
             <th>Tùy chọn</th>
            </thead>
            <tbody>
              {
                listKhachHang.map((item) => {
                  return (
                   <KhachHang khachhang={item} key={item.id}/>
                  );
                })}
            </tbody>
          </table>
         
        </div>
      </div>
      </div>
    </>
  );
}

export default ListKhachHang;
