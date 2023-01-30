import React from "react";
import styles from "./TopNav.module.css";
import SearchBar from "../SearchBar";

const TopNav = () => {
  return (
    <nav
      className={`${styles.topNav} d-flex justify-content-between align-items-center px-3`}
    >
      <h5 className={styles.brand}>Dashy Dash</h5>
      <SearchBar />
    </nav>
  );
};

export default TopNav;
