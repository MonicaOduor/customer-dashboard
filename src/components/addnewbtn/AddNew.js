import "./addnew.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { NavLink } from "react-router-dom";

function AddNew() {
  return (
    <div className="border addnew">
      <br />
      <NavLink
        activeclassname="active"
        style={{ textDecoration: "none", color: "inherit" }}
        to="/new"
      >
        <button className="rounded btn btn-primary">
          <AddOutlinedIcon />
          Add New
        </button>
      </NavLink>
    </div>
  );
}

export default AddNew;
