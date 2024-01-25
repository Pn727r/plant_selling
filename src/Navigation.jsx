import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { NavDropdown } from 'react-bootstrap';
import logo from "./assets/logo.png";
//we can add bootstrp class in react as  this command --> npm install react-bootstrap bootstrap

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={logo} alt="logo" style={{height : "40px" , width : "40px"}}/>
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
              <NavDropdown title="Many More" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/pots">
                  Pots/Planters
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/soil">
                  Soil/Fertilizers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/util">
                  Garden Equipments
                </NavDropdown.Item>
              </NavDropdown>
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
