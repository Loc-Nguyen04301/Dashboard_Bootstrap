import React from "react";
import Icon from "../Icons/Icon";
import styles from "./SingleProduct.module.css";

const SingleProduct = ({
  imgSrc,
  imgAlt,
  amount,
  percentage,
  icon,
  isUpTrend,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <img className={styles.img} alt={imgAlt} src={imgSrc} />
      <div>
        <h4 className={styles.amount}>
          <Icon classes="mr-4" icon={icon} />
          {amount}
        </h4>
        <p className={isUpTrend ? "text-success" : "text-danger"}>
          <Icon
            classes="mr-4"
            icon={isUpTrend ? "stats" : "downtrend"}
            color={isUpTrend ? "green" : "red"}
          />
          {percentage}%
        </p>
      </div>
    </div>
  );
};



export default SingleProduct;
