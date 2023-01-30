import React from "react";
import SideNavLinks from "../SideNavLinks";
import styles from "./SideNav.module.css";
import Icon from "../Icons/Icon";

const SideNav = () => {
  return (
    <aside className={styles.sideNav}>
      <div className={styles.image}></div>
      <SideNavLinks />
      <Icon icon="arrow" classes={styles.arrow}/>
    </aside>
  );
};

export default SideNav;
