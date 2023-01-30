import React from "react";
import ProTypes from "prop-types";
import Icon from "../Icons/Icon";
import styles from "./RankingItem.module.css";
import ProfitAmount from "../ProfitAmount";
import ProductImage from "../ProductImage";

import { LIGHT_RED, LIGHT_GREEN } from "../../Constant/constant";

const RankingItem = ({ index, name, imgName, upTrend, profit }) => {
  return (
    <div
      className={`${styles.ranking} d-flex align-items-center justify-content-between mb-4`}
    >
      <div className="d-flex align-items-center">
        {imgName ? (
          <ProductImage productName={name} imgName={imgName} />
        ) : (
          <div className={`${styles.circle} mr-2`}>{index + 1}</div>
        )}
        <p className="font-weight-bold my-0">{name}</p>
      </div>
      <div className="d-flex justify-content-between">
        {upTrend !== undefined && (
          <Icon
            color={upTrend ? LIGHT_GREEN : LIGHT_RED}
            classes={!upTrend && styles.downTrend}
          />
        )}
        <ProfitAmount amount={profit} />
      </div>
    </div>
  );
};

RankingItem.prototype = {
  index: ProTypes.string.isRequired,
  name: ProTypes.string.isRequired,
  imgName: ProTypes.string.isRequired,
  upTrend: ProTypes.string.isRequired,
  profit: ProTypes.string.isRequired,
};

export default RankingItem;
