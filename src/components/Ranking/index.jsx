import React from "react";
import RankingItem from "../RankingItem";

const Ranking = ({ data }) => {
  return (
    <div className="w-100">
      {data.map((item, index) => (
        <RankingItem
          key={index}
          index={index}
          name={item.name}
          imgName={item.imgName}
          upTrend={item.upTrend}
          profit={item.profit}
        />
      ))}
    </div>
  );
};

export default Ranking;
