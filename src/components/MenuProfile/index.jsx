import React from "react";
import Icon from "../Icon";

const MenuProfile = ({ username }) => {
  return (
    <div className="menu-profile">
      <Icon name="user" className="" />
      <p>{username}</p>
    </div>
  );
};

export default MenuProfile;
