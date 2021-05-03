import React from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

RenderItems.propTypes = {
  items: PropTypes.array,
};
RenderItems.defaultProps = {
  items: [],
};

function RenderItems(props) {
  const { items } = props;
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,

    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,

    slickPrev: ['<i class="fas fa-chevron-circle-left"></i>'],
    slickNext: ['<i class="fas fa-chevron-circle-right"></i>'],
  };
  //   format number
  const formatter = new Intl.NumberFormat("es");
  return (
    <div className="hotel-discount">
      <div className="container">
        <h4>TOP COMBO KHUYẾN MÃI: VÉ MÁY BAY &amp; KHÁCH SẠN</h4>
        <div className="owl-carousel owl-theme">
          <Slider {...settings}>
            {items.map((item) => (
              <div className="container-item" key={item.id}>
                <div className="item">
                  <a href="#">
                    <div className="item-img">
                      <img src={item.soure} alt />
                    </div>
                    <div className="item-content">
                      <h6>{item.title}</h6>
                      <div className="item-conent-price">
                        <p>Chỉ từ</p>
                        <p className="price">
                          {formatter.format(item.price)} đ
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RenderItems;
