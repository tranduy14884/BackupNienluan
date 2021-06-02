import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../../../../../../../Components/Sidebar";
import AdHeader from "../../../../../../../../Components/AdHeader";
import AdFooter from "../../../../../../../../Components/AdFooter";
import { useHistory, useRouteMatch } from "react-router";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import roomApi from "../../../../../../../../../api/roomApj";

UpdateRoom.propTypes = {};

function UpdateRoom(props) {
  //get data from api
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await roomApi.get(roomId);
      setData(dataApi);
    };
    fetchData();
  }, []);
  //custom change img

  // const [thumnail, setThumnail] = useState();
  // const handleChangeImg = (e) => {
  //   setThumnail(URL.createObjectURL(e.target.files[0]));
  // };

  const [image, setImage] = useState("");
  const handleChangeImg = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const math = useRouteMatch();
  const {
    params: { roomId },
  } = math;
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const name = createRef();
  const price = createRef();
  const thumnailUrl = createRef();
  const discount = createRef();
  const available = createRef();
  const handleForm = () => {
    const dataForm = {
      id: data.id,
      name: name.current.value,
      oldPrice: parseInt(price.current.value),
      discount: parseFloat(discount.current.value),
      thumnailUrl: thumnailUrl.current.src,
      numberBed: parseInt(available.current.value),
    };
     history.push(`/Admin/khachsan/room/${data.productId}`);
    const sendRequest =  roomApi.update(dataForm);

    enqueueSnackbar("Update success", { variant: "success" });
  };
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

          <div className="admin-update-navbar">
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Danh sách khách sạn</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="#">Cập nhật khách sạn</Link>
          </div>

          <div className="update-ks">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="nam-ks">Tên phòng</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.name}
                  name="name-ks"
                  // onChange={handleNameKS}
                  ref={name}
                />
                <br />
                <label htmlFor="gia-ks">Giá</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.oldPrice}
                  name="gia-ks"
                  ref={price}
                  // onChange={handlePriceKS}
                />
                <br />
                <label htmlFor="khuyenmai-ks">Khuyến mãi</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.discount}
                  name="khuyenmai-ks"
                  ref={discount}
                  // onChange={handleDiscountKS}
                />
                <br />
                <label htmlFor="soluong-ks">Số giường</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.numberBed}
                  name="soluong-ks"
                  ref={available}
                  //onChange={handleAvailableKS}
                />
                <br />
              </div>
              <div className="col-md-6">
                <br />
                <label htmlFor="hinhanh-ks">Hình ảnh</label>
                <br />
                {image === "" && (
                  <input
                    type="image"
                    src={data.thumnailUrl}
                    alt="Submit"
                    width="100"
                    height="440"
                    ref={thumnailUrl}
                  />
                )}
                {image !== "" && (
                  <input
                    type="image"
                    src={image}
                    alt="Submit"
                    width="100"
                    height="440"
                    accept="image/*"
                    ref={thumnailUrl}
                  />
                )}

                <input type="file" onChange={handleChangeImg} />
                <br />
                <br />

                <input type="submit" onClick={handleForm} />
              </div>
            </div>
          </div>

          {/* --------------------End-Home---------------- */}

          {/* --------------------Footer------------------ */}

          <AdFooter />

          {/* -------------------End-Footer--------------- */}
        </div>
      </div>
    </div>
  );
}

export default UpdateRoom;
