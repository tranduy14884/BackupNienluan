import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
RenderSearch.propTypes = {
    
};

function RenderSearch(props) {
    return (
        <div>
             {/*-------------------- hotel-list-search -----------------*/}
             <div className="hotel-list-search">
              <div className="row">
                <div className="col-sm-4">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập địa điểm"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    id="datepicker"
                    className="input-group date"
                    data-date-format="dd-mm-yyyy"
                  >
                    {" "}
                    <input className="form-control" readOnly type="text" />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-calendar" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập số ngày thuê"
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="input-group hotel-list-search-btn">
                    <button className="btn btn-warning">Tìm kiếm</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default RenderSearch;