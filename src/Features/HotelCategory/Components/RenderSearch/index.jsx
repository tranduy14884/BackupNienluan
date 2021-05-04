import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import "./style.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

RenderSearch.propTypes = {
  handleSubmitSearch : PropTypes.func,
};

function RenderSearch(props) {
  const {handleSubmitSearch} = props;
  const [startDate, setStartDate] = useState(new Date());
 
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitFind = async (data) => {
    if(handleSubmitSearch)
    { 
      if(typeof data.ngaynhanphong ==="undefined" || typeof data.search === "undefined" || typeof data.ngaythue === "undefined")
      {
        enqueueSnackbar("Bộ lọc chưa hợp lệ", { variant: "error" });
     
      }
      else await handleSubmitSearch(data);
    }

  };
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
                defaultValue={Date.toString}
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

            <button type="submit">Tìm kiếm</button>
          </div>
        </form>
       
      </div>
    </div>
  );
}

export default RenderSearch;
