import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import "./style.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

RenderSearch.propTypes = {
  handleSubmitSearch: PropTypes.func,
};

function RenderSearch(props) {
  const { handleSubmitSearch } = props;

  const [startDate, setStartDate] = useState(new Date());

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitFind = async (data) => {
    console.log(data);
    if (handleSubmitSearch) {
      if (
        typeof data.ngaynhanphong === "undefined" ||
        typeof data.search === "undefined" ||
        typeof data.ngaythue === "undefined"
      ) {
        enqueueSnackbar("Bộ lọc chưa hợp lệ", { variant: "error" });
      } else await handleSubmitSearch(data);
    }
  };
  //set date picker
  const current = new Date();
  let currentDate = "";
  let currentMonth = "";
  let currentYear = "";
  if (current.getDate() < 10) {
    currentDate = `0${current.getDate()}`;
  } else {
    currentDate = `${current.getDate()}`;
  }
  if (current.getMonth() < 10) {
    currentMonth = `0${current.getMonth() + 1}`;
  } else {
    currentMonth = `${current.getDate() + 1}`;
  }
  if (current.getFullYear() < 10) {
    currentYear = `0${current.getFullYear()}`;
  } else {
    currentYear = `${current.getFullYear()}`;
  }
  const currentTime = `${currentYear}-${currentMonth}-${currentDate}`;

  const { handleSubmit, register } = useForm({});
  return (
    <div>
      {/*-------------------- hotel-list-search -----------------*/}
      <div className="hotel-list-search">
        <form onSubmit={handleSubmit(handleSubmitFind)}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <TextField
                {...register("search")}
                label="Tim kiem"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="col-md-2 col-sm-12">
              <TextField
                {...register("ngaynhanphong")}
                id="date"
                label="Ngay nhan phong"
                type="date"
                defaultValue={currentTime}
                InputLabelProps={{
                  shrink: true,
                }}
                className="date-picker"
              />
            </div>
            <div className="col-md-2 col-sm-12">
              <TextField
                {...register("ngaythue")}
                label="So ngay thue"
                variant="outlined"
              />
            </div>

            <button className="btn-search" type="submit">Tìm kiếm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RenderSearch;
