import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { flickerForm, variantProps } from "../motionVariants/varSign";
import FeedBack from "../FeedBack";
const SignForm = ({
  buttonValue,
  msg,
  proceed,
  padding,
  goTo,
  showPassField,
}) => {
  const [data, setData] = useState({ mail: "", password: "" });
  const [showFeedBack, setShowFeedBack] = useState(false);

  const handleChange = (e) => {
    const newData = { ...data, [e.target.id]: e.target.value };
    setData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.mail || !data.password) {
      setShowFeedBack(true);
      setTimeout(() => {
        setShowFeedBack(false);
      }, 3000);
    }
  };
  return (
    <>
      <motion.div
        variants={flickerForm}
        {...variantProps}
        className="signForm"
        style={{
          paddingBottom: `${padding ? padding : ""}`,
          paddingTop: `${padding ? padding : ""}`,
        }}
      >
        {showFeedBack && <FeedBack {...data} />}
        <form onSubmit={handleSubmit}>
          <label htmlFor="mail">Email Address</label>
          <input
            type="email"
            id="mail"
            value={data.mail}
            onChange={handleChange}
          />

          {showPassField && (
            <>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={data.password}
                onChange={handleChange}
              />
            </>
          )}

          <input type="submit" value={buttonValue} />
        </form>
        <p className="signForm__nextSteps">
          {msg}
          <Link to={goTo}>{proceed}</Link>
        </p>
      </motion.div>

      <p className="copyright">
        &copy; Copyright 2020, Federal Republic of Nigeria. All rights reserved
      </p>
    </>
  );
};

export default SignForm;
