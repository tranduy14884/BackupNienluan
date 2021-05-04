import React from 'react';
import PropTypes from 'prop-types';

RenderRoom.propTypes = {
    room:PropTypes.object,
};

function RenderRoom(props) {
    const {room} = props;
    const formatter = new Intl.NumberFormat('es');
    return (
        <div>
            <div className="room-item-header d-flex">
                      <div className="img">
                        <img
                          src={room.thumnailUrl}
                          alt
                        />
                      </div>
                      <div className="content d-flex flex-column">
                        <h3>{room.name}</h3>
                        <div className="content-info d-flex">
                          <p>
                            <span className="icon">
                              <i className="fas fa-bed" />
                            </span>
                            {room.number} giường
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-cube" />
                            </span>
                            Diện tích : 25 m2
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-bath" />
                            </span>
                            Bồn tắm
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-tv" />
                            </span>
                            TV màn hình phẳng
                          </p>
                          <p>
                            <span className="icon">
                              <i className="fas fa-swimmer" />
                            </span>
                            Bể bơi riêng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="room-item-body d-flex">
                      <div className="content d-flex">
                        <p>
                          <span className="icon">
                            <i className="fas fa-spinner" />
                          </span>
                          Hủy phòng
                        </p>
                        <p>
                          <span className="icon">
                            <i className="fas fa-utensils" />
                          </span>
                          Bao gồm buổi sáng
                        </p>
                        <p>
                          <span className="icon">
                            <i className="fas fa-male" />
                          </span>
                          Sức chứa 2 người lớn
                        </p>
                      </div>
                      <div className="price d-flex flex-column">
                        <p>
                          <span className="old-price">{formatter.format(room.oldPrice)}đ</span>
                          <span className="discount-price">-{(room.discount * 1000) / 10}%</span>
                        </p>
                        <p>{formatter.format(room.oldPrice * room.discount)}</p>
                        <p>Giá đã bao gồm phí và thuế</p>
                      </div>
                      <div className="d-flex flex-column">
                        <button>Đặt phòng</button>
                      </div>
                    </div>
        </div>
    );
}

export default RenderRoom;