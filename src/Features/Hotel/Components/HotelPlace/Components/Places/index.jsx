import React from "react";
import PropTypes from "prop-types";
import { useHistory, useRouteMatch } from "react-router";

Places.propTypes = {
    place: PropTypes.object,
};

function Places(props) {
    const {place} = props;
    const history = useHistory();
    const match = useRouteMatch();
    const handleClick = () => {
        history.push(`/hotel/${place.id}`);
    };

  return (
    <div>
      <img src={place.thumnailUrl} alt width="100%" height="100%" onClick={handleClick}/>
      <div className="content">
        <h3>{place.name}</h3>
      </div>
    </div>
  );
}

export default Places;
