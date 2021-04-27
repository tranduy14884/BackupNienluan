import React from 'react';
import PropTypes from 'prop-types';


TabSearch.propTypes = {
    
};

function TabSearch(props) {
    return (
        <div className="hotel-list-filter-tab">
          <div>
            <div className="hotel-list-list-group-tab d-flex flex-column">
              <div className="group-tab-item">
                <p>Xem giá</p>
              </div>
              <div className="group-tab-item">
                <p>Mức giá</p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      Dưới 500.000đ
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      500.000đ - 1.000.000đ
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="1000-2000"
                      />{" "}
                      1.000.000đ - 2.000.000đ
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2000-5000"
                      />{" "}
                      2.000.000đ - 5.000.000
                    </label>
                  </div>
                </div>
              </div>
              <div className="group-tab-item">
                <p>Xếp hạng khách sạn</p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="1000-2000"
                      />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2000-5000"
                      />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </label>
                    <label className="form-check-label rank">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2000-5000"
                      />
                      <i className="fas fa-star" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="group-tab-item">
                <p>Quận huyện</p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      Option 1
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
              <div className="group-tab-item">
                <p>Tiện nghi khách sạn </p>
                <div className="group-tab-content">
                  <div className="form-group form-check d-flex flex-column">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500d"
                      />{" "}
                      Hồ bơi
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      Spa
                    </label>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="500-1000"
                      />{" "}
                      Bồn nước nóng
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default TabSearch;