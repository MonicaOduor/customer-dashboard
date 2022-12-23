import { useState } from "react";
import "./sidebar.css";
import avatar from "../../assets/avatar.png";

import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink, Link } from "react-router-dom";
import { SearchOutlined } from "@mui/icons-material";

export default function Sidebar() {
  const [show, setShow] = useState();

  return (
    <>
      <strong className="menu-icon toggle" onClick={() => setShow(true)}>
        &#9776;
      </strong>
      <header className="header">
        <div className="search">
          <input
            type="text"
            placeholder="Search ..."
            className="search-input "
          />
          <SearchOutlined style={{ opacity: 0.6 }} />
        </div>
        <div
          className="header_avatar border p-1 mr-2"
          style={{ cursor: "pointer" }}
        >
          <img src={avatar} width="35px" />
          <small>Tobi Adara</small>
        </div>
      </header>

      <aside className={`sidebar sticky ${show ? "show" : ""}`}>
        <div
          className="sidebar_close_icon toggle"
          onClick={() => setShow(false)}
        >
          <strong>&times;</strong>
        </div>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          className="text-center logo"
        >
          <strong className="d-sm-none d-md-block d-lg-block">
            MarketPlace Support
          </strong>
        </Link>

        <ul className="navlinks">
          <NavLink
            activeclassname="active"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          >
            <li className="nav-item rounded">
              <DashboardCustomizeOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>

          <NavLink
            activeclassname="active"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/accounts"
          >
            <li className="nav-item rounded">
              <ManageAccountsOutlinedIcon className="icon" />
              <span>Accounts</span>
            </li>
          </NavLink>

          <NavLink
            activeclassname="active"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/queries"
          >
            <li className="nav-item rounded">
              <QuestionAnswerOutlinedIcon className="icon" />
              <span>Queries</span>
            </li>
          </NavLink>

          <NavLink
            activeclassname="active"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/clients"
          >
            <li className="nav-item rounded">
              <Groups2OutlinedIcon className="icon" />
              <span>Clients</span>
            </li>
          </NavLink>

          <NavLink
            activeclassname="active"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/settings"
          >
            <li className="nav-item rounded">
              <SettingsOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}
