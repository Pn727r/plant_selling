import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Link,
  // Alert,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Message from "./Messages";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

const SignIn = () => {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const [errors, seterror] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validation();
    seterror(errors);
    await axios
      .post("http://localhost:3000/signin", {
        email,
        password,
      })
      .then((res) => {
        if (res.data == "Exist") {
          window.localStorage.setItem("email", email);
          history("/");
          window.location.reload();
        } else {
          history("/signup");
        }
      });
  };

  const validation = () => {
    const error = {};
    if (!email || email == "") {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Please enter a valid email";
    } else {
      error.email = "";
    }

    if (!password || password == "") {
      error.password = "Please enter a password";
    } else if (password.length <= 6) {
      error.password = "Password must be at least 7 characters";
    } else {
      error.password = "";
    }
    return error;
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: theme.spacing(8),
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              width: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LockIcon style={{ fontSize: "48px", color: "#007bff" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography component="h2" variant="h5">
                Sign In
              </Typography>
            </div>



            {errors.email ? (
              <Message msg={errors.email} msg_type="error" />
            ) : errors.password ? (
              <Message msg={errors.password} msg_type="error" />
            ) : (
              ""
            )}

            <div style={{ marginTop: "5px" }}>
              <form action="post" onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <div
                  style={{
                    display: "flex",
                    marginTop: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{ width: "120px" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    mt={2}
                  >
                    Sign In
                  </Button>
                </div>
              </form>
              <Typography variant="body2" mt={3}>
                Don{"'"}t have an account? <Link href="/signup">Sign up</Link>
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
