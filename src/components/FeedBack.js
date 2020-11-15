import React from "react";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import "./feedback.css";
import { motion } from "framer-motion";
import { feedBackVariant } from "./motionVariants/varFeed";
const FeedBack = ({ mail, password }) => {
  // form feedback message
  const CheckForm = (mail, password) => {
    let message;

    if (!mail && !password) {
      message = "Fill empty field(s) to continue";
    } else if (!mail) {
      message = "the mail  field cannot be blank";
    } else if (!password) {
      message = "the password field cannot be blank";
    } else {
      message = "";
    }
    return message;
  };
  return (
    <motion.section
      variants={feedBackVariant}
      initial="hidden"
      animate="visible"
      className="feedback-container"
    >
      <div className="feedback">
        <CancelRoundedIcon /> <span>{CheckForm(mail, password)}</span>
      </div>
    </motion.section>
  );
};

export default FeedBack;
