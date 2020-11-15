import React from "react";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import { motion } from "framer-motion";
import { variantProps, partDetailsVariant } from "../motionVariants/varSign";

const FinalPartDetails = ({ title, details = [], padding }) => {
  return (
    <motion.div
      variants={partDetailsVariant}
      {...variantProps}
      className="finalPartDetails"
    >
      <h4>{title}</h4>
      <div>
        {details.map((detail, index) => (
          <div key={index} className="finalPartDetails__info">
            <PlayArrowSharpIcon /> <span>{detail}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FinalPartDetails;
