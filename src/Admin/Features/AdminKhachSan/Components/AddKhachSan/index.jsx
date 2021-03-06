import React, { createRef, useEffect, useState } from "react";
import { useHistory } from "react-router";
import categoryApi from "../../../../../api/categoryApi";
import AdHeader from "../../../../Components/AdHeader";
import Sidebar from "../../../../Components/Sidebar";
import { Link } from "react-router-dom";
import AdFooter from "../../../../Components/AdFooter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";
import { useSnackbar } from "notistack";
import productApi from "../../../../../api/productApi";

function AdminThemKhachSan(props) {
  //custom thumnailUrl
  const [thumnail, setThumnail] = useState();
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

  //set data form
  const history = useHistory();

  //get category from api
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await categoryApi.getAll();
      setCategory(dataApi);
    };
    fetchData();
  }, []);
  const { enqueueSnackbar } = useSnackbar();
  const handleForm = () => {
    // const dataForm = {
    //   title: name.current.value,
    //   location: location.current.value,
    //   price: parseInt(price.current.value),
    //   discount: parseFloat(discount.current.value),
    //   thumnailUrl: thumnailUrl.current.src,
    //   categoryId: parseInt(categoryId.current.value),
    //   available: parseInt(available.current.value),
    //   rankNumber: 0,
    //   rankPoint: 0,
    // };
    // if (
    //   name.current.value === "" ||
    //   location.current.value === "" ||
    //   price.current.value === "" ||
    //   discount.current.value === "" ||
    //   available.current.value === ""
    // ) {
    //   enqueueSnackbar("Data invalid!!!", { variant: "error" });
    // } else {
    //   const requestAdd = productApi.add(dataForm);
    //   history.push("/Admin/khachsan");
    //   enqueueSnackbar("Add success !!!", { variant: "success" });
    // }
    //console.log(dataForm);
  };
  //validate form
  const schema = yup.object().shape({
    nameks: yup.string().required("Vui l??ng nh???p v??o tr?????ng n??y"),
    diadiemks: yup.string().required("Vui l??ng nh???p v??o tr?????ng n??y"),
    giaks: yup
      .number()
      .typeError("Vui l??ng nh???p s???")
      .integer()
      .required("Vui l??ng nh???p v??o tr?????ng n??y"),
    khuyenmaiks: yup
      .number()
      .typeError("Vui l??ng nh???p s???")
      .required("Vui l??ng nh???p v??o tr?????ng n??y"),
    soluongks: yup
      .number()
      .typeError("Vui l??ng nh???p s???")
      .integer()
      .required("Vui l??ng nh???p v??o tr?????ng n??y"),
    categoryId: yup
      .number()
      .typeError("Vui l??ng ch???n 1 trong c??c v??? tr??")
      .required("Vui l??ng ch???n "),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = (data) => {
    const dataForm = {
      title: data.nameks,
      location: data.diadiemks,
      price: data.giaks,
      discount: data.khuyenmaiks,
      thumnailUrl: image,
      categoryId: parseInt(data.categoryId),
      available: data.soluongks,
      rankNumber: 0,
      rankPoint: 0,
    };
    if (typeof dataForm.thumnailUrl === "undefined") {
      enqueueSnackbar("Vui l??ng th??m h??nh ???nh cho kh??ch s???n!!!", {
        variant: "error",
      });
    } else {
      const requestAdd = productApi.add(dataForm);
      history.push("/Admin/khachsan");
      enqueueSnackbar("Add success !!!", { variant: "success" });
    }
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

          <div className="admin-themkhachsan-navbar">
            <Link to="/Admin">Admin</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan">Danh s??ch kh??ch s???n</Link>
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
            <Link to="/Admin/khachsan/them">Th??m kh??ch s???n</Link>
          </div>

          <div className="update-ks">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="nameks">T??n kh??ch s???n</label>
                  <br />
                  <input {...register("nameks")} />
                  <p className="error-form-add-product">
                    {errors.nameks?.message}
                  </p>
                  <label htmlFor="diadiemks">?????a ??i???m</label>
                  <br />
                  <input {...register("diadiemks")} />
                  <p className="error-form-add-product">
                    {errors.diadiemks?.message}
                  </p>
                  <label htmlFor="giaks">Gi??</label>
                  <br />
                  <input {...register("giaks")} />
                  <p className="error-form-add-product">
                    {errors.giaks?.message}
                  </p>
                  <label htmlFor="khuyenmaiks">Khuy???n m??i</label>
                  <br />
                  <input {...register("khuyenmaiks")} />
                  <p className="error-form-add-product">
                    {errors.khuyenmaiks?.message}
                  </p>
                  <label htmlFor="soluongks">S??? l?????ng</label>
                  <br />
                  <input {...register("soluongks")} />
                  <p className="error-form-add-product">
                    {errors.soluongks?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="vitriks">Tinh thanh &nbsp;</label>

                  <select {...register("categoryId")}>
                    {category.map((item) => {
                      return (
                        <option key={item.id} value={`${item.id}`}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <p className="error-form-add-product">
                    {errors.categoryId?.message}
                  </p>

                  <label htmlFor="hinhanhks">H??nh ???nh</label>
                  <br />

                  <input
                    type="image"
                    src={image}
                    alt="Submit"
                    width="100"
                    height="440"
                    accept="image/*"
                  />

                  <input type="file" onChange={handleChangeImg} />

                  <br />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>

            {/* <label htmlFor="nameks">T??n kh??ch s???n</label>
                <br />
                <input type="text" name="nameks" ref={name} />
                <p>{errors.nameks?.message}</p>
                <br />
                <label htmlFor="diadiemks">?????a ??i???m</label>
                <br />
                <input type="text" name="diadiemks" ref={location} />
                <br />

                <label htmlFor="giaks">Gi??</label>
                <br />
                <input type="text" name="giaks" ref={price} />
                <br />
                <label htmlFor="khuyenmaiks">Khuy???n m??i</label>
                <br />
                <input type="text" name="khuyenmaiks" ref={discount} />
                <br />
                <label htmlFor="soluongks">S??? l?????ng</label>
                <br />
                <input type="text" name="soluongks" ref={available} />
                <br />
              </div>
              <div className="col-md-6">
                <label htmlFor="vitriks">Tinh thanh &nbsp;</label>

                <select name="vitriks" ref={categoryId}>
                  {category.map((item) => {
                    return (
                      <option key={item.id} value={`${item.id}`}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <br />
                <br />
                <label htmlFor="hinhanhks">H??nh ???nh</label>
                <br />
                {typeof thumnail === "undefined" && (
                  <input
                    type="image"
                    src={""}
                    alt="Submit"
                    width="100"
                    height="440"
                    ref={thumnailUrl}
                  />
                )}
                {typeof thumnail !== "undefined" && (
                  <input
                    type="image"
                    src={thumnail}
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

                <button type="submit">
                  {" "}
                  Add
                </button> */}
            {/* </div> */}
            {/* </div> */}
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

export default AdminThemKhachSan;
