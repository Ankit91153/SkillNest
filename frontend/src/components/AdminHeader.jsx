import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            href="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Menu</span>
          </a>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <NavLink
                to="/admin/allusers"
                className="nav-link align-middle px-0"
              >
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">All Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/messages"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-table"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Messages</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
