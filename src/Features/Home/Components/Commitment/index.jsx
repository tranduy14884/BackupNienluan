import React from "react";
import './style.css';
import commit1 from './img/commmitment/1.png';
function Commitments(props) {
  return (
    <div>
      <div className="container-fluid commitment">
        <div className="container">
          <h3>Cam kết từ Vntrip</h3>
          <div className="commitment-group">
            <div className="commmitment-item">
              <div className="commmitment-icon">
                <img
                  src={commit1}
                  alt={1}
                  width="80px"
                  height="auto"
                />
              </div>
              <div className="commmitment-text">
                <h5>Giá vé tốt nhất cập nhật từng phút</h5>
              </div>
            </div>
            <div className="commmitment-item">
              <div className="commmitment-icon">
                <img
                  src="../img/commmitment/2.png"
                  alt={1}
                  width="80px"
                  height="auto"
                />
              </div>
              <div className="commmitment-text">
                <h5>Khả năng săn vé 0đ cao</h5>
              </div>
            </div>
            <div className="commmitment-item">
              <div className="commmitment-icon">
                <img
                  src="../img/commmitment/3.png"
                  alt={1}
                  width="80px"
                  height="auto"
                />
              </div>
              <div className="commmitment-text">
                <h5>Giá phòng giảm sâu cho thành viên của Vntrip</h5>
              </div>
            </div>
            <div className="commmitment-item">
              <div className="commmitment-icon">
                <img
                  src="../img/commmitment/4.png"
                  alt={1}
                  width="80px"
                  height="auto"
                />
              </div>
              <div className="commmitment-text">
                <h5>Combo đồng giá 1.999k Không phụ phí, cam kết giá cuối</h5>
              </div>
            </div>
            <div className="commmitment-item">
              <div className="commmitment-icon">
                <img
                  src="../img/commmitment/5.png"
                  alt={1}
                  width="80px"
                  height="auto"
                />
              </div>
              <div className="commmitment-text">
                <h5>Combo tự động, chủ động lịch trình</h5>
              </div>
            </div>
            <div className="commmitment-item">
              <div className="commmitment-icon">
                <img
                  src="../img/commmitment/6.png"
                  alt={1}
                  width="80px"
                  height="auto"
                />
              </div>
              <div className="commmitment-text">
                <h5>Cập nhật liên tục xu hướng du lịch mới</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commitments;
