import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Message from "./Messages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState  } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const theme = createTheme();

const SignUp = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const history  = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validation();
    seterrors(errors);
    await axios
      .post("http://localhost:3000/signup", {
        fname,
        lname,
        email,
        password,
      })
      .then(res => {
        if(res.data == "Exist"){
          history("/signin");
        }
        
      });
  };
  const validation = () => {
    const error = {};
    if (!fname || fname == "") {
      error.fname = "First name can't be blank";
    } else {
      error.fname = "";
    }
    if (!lname || lname == "") {
      error.lname = "Last name can't be blank";
    } else {
      error.lname = "";
    }

    if (!email || email == "") {
      error.email = "Enter email address";
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
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LockIcon style={{ fontSize: "48px", color: "#007bff" }} />
            </div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography component="h2" variant="h5">
                Sign Up
              </Typography>
            </div>

            {errors.fname ? (
              <Message msg={errors.fname} msg_type="error" />
            ) : errors.lname ? (
              <Message msg={errors.lname} msg_type="error" />
            ) : errors.email ? (
              <Message msg={errors.email} msg_type="error" />
            ) : errors.password ? (
              <Message msg={errors.password} msg_type="error" />
            ) : (
              ""
            )}
            <div style={{ marginTop: "5px" }}>
              <form method="post" onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  seterror
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                  autoFocus
                />
                <TextField
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  seterror
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
                <TextField
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  seterror
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  seterror
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {/* <FormControlLabel
                  control={<Checkbox value="receiveUpdates" color="primary" />}
                  label="I want to receive inspiration, marketing promotions, and updates via email."
                  className="mb-3"
                /> */}
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
                    type="submit"
                    variant="contained"
                    color="primary"
                    mt={2}
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
              <Typography variant="body2" mt={3}>
                Already have an account? <Link href="/signin">Sign in</Link>
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
