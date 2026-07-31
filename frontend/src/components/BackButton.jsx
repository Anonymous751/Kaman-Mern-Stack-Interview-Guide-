import React from "react";

const BackButton = ({
  label = "Go Back",
  className = "",
  icon = "⬅"
}) => {


  const handleBack = () => {

    window.history.back();

  };


  return (
    <>
      <br />

      <button
        className={`btn btn-primary ${className}`}
        onClick={handleBack}
      >

        {icon} {label}

      </button>

    </>
  );
};


export default BackButton;