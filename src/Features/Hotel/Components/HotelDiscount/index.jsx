import React from "react";
import "./style.css";
import $ from 'jquery';
function HotelDiscount(props) {
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        smartSpeed: 1500,
        animateIn: 'linear',
        animateOut: 'linear',

        autoplay:true,
        autoplayTimeout: 5000,
        
        autoWidth:false,
        nav:true,
        navText : ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
                loop:false
            }
        }
    })
});
  return (
    
      <div className="hotel-discount">
        <div className="container">
          <h4>TOP COMBO KHUYẾN MÃI: VÉ MÁY BAY &amp; KHÁCH SẠN</h4>
          <div className="owl-carousel owl-theme">
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://www.vntrip.vn/cam-nang/wp-content/uploads/2018/01/eo-gio-quy-nhon-vntrip.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://statics.vntrip.vn/uploads/deal/20210119_079580_Overview_02.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://statics.vntrip.vn/uploads/deal/20201224_350180_7F9259D25F004D43AF9E_16386297.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://statics.vntrip.vn/uploads/deal/20210119_176480_Superior_Direct_Pool_Access_01.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://statics.vntrip.vn/uploads/deal/20210316_166950_8.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://statics.vntrip.vn/uploads/deal/20210226_041480_52255_1542700395_169977429.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://www.vntrip.vn/cam-nang/wp-content/uploads/2020/03/da-lat-anh-dep-thien-nhien-2020.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="item-img">
                  <img
                    src="https://statics.vntrip.vn/uploads/deal/20210329_275860_3.jpg"
                    alt
                  />
                </div>
                <div className="item-content">
                  <h6>
                    [Mövenpick Villas &amp; Residences Phu Quoc] CHƯƠNG TRÌNH
                    KHUYẾN MẠI ĐẶC BIỆT - Đêm nghỉ + Bữa sáng
                  </h6>
                  <div className="item-conent-price">
                    <p>Chỉ từ</p>
                    <p className="price">820.000 đ</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default HotelDiscount;
