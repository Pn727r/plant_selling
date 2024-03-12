/* eslint-disable react/prop-types */
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { NavDropdown } from "react-bootstrap";
import logo from "./assets/logo.png"; // Import the logo image
import Profile from "@mui/icons-material/AccountCircleRounded";
import Fav from "@mui/icons-material/Favorite";
import Cart from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const Navigation = (props) => {
  const Email = localStorage.getItem("email");

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ fontSize: 18, backgroundColor: "#116530", color: "#FFFFFF" }}
      >
        <div className="container">
          <img
            src={logo} // Use the logo image as the src
            alt="logo"
            style={{ height: "30px", width: "30px" }}
          />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plants">
                  <p>Plants</p>
                </Link>
              </li>
              <div>
                <NavDropdown title="Explore More">
                  <NavDropdown.Item
                    as={Link}
                    to="/pots"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    Pots/Planters
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/soil"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    Soil/Fertilizers
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/util"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    Garden Equipments
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              {Email ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      <IconButton aria-label="cart">
                        <Badge color="info" badgeContent={props.len}>
                          <Cart />
                        </Badge>
                      </IconButton>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/favorite">
                      <Fav />
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
          {Email ? (
            <>
              <div style={{ alignItems: "center" }}>
                <Profile fontSize="large" style={{ marginRight: 5 }} />
                {Email}
              </div>
              <Button
                className="mx-2"
                variant="contained"
                style={{
                  backgroundColor: "#218838",
                  color: "#ffffff",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  localStorage.removeItem("email");
                  window.location.href = "/home";
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/signin">
              <Button
                className="mx-1"
                variant="contained"
                style={{
                  backgroundColor: "#218838",
                  color: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
