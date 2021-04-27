import React from "react";
import { Route, useRouteMatch , Switch} from "react-router-dom";
import HotelCategory from "../../../HotelCategory";
import DetailPlace from "./Components/DetailPlace";
import ListPlaces from "./Components/ListPlaces";
import RenderPlaces from "./Components/RenderPlaces";
// import ListPlaces from "./pages/ListPlaces";

import "./style.css";
function HotelPlace(props) {
  // const places = [
  //   {
  //     id: 1,
  //     name: "Hà Nội",
  //     thumnailUrl:
  //       "https://statics.vntrip.vn/website/images/dest.373x181.01.png",
  //     link: "hotel/hanoi",
  //   },
  //   {
  //     id: 2,
  //     name: "Đà Nẵng",
  //     thumnailUrl:
  //       "https://statics.vntrip.vn/website/images/dest.181x181.01.png",
  //     link: "hotel/danang",
  //   },
  //   {
  //     id: 3,
  //     name: "Hội An",
  //     thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.181x181.02.png",
  //     link: "hotel/hoian",
  //   },
  //   {
  //     id: 4,
  //     name: "Tp. Hồ Chí Minh",
  //     thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.02.png",
  //     link: "hotel/tphcm",
  //   },
  //   {
  //     id: 5,
  //     name: "Phú Quốc",
  //     thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.03.png",
  //     link: "hotel/phuquoc",
  //   },
  //   {
  //     id: 6,
  //     name: "Nha Trang",
  //     thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.04.png",
  //     link: "hotel/nhatrang",
  //   },
  //   {
  //     id: 7,
  //     name: "Đà Lạt",
  //     thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.05.png",
  //     link: "hotel/dalat",
  //   },
  // ];
  const match = useRouteMatch();
  return (
    <div>
      {/* <RenderPlaces places={places}></RenderPlaces> */}
      <Switch>
        <Route path={match.url} component={ListPlaces} exact/>
        {/* <Route path={`${match.url}/:categoryId`} component={DetailPlace} exact/> */}

      </Switch>
    </div>
  );
}

export default HotelPlace;
