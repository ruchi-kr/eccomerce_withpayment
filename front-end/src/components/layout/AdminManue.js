import React from "react";
import { NavLink } from "react-router-dom";

const AdminManue = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/deshboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/deshboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/deshboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/deshboard/admin/product"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/deshboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            All Registred users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminManue;
