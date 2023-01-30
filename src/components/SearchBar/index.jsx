import React from "react";
import Icon from "../Icons/Icon";
import styles from "./SearchBar.module.css";

import { ICON_COLOR } from "../../Constant/constant";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <Icon icon="search" color={ICON_COLOR} classes={styles.icon} />
      <input className={styles.input} type="search" placeholder="Search" />
      <Icon
        icon="arrow"
        color={ICON_COLOR}
        classes={`${styles.arrow} ${styles.icon}`}
      />
    </div>
  );
};

export default SearchBar;
