import React from "react";
import "./style.css";


import RenderItems from "./Components/RenderItems";
function HotelDiscount(props) {
  
  const items = [
    { 
      id: 1,
      link: '',
      soure : 'https://www.vntrip.vn/cam-nang/wp-content/uploads/2018/01/eo-gio-quy-nhon-vntrip.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000,
    },
    {
      id: 2,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20210119_079580_Overview_02.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 3,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20201224_350180_7F9259D25F004D43AF9E_16386297.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 4,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20210119_079580_Overview_02.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 5,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20201224_350180_7F9259D25F004D43AF9E_16386297.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 6,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20210119_176480_Superior_Direct_Pool_Access_01.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 7,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20210316_166950_8.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 8,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20210226_041480_52255_1542700395_169977429.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 9,
      link: '',
      soure : 'https://www.vntrip.vn/cam-nang/wp-content/uploads/2020/03/da-lat-anh-dep-thien-nhien-2020.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
    {
      id: 10,
      link: '',
      soure : 'https://statics.vntrip.vn/uploads/deal/20210329_275860_3.jpg',
      title : '[Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng',
      price : 820000
    },
  ]
 

  
  return (
    <div>
      <RenderItems items={items}></RenderItems>
    </div>
    
    
  );
}

export default HotelDiscount;
