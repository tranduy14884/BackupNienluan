import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Room from "../Room";
ListRoom.propTypes = {
  listRoom: PropTypes.array,
};

function ListRoom(props) {
  const { listRoom } = props;
  // console.log(listRoom);
  return (
    <>
      <div className="admin-khachsan-navbar">
        <div>
          <Link to="/Admin">Admin</Link>
          <span>
            <i class="fas fa-arrow-right"></i>
          </span>
          <Link to="/Admin/khachsan">Danh sách khách sạn</Link>
          <span>
            <i class="fas fa-arrow-right"></i>
          </span>
          <Link to="#">Danh sách phòng</Link>

        </div>
        <div>
          <Link to="/Admin/khachsan/phong/them">
            <button>Thêm khách sạn </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="render-list-hotel">
          <table>
            <thead>
              <th>STT</th>
              <th>Tên phòng</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Khuyến mãi</th>
              <th>Số giường</th>
              <th>Tùy chọn</th>
            </thead>
            <tbody>
              {
                  listRoom.map((item) => {
                    return (
                     <Room room={item} key={item.id}/>
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

export default ListRoom;
