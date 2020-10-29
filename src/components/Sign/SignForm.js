import React from "react";
import { Link } from "react-router-dom";
const SignForm = ({ buttonValue, msg, proceed, padding }) => {
  // const alignWell = padding ? {`paddingBottom: ${padding}`} : ''
  return (
    <>
      <div
        className="signForm"
        style={{
          paddingBottom: `${padding ? padding : ""}`,
          paddingTop: `${padding ? padding : ""}`,
        }}
      >
        <form>
          <label htmlFor="mail">Email Address</label>
          <input type="email" id="mail" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <input type="submit" value={buttonValue} />
        </form>
        <p className="signForm__nextSteps">
          {msg}
          <Link to="/login">{proceed}</Link>
        </p>
      </div>
      {/* <p className="signForm__nextSteps">
        {msg}
        <Link to="/login">{proceed}</Link>
      </p> */}
      <p className="copyright">
        &copy; Copyright 2020, Federal Republic of Nigeria . All rights reserved
      </p>
    </>
  );
};

export default SignForm;
