import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useRouteMatch } from "react-router";
import categoryApi from "../../../../../../api/categoryApi";
import productApi from "../../../../../../api/productApi";
import Footer from "../../../../../../Components/Footer";
import Header from "../../../../../../Components/Header";
import RenderHotelList from "../../../../../HotelCategory/Components/RenderHotelList";
import RenderSearch from "../../../../../HotelCategory/Components/RenderSearch";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import "./style.css";
import { useForm } from "react-hook-form";
DetailPlace.propTypes = {};

function DetailPlace(props) {
  const match = useRouteMatch();
  const {
    params: { placeId },
  } = match;
  const [dataId, setDataId] = useState({});
  // get place from API
  useEffect(() => {
    (async () => {
      try {
        const data = await categoryApi.get(placeId);
        setDataId(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [placeId]);
  //get list hotel list from api
  const [listHotel, setListHotel] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll();
        setListHotel(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(listHotel);
  //check Id listHotel
  const data = listHotel.filter((item) => item.categoryId == placeId);
  //set state active page
  const [activePage, setActivePage] = useState(1);
  const [hotelsPerPage, setHotelsPerPage] = useState(6);
  const indexOfLast = activePage * hotelsPerPage;
  const indexOfFirst = indexOfLast - hotelsPerPage;
  const [currentHotel, setCurrentHotel] = useState((data.slice(indexOfFirst, indexOfLast)));
  // const currentHotel = data.slice(indexOfFirst, indexOfLast);
  // const [newList,setNewList] = useState(HotelList);
  // useEffect(() => {
  //   setCurrentHotel(data.slice(indexOfFirst, indexOfLast));
  // }, [activePage]);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  //xu li phan tim kiem
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitSearch = (dataSearch) => {
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

    if (Date.parse(dataSearch.ngaynhanphong) < Date.parse(currentTime)) {
      enqueueSnackbar("Ngày nhận phòng không hợp lệ", { variant: "error" });
    }
    if (dataSearch.ngaynhanphong == "" || dataSearch.search == "" || dataSearch.ngaythue == "") {
      enqueueSnackbar("Bộ lọc chưa hợp lệ", { variant: "error" });
    }
    else{
        const filterSearch = data.filter(item =>{
          return (item.location.toUpperCase().includes(dataSearch.search.toUpperCase()))
        })
        setCurrentHotel(filterSearch);
    }
  };

  return (
    <div>
      <Header />
      <>
        {/*--------------------------------    main  ----------------------------*/}
        <div
          className="hotel-list-main"
          style={{ backgroundColor: "#fafafa", paddingTop: 20 }}
        >
          <div className="container">
            {/*-------------------- hotel-list-search -----------------*/}
            <RenderSearch
              handleSubmitSearch={handleSubmitSearch}
            ></RenderSearch>
            {/*-------------------- hotel-list-body -----------------*/}
            <RenderHotelList
              HotelList={currentHotel}
              name={dataId.name}
              number={dataId.number}
            ></RenderHotelList>
            <div>
              <Pagination
                activePage={activePage}
                itemsCountPerPage={hotelsPerPage}
                totalItemsCount={data.length}
                pageRangeDisplayed={Math.ceil(data.length / hotelsPerPage)}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default DetailPlace;
