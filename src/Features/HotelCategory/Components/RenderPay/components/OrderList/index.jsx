import React, { useState } from "react";
import PropTypes from "prop-types";
import Order from "../../../../../../api/orderApi";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
OrderList.propTypes = {
  orderList: PropTypes.object,
};

function OrderList(props) {
  const { orderList } = props;
  //xu li cancel
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const hanldeCancel = () => {
    const hanlde = Order.remove(orderList.id);
    enqueueSnackbar("Hủy phòng thành công ", {
      variant: "success",
    });

    return history.push(`/hotel/detail/${orderList.idProduct}`);
  };
  const [orderStatus, setOrderStatus] = useState(orderList.status);
  return (
    <>
      {orderStatus == 0 && (
        <tr key={orderList.id}>
          <td>{orderList.hotelName}</td>
          <td>{orderList.roomNumber} giường đơn</td>
          <td>{orderList.timeReceive}</td>
          <td>{orderList.price}</td>
          <td className="huy" onClick={hanldeCancel}>
            {" "}
            Hủy
          </td>
        </tr>
      )}
    </>
  );
}

export default OrderList;
