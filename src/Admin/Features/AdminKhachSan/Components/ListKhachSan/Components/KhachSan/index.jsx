import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

KhachSan.propTypes = {
  khachsan: PropTypes.object,
};

function KhachSan(props) {
  const { khachsan } = props;
  return (
    <tr key={khachsan.id}>
      <td>{khachsan.id}</td>
      <td>{khachsan.title}</td>
      <td>
        <img src={khachsan.thumnailUrl} alt="#" />
      </td>
      <td>{khachsan.location}</td>
      <td>{khachsan.price}</td>
      <td>{khachsan.discount}</td>
      <td>{khachsan.available}</td>
      <td>
        <span>
          <Link to={`/Admin/khachsan/update/${khachsan.id}`}>Sửa</Link>
        </span>
        <span>
          <Link to="#">Xóa</Link>
        </span>
      </td>
    </tr>
  );
}

export default KhachSan;
