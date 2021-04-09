import React from "react";
import PropTypes from "prop-types";
import './style.css';
Fight.propTypes = {};

function Fight(props) {
  return (
    <div>
      <div className="fight">
        <div className="container">
          <h3>Chặng bay giá rẻ</h3>
          <table className="fight-table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <td>
                  <div className="fight-title">Đường bay nổi bật</div>
                </td>
                <td>
                  <div className="fight-title-month">03/2021</div>
                </td>
                <td>
                  <div className="fight-title-month">04/2021</div>
                </td>
                <td>
                  <div className="fight-title-month">05/2021</div>
                </td>
                <td>
                  <div className="fight-title-month">06/2021</div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="fight-price">
                <td>
                  <div className="fight-title">
                    <span>
                      <i className="fa fa-paper-plane" aria-hidden="true" />
                    </span>
                    Hà Nội{" "}
                    <span>
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </span>{" "}
                    Đà Lạt
                  </div>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
              </tr>
              <tr className="fight-price">
                <td>
                  <div className="fight-title">
                    <span>
                      <i className="fa fa-paper-plane" aria-hidden="true" />
                    </span>
                    Hà Nội{" "}
                    <span>
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </span>{" "}
                    Phú Quốc
                  </div>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
                <td>
                  <button>99.000đ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Fight;
