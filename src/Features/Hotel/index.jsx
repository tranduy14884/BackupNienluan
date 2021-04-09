import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import BannerHotel from "./Components/BannerHotel";
import HotelDiscount from "./Components/HotelDiscount";
import HotelPlace from "./Components/HotelPlace";
import HotelSearch from "./Components/HotelSearch";
import HotelTrip from "./Components/HotelTrip";

function Hotel(props) {
  return (
    <div>
      {/* <!-------------------------------- header ---------------------------------> */}
      <Header></Header>
      {/*-------------------------------- body -------------------------------*/}
      <main className="main">
        {/* Banner-hotel */}
        <BannerHotel></BannerHotel>
        {/* hotel-search */}
        <HotelSearch></HotelSearch>
        {/* vntrip app */}
        <HotelTrip></HotelTrip>
        {/* hotel-place */}
        <HotelPlace></HotelPlace>
        {/* hotel-discount */}
        <HotelDiscount></HotelDiscount>
      </main>
      {/* <!-------------------------------- Footer ---------------------------------> */}
      <Footer></Footer>
    </div>
  );
}

export default Hotel;
