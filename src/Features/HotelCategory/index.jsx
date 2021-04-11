import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import RenderHotelList from "./Components/RenderHotelList";
import RenderSearch from "./Components/RenderSearch";

function HotelCategory(props) {
  const hotelList = [
    {
      id: 1,
      name: "Nha Trang",
      list: [
        {
          id: 1,
          title: "Khách sạn Imperial Nha Trang",
          location:
            "20 Trần Phú, Vĩnh Nguyên, Thành phố Nha Trang, Khánh Hòa, Việt Nam",
          rankNumber: 39,
          rankPoint: 4.4,
          price: 850000,
          discount: 0.4,
          available: 4,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/12536/img_max/12536_1607680588_1211.jpg",
        },
        {
          id: 2,
          title: "Khách sạn V Nha Trang",
          location: "8 Hùng Vương, Lộc Thọ, Thành phố Nha Trang, Khanh Hoa",
          rankNumber: 32,
          rank: 4.1,
          price: 1550000,
          discount: 0.7,
          available: 7,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/69753/img_max/69753_1580543438__n5_1428-min.jpg",
        },
        {
          id: 3,
          title: "Khách sạn Bonjour Nha Trang",
          location:
            "17/2A-B-C Nguyễn Thị Minh Khai, P. Lộc Thọ, TP. Nha Trang, Khánh Hòa",
          rankNumber: 39,
          rank: 4.2,
          price: 1400000,
          discount: 0.6,
          available: 6,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/11822/img_max/11822_1533117709_premier_dbl_with_balcony_(3).jpg",
        },
        {
          id: 4,
          title: "Maple Hotel & Apartment",
          location:
            "16 Tôn Đản, Lộc Thọ, Thành phố Nha Trang, Khánh Hòa, Vietnam",
          rankNumber: 35,
          rank: 3.8,
          price: 2000000,
          discount: 0.78,
          available: 2,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/9950/img_max/9950_1508900920__n5_0621-hdr.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Ha Noi",
      list: [
        {
          id: 1,
          title: "Khách sạn Mia Hà Nội",
          location:
            "90, ngõ 116 phố Nhân Hòa (Đối diện ngõ 9 phố Hoàng Đạo Thúy kéo dài), Nhân Chính, Thanh Xuân, Hà Nội",
          rankNumber: 39,
          rankPoint: 4.4,
          price: 880000,
          discount: 0.39,
          available: 4,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/616933/img_max/616933_1601526999_suite_(5)_compressed.jpg",
        },
        {
          id: 2,
          title: "Grand Vista Hanoi Hotel",
          location: "146 Giảng Võ, Ba Đình, Hà Nội",
          rankNumber: 2,
          rank: 4.3,
          price: 3000000,
          discount: 0.4,
          available: 3,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/70518/img_max/70518_1600232579_executive_1-min.jpg",
        },
        {
          id: 3,
          title: "Khách sạn Hovi De Bali",
          location:
            "Nhà D3 Ngõ 71 Trần Quang Diệu (Tổ 101), Phường Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
          rankNumber: 3,
          rank: 4.2,
          price: 750000,
          discount: 0.3,
          available: 3,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/616778/img_max/616778_1597826163_hovi-de-bali-71-tran-quang-dieu-dong-da-ha-noi-psy08376_2100px_1600px.jpg",
        },
        {
          id: 4,
          title: "The Q Hotel",
          location: "87-89-91 Nguyễn Trường Tộ, Trúc Bạch, Ba Đình, Hà Nội",
          rankNumber: 5,
          rank: 3.8,
          price: 1000000,
          discount: 0.3,
          available: 5,
          link: "#",
          thumnailUrl:
            "https://i.vntrip.vn/200x200/smart/https://statics.vntrip.vn/data-v2/hotels/70793/img_max/70793_1567953110_junior_suite_4.jpg",
        },
      ],
    },
  ];
  return (
    <div>
      <Header></Header>
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
            <RenderHotelList HotelList={hotelList}></RenderHotelList>
          </div>
        </div>
      </>
      <Footer></Footer>
    </div>
  );
}

export default HotelCategory;
