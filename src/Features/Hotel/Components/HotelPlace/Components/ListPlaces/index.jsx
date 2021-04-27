import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import categoryApi from "../../../../../../api/categoryApi";
import Places from "../Places";

function ListPlaces(props) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryApi.getAll();
      setCategoryList(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="hotel-place">
      <div className="container">
        <h2>ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h2>
        <div className="row">
          {categoryList.map((place) => {
            if (place.id == 2 || place.id == 3) {
              return (
                <div
                  className="hotel-place-col col-sm-6 col-md-2"
                >
                  <Places place={place}/>
                </div>
              );
            } else {
              return (
                <div
                  className="hotel-place-col col-sm-6 col-md-4"
                >
                  <Places place={place}/>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ListPlaces;
