import React from "react";
import FinalPartDetails from "./FinalPartDetails";
import SignForm from "./SignForm";
import { motion } from "framer-motion";
// import { FinalPartVariant, variantProps } from "../motionVariants/varSign";
const FinalPart = (props) => {
  const { title, details, ...signFormData } = props;
  return (
    <motion.div className="finalPart">
      <FinalPartDetails {...{ title, details }} />
      <SignForm {...signFormData} />
    </motion.div>
  );
};

export default FinalPart;
