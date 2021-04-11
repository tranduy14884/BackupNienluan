import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

RenderPlaces.propTypes = {
  places: PropTypes.array,
};
RenderPlaces.defaultProps = {
  places: [],
};

function RenderPlaces(props) {
  const { places } = props;
  return (
    <div className="hotel-place">
      <div className="container">
        <h2>ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h2>
        <div className="row">
          {places.map((place) => {
            if (place.id == 2 || place.id == 3) {
              return (
                <div className="hotel-place-col col-sm-6 col-md-2">
                  <div>
                    <Link to={place.link} exact>
                      <img
                        src={place.thumnailUrl}
                        alt
                        width="100%"
                        height="100%"
                      />
                      <div className="content">
                        <h3>{place.name}</h3>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="hotel-place-col col-sm-6 col-md-4">
                  <div>
                    <Link to={place.link} exact>
                      <img
                        src={place.thumnailUrl}
                        alt
                        width="100%"
                        height="100%"
                      />
                      <div className="content">
                        <h3>{place.name}</h3>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default RenderPlaces;
