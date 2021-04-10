import React from "react";
import PropTypes from "prop-types";
import "./style.css";
RenderHotDealItems.propTypes = {
  hotDealItems: PropTypes.array,
};
RenderHotDealItems.defaultProps = {
  hotDealItems: [],
};
//   format number
const formatter = new Intl.NumberFormat("es");

function RenderHotDealItems(props) {
  const { hotDealItems } = props;
  return (
    <div>
      <div className="hot-deal">
        <div className="container">
          <h3>HOT DEAL</h3>
          <div className="list-deal">
          
              {hotDealItems.map((hotDealItem) => (
                    <div className="list-deal-item">
                <a className="deal-item" href>
                  <div className="deal-item-img">
                    <img
                      src={hotDealItem.thumnailUrl}
                      alt={1}
                      width="100%"
                      height="auto"
                    />
                  </div>
                  <div className="deal-item-content">
                    <h6>{hotDealItem.title}</h6>
                    <p>
                      Combo:<span className="content-hotel ">Khách sạn</span>
                    </p>
                    <p>
                      Bao gồm:
                      <span className="content-endow ">Gói ưu đãi</span>
                    </p>
                    <p className="content-price">
                      {formatter.format(hotDealItem.price)} đ
                    </p>
                  </div>
                </a>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderHotDealItems;
