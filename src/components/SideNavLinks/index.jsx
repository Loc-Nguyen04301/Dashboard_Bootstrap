import React from "react";
import Icon from "../Icons/Icon";

const SideNavLinks = () => {
  const menu = [
    "arrow",
    "dashboard",
    "tasks",
    "grid",
    "list",
    "basket",
    "user",
    "cog",
  ];
  return (
    <div>
      {menu.map((icon, index) => (
        <div className="mb-4" key={`${index}-${icon}`}>
          <Icon icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default SideNavLinks;
