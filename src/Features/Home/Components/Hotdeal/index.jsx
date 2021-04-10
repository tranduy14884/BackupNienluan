import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import RenderHotDealItems from "./Components/RenderHotDealItems";

function Hotdeal(props) {
  const hotDealItems = [
    {
      id: 1,
      title:
        "[YOKO ONSEN QUANG HANH] - COMING BACK PROMOTION - MUA 1 TẶNG 1...",
      thumnailUrl:
        "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20210316_166950_8.jpg",
      link: "#",
      price : 2000000
    },
    {
      id: 2,
      title:
        "[YOKO ONSEN QUANG HANH] - COMING BACK PROMOTION - MUA 1 TẶNG 1...",
      thumnailUrl:
        "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20210311_308200_2.jpg",
      link: "#",
      price : 2000000
    },
    {
      id: 3,
      title:
        "[YOKO ONSEN QUANG HANH] - COMING BACK PROMOTION - MUA 1 TẶNG 1...",
      thumnailUrl:
        "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20201229_282790_7.jpg",
      link: "#",
      price : 2000000
    },
    {
      id: 4,
      title:
        "[YOKO ONSEN QUANG HANH] - COMING BACK PROMOTION - MUA 1 TẶNG 1...",
      thumnailUrl:
        "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20201207_483980_1015AJSNOIEmeraldaResort2093noipictures.jpg",
      link: "#",
      price : 2000000
    },
    {
      id: 5,
      title:
        "[YOKO ONSEN QUANG HANH] - COMING BACK PROMOTION - MUA 1 TẶNG 1...",
      thumnailUrl:
        "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20210226_041480_52255_1542700395_169977429.jpg",
      link: "#",
      price : 2000000
    },
    {
      id: 6,
      title:
        "[YOKO ONSEN QUANG HANH] - COMING BACK PROMOTION - MUA 1 TẶNG 1...",
      thumnailUrl:
        "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20210127_295720_130487910.jpg",
      link: "#",
      price : 2000000
    },
  ];
  return (
    <div>
      <RenderHotDealItems hotDealItems= {hotDealItems}></RenderHotDealItems>
     
    </div>
  );
}

export default Hotdeal;
