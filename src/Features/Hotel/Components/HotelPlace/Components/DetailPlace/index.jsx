import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import categoryApi from "../../../../../../api/categoryApi";
import productApi from "../../../../../../api/productApi";
import Footer from "../../../../../../Components/Footer";
import Header from "../../../../../../Components/Header";
import RenderHotelList from "../../../../../HotelCategory/Components/RenderHotelList";
import RenderSearch from "../../../../../HotelCategory/Components/RenderSearch";

DetailPlace.propTypes = {};

function DetailPlace(props) {
    const match = useRouteMatch();
    const { params : { placeId }} = match;
   const [ dataId, setDataId] = useState({});
    //get place from API
    useEffect(()=>{
      (
        async() =>{
            try {
              const data = await categoryApi.get(placeId);
              setDataId(data);
              // console.log(dataId);
            } catch (error) {
              console.log(error);
            }
        }
      )()
    },[placeId]);
    //get list hotel list from api
    const [listHotel, setListHotel] = useState([]);
    useEffect(
      ()=>{
        (async() =>{
          try {
            const data  = await productApi.getAll();
            setListHotel(data);
          } catch (error) {
            console.log(error);
          }
        })()
      },[]
    )
    // console.log(listHotel);
    //check Id listHotel
    const data = listHotel.filter(item => item.categoryId == placeId);
    // console.log(data);
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
            <RenderSearch></RenderSearch>
            {/*-------------------- hotel-list-body -----------------*/}
            <RenderHotelList HotelList={data} name={dataId.name} number={dataId.number}></RenderHotelList>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default DetailPlace;
