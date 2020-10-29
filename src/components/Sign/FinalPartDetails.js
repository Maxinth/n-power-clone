import React from "react";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";

const FinalPartDetails = ({ title, details = [], padding }) => {
  return (
    <div className="finalPartDetails">
      <h4>{title}</h4>
      <div>
        {details.map((detail, index) => (
          <div key={index} className="finalPartDetails__info">
            <PlayArrowSharpIcon /> <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalPartDetails;
