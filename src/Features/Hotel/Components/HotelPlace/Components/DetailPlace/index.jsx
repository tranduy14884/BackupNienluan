import React from "react";
import { useRouteMatch } from "react-router";
import Footer from "../../../../../../Components/Footer";
import Header from "../../../../../../Components/Header";
import RenderHotelList from "../../../../../HotelCategory/Components/RenderHotelList";
import RenderSearch from "../../../../../HotelCategory/Components/RenderSearch";

DetailPlace.propTypes = {};

function DetailPlace(props) {
    const match = useRouteMatch();
    console.log(match);
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
            <RenderHotelList></RenderHotelList>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default DetailPlace;
