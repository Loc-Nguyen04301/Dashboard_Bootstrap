import React, { Fragment } from "react";
import styles from "./Stats.module.css";
import StatsItem from "../StatsItem";

const Stats = () => {
  return (
    <Fragment>
      <StatsItem number={3456} description={"Item On Sale"} />
      <StatsItem number={432} description={"Sale this month"} />
    </Fragment>
  );
};

export default Stats;
