import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
ListKhachSan.propTypes = {
  listHotel: PropTypes.array,
};

function ListKhachSan(props) {
  const { listHotel } = props;
  //set pagination
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };
  const [hotelsPerpage, setHotelsPerPage] = useState(8);
  const lastOfIndex = activePage * hotelsPerpage;
  const firstOfIndex = lastOfIndex - hotelsPerpage;
  const [currentListHotel, setCurrentListHotel] = useState([]);
  useEffect(()=>{
    setCurrentListHotel(listHotel.slice(firstOfIndex,lastOfIndex));
  },[listHotel.slice(firstOfIndex,lastOfIndex).length - activePage]);
  console.log(currentListHotel);
  return (
    <>
      <div>
        <Link to="/Admin">Admin</Link>
        <span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <Link to="/Admin/khachsan">Danh sách khách sạn</Link>
      </div>
      <div className="container">
        <div className="render-list-hotel">
          <table>
            <thead>
              <th>STT</th>
              <th>Tên khách sạn</th>
              <th>Hình ảnh</th>
              <th>Địa điểm</th>
              <th>Giá</th>
              <th>Khuyến mãi</th>
              <th>Số phòng</th>
              <th>Tùy chọn</th>
            </thead>
            <tbody>
              {
                currentListHotel.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>
                        <img src={item.thumnailUrl} alt="#" />
                      </td>
                      <td>{item.location}</td>
                      <td>{item.price}</td>
                      <td>{item.discount}</td>
                      <td>{item.available}</td>
                      <td><span><Link to="#">Sửa</Link></span><span><Link to="#">Xóa</Link></span></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="container">
            <div className="pagination">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={hotelsPerpage}
                totalItemsCount={listHotel.length}
                pageRangeDisplayed={Math.ceil(listHotel.length/hotelsPerpage)}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListKhachSan;
