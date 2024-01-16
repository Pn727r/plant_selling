import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Gardening
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plants">
                  Plants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pots">
                  Pots/Decoration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/soil">
                  Soil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/util">
                  Utilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Link to="/signin">
            <Button className="mx-1 " variant="contained" color="success">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="mx-1" variant="outlined" color="success">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
