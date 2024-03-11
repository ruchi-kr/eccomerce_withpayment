import React from "react";
import { NavLink } from "react-router-dom";

const UserManue = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>User Deshboard</h4>
          <NavLink
            to="/deshboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/deshboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserManue;
