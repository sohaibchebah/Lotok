import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-regular-svg-icons";

const StarRatingcomp = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} className="text-primary-red"/>
    </div>
  );
};

export default StarRatingcomp;
