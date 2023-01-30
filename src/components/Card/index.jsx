import React from "react";
import Icon from "../Icons/Icon";
import styles from "./Card.module.css";

const Card = ({ headline, children, flexColumn }) => {
  return (
    <div className={styles.card}>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className={`${styles.headline} mb-0`}>{headline}</h6>
        <Icon option="options" />
      </div>
      <div
        className={
          flexColumn
            ? "d-flex flex-column align-items-center justify-content-around h-100"
            : "d-flex align-items-center h-100"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
