import React from "react";
import FinalPartDetails from "./FinalPartDetails";
import SignForm from "./SignForm";

const FinalPart = (props) => {
  const { title, details,  ...signFormData } = props;
  return (
    <div className="finalPart">
      <FinalPartDetails {...{ title, details }} />
      <SignForm {...signFormData} />
    </div>
  );
};

export default FinalPart;
