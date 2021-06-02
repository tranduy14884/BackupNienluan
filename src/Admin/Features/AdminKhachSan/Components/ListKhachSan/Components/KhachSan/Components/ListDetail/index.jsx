import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from "react-router-dom";
import Detail from '../Detail';

ListDetail.propTypes = {
    
};

function ListDetail(props) {
    const { listDetail } = props;
    const match = useRouteMatch();
    const {params : {khachsanId}} = match;
    console.log(listDetail);
    return (
        <>
      <div className="admin-khachsan-navbar">
        <div>
          <Link to="/Admin">Admin</Link>
          <span>
            <i class="fas fa-arrow-right"></i>
          </span>
          <Link to="/Admin/khachsan">Khách Sạn</Link>
          <span>
            <i class="fas fa-arrow-right"></i>
          </span>
          <Link to="#">Chi tiết khách sạn</Link>
         
        </div>
        <div>
          <Link to={`/Admin/khachsan/phong/them/${khachsanId}`}>
            <button>Thêm chi tiết </button>
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <div className="render-list-hotel">
          <table>
            <thead>
              <th>STT</th>
              <th>Tên khách sạn</th>
              <th>Địa điểm</th>
              <th>Mô tả</th>
              <th>Hình ảnh 1</th>
              <th>Hình ảnh 2</th>
              <th>Hình ảnh 3</th>
              <th>Hình ảnh 4</th>
              <th>Hình ảnh 5</th>
              <th>Hình ảnh 6</th>
              <th>Hình ảnh 7</th>
              <th>Tùy chọn</th>
            </thead>
            <tbody>
              {
                  listDetail.map((item) => {
                    return (
                     <Detail detail={item} key={item.id}/>
                    );
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
    );
}

export default ListDetail;