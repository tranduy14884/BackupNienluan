import React from "react";
import RenderPlaces from "./Components/RenderPlaces";
import "./style.css";
function HotelPlace(props) {
  const places = [
    {
      id: 1,
      name: "Hà Nội",
      thumnailUrl:
        "https://statics.vntrip.vn/website/images/dest.373x181.01.png",
      link: "#",
    },
    {
      id: 2,
      name: "Đà Nẵng",
      thumnailUrl:
        "https://statics.vntrip.vn/website/images/dest.181x181.01.png",
      link: "#",
    },
    {
      id: 3,
      name: "Hội An",
      thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.181x181.02.png",
      link: "#",
    },
    {
      id: 4,
      name: "Tp. Hồ Chí Minh",
      thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.02.png",
      link: "#",
    },
    {
      id: 5,
      name: "Phú Quốc",
      thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.03.png",
      link: "#",
    },
    {
      id: 6,
      name: "Nha Trang",
      thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.04.png",
      link: "#",
    },
    {
      id: 7,
      name: "Đà Lạt",
      thumnailUrl: "https://statics.vntrip.vn/images/dest/dest.373x181.05.png",
      link: "#",
    },
  ];
  return (
    <div>
      <RenderPlaces places={places}></RenderPlaces>
    </div>
  );
}

export default HotelPlace;
