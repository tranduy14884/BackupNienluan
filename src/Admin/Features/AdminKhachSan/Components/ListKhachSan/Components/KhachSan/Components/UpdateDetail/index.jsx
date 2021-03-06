import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../../../../../../../Components/Sidebar";
import AdHeader from "../../../../../../../../Components/AdHeader";
import AdFooter from "../../../../../../../../Components/AdFooter";
import detailApi from "../../../../../../../../../api/detailApi";
import { useHistory, useRouteMatch } from "react-router";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import "./style.css";
UpdateDetail.propTypes = {};

function UpdateDetail(props) {
  //get data from api
  const math = useRouteMatch();
  const {
    params: { detailId },
  } = math;
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await detailApi.get(detailId);
      setData(dataApi);
    };
    fetchData();
  }, []);
  //set img
  const [image1, setImage1] = useState("");
  const handleChangeImg1 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage1(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image2, setImage2] = useState("");
  const handleChangeImg2 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage2(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image3, setImage3] = useState("");
  const handleChangeImg3 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage3(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image4, setImage4] = useState("");
  const handleChangeImg4 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage4(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image5, setImage5] = useState("");
  const handleChangeImg5 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage5(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image6, setImage6] = useState("");
  const handleChangeImg6 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage6(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image7, setImage7] = useState("");
  const handleChangeImg7 = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage7(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const { enqueueSnackbar } = useSnackbar();
  const name = createRef();
  const location = createRef();
  const description = createRef();
  const thumnailUrl1 = createRef();
  const thumnailUrl2 = createRef();
  const thumnailUrl3 = createRef();
  const thumnailUrl4 = createRef();
  const thumnailUrl5 = createRef();
  const thumnailUrl6 = createRef();
  const thumnailUrl7 = createRef();
  const history = useHistory();
  const handleForm = () => {
    const dataForm = {
      id : data.id,
      name : name.current.value,
      location : location.current.value,
      description : description.current.value,
      thumnailUrl1 : thumnailUrl1.current.src,
      thumnailUrl2 : thumnailUrl2.current.src,
      thumnailUrl3 : thumnailUrl3.current.src,
      thumnailUrl4 : thumnailUrl4.current.src,
      thumnailUrl5 : thumnailUrl5.current.src,
      thumnailUrl6 : thumnailUrl6.current.src,
      thumnailUrl7 : thumnailUrl7.current.src,
    };
    // console.log(dataForm);
     history.push(`/Admin/khachsan/chitietkhachsan/${data.productID}`);
    const sendRequest =  detailApi.update(dataForm);

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
            <Link to="/Admin/khachsan">Kh??ch s???n</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="#">C???p nh???t chi ti???t kh??ch s???n</Link>
          </div>

          <div className="update-ks">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="nam-ks">T??n kh??ch s???n</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.name}
                  name="name-ks"
                  // onChange={handleNameKS}
                  ref={name}
                />
                <br />
                <label htmlFor="nam-ks">V??? tr??</label>
                <br />
                <input
                  type="text"
                  defaultValue={data.location}
                  name="location-ks"
                  // onChange={handleNameKS}
                  ref={location}
                />
                <br />
                <label htmlFor="nam-ks">M?? t???</label>
                <br />
                <textarea
                  rows="20"
                  cols="70"
                  defaultValue={data.description}
                  name="description-ks"
                  // onChange={handleNameKS}
                  ref={description}
                />
                <br />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 1</label>
                    <br />
                    {image1 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl1}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl1}
                      />
                    )}
                    {image1 !== "" && (
                      <input
                        type="image"
                        src={image1}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl1}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg1} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 2</label>
                    <br />
                    {image2 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl2}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl2}
                      />
                    )}
                    {image2 !== "" && (
                      <input
                        type="image"
                        src={image2}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl2}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg2} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 3</label>
                    <br />
                    {image3 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl3}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl3}
                      />
                    )}
                    {image3 !== "" && (
                      <input
                        type="image"
                        src={image3}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl3}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg3} />

                    <br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 4</label>
                    <br />
                    {image4 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl4}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl4}
                      />
                    )}
                    {image4 !== "" && (
                      <input
                        type="image"
                        src={image4}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl4}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg4} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 5</label>
                    <br />
                    {image5 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl5}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl5}
                      />
                    )}
                    {image5 !== "" && (
                      <input
                        type="image"
                        src={image5}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl5}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg5} />

                    <br />
                  </div>
                  <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 6</label>
                    <br />
                    {image6 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl6}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl6}
                      />
                    )}
                    {image6 !== "" && (
                      <input
                        type="image"
                        src={image6}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl6}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg6} />

                    <br />
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <br />
                    <label htmlFor="hinhanh-ks">H??nh ???nh 7</label>
                    <br />
                    {image7 === "" && (
                      <input
                        type="image"
                        src={data.thumnailUrl7}
                        alt="Submit"
                        width="120"
                        height="120"
                        ref={thumnailUrl7}
                      />
                    )}
                    {image7 !== "" && (
                      <input
                        type="image"
                        src={image7}
                        alt="Submit"
                        width="120"
                        height="120"
                        accept="image/*"
                        ref={thumnailUrl7}
                      />
                    )}
                    <input type="file" onChange={handleChangeImg7} />

                    <br />
                  </div>
                </div>
                <br />

                <button type="submit" onClick={handleForm}>Submit</button>
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

export default UpdateDetail;
