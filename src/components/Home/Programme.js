import React from "react";
import { motion } from "framer-motion";
import { articleVariant } from "../motionVariants/varProg";
const Programme = ({
  icon,
  title,
  duration,
  description,
  paddingTop,
  shiftToAlign,
}) => {
  console.log({ title });
  return (
    <motion.article
      className="programme__card"
      variants={articleVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <h2>
        {icon} <span>{title}</span>
      </h2>
      <section className="programme__cardDetails">
        <p className="programme__cardInfo" style={{ paddingTop: paddingTop }}>
          <span>{description}</span>
        </p>
        <h5 style={{ marginTop: shiftToAlign }}>{duration}</h5>
      </section>
    </motion.article>
  );
};

export default Programme;
