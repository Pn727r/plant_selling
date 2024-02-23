import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { NavDropdown } from "react-bootstrap";
import logo from "./assets/logo.png";
import Profile from "@mui/icons-material/AccountCircleRounded";
import Fav from '@mui/icons-material/Favorite';
import {useAppContext} from './AppContext';
import {getEmail } from "./Global";
import Cart from '@mui/icons-material/AddShoppingCart';

const email = getEmail();


const Navigation = () => {
  const {cart_count} = useAppContext();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ fontSize: 18, backgroundColor: "#93ff82", color: "#000000" }}
      >
        <div className="container">
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
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
              <NavDropdown title="Explore More" id="basic-nav-dropdown">
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
              {email != null ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <Cart/>
                  {cart_count}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/favorite">
                        <Fav/>
                    </Link>
                  </li>
                  
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          {email != null ? (
            <>
              <div style={{ alignItems: "center" }}>
                <Profile fontSize="large" style={{ marginRight: 5 }} />
                {email}
              </div>
              <Button
                className="mx-3 "
                variant="outlined"
                style={{
                  backgroundColor: "#93ff82",
                  color: "#000000",
                  borderColor: "#000000",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  localStorage.removeItem("email");
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button
                  className="mx-1 "
                  variant="outlined"
                  style={{
                    backgroundColor: "#93ff82",
                    color: "#000000",
                    borderColor: "#000000",
                    borderRadius: "20px",
                  }}
                >
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;