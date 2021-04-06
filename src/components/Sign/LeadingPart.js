import React from "react";
import fourPeople from "../assets/people.png";
import "./signup.css";
import nPowerLogo from "../assets/npower.jpg";

const LeadingPart = () => {
  return (
    <div className="leadingPart">
      <img
        src={nPowerLogo}
        alt=" Nigerian N-Power"
        className="leadingPart__logo"
      />
      <h3>
        N-Power has changed the lives of over 500,000 youths in all 6
        geo-political zones.
      </h3>
      <img
        src={fourPeople}
        alt="beneficiaries"
        className="leadingPart__people"
      />
    </div>
  );
};

export default LeadingPart;
