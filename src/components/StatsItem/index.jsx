import React from "react";

const StatsItem = ({ number, description }) => {
  return (
    <div className="">
      <h2 className="text-center">{number}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StatsItem;
