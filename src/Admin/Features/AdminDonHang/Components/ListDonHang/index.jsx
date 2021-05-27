import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import DonHang from '../DonHang';
ListDonHang.propTypes = {
    listDonHang : PropTypes.array,
    handleChangeStatusOrder : PropTypes.func,
};

function ListDonHang(props) {
    const { listDonHang, handleChangeStatusOrder } = props;
    const handleChangeStatus = async (data)=>
    {
        if(handleChangeStatusOrder)
        {
            await handleChangeStatusOrder(data);
        }
    }
    return (
        <>
      <div className="admin-themkhachsan-navbar">
        <Link to="/Admin">Admin</Link>
        <span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <Link to="/Admin/khachhang">Danh sách đơn hàng</Link>
        
         <div className="container">
        <div className="render-list-donhang">
          <table>
            <thead>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Khách sạn</th>
              <th>Phòng</th>
              <th>Ngày đặt phòng</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Tùy chọn</th>
            </thead>
            <tbody>
              {
                listDonHang.map((item) => {
                  return (
                   <DonHang donhang={item} key={item.id} handleChangeStatus={handleChangeStatus}/>
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

export default ListDonHang;