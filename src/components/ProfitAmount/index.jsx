import React from "react";
import ProTypes from "prop-types";
import styles from "./ProfitAmount.module.css";

const ProfitAmount = ({ amount }) => {
  return <p className={`${styles.amount} my-0`}>${amount}</p>;
};

ProfitAmount.prototype = {
  amount: ProTypes.string,
};

export default ProfitAmount;
