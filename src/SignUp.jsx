import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const SignUp = () => {
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
            <LockIcon style={{ fontSize: "48px", color: "#007bff" }} />
            <Typography component="h2" variant="h5" mt={4}>
              Sign Up
            </Typography>
            <Alert severity="error" mt={2}>
              Sign up error message goes here.
            </Alert>
            <div style={{ marginTop: "20px" }}>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="receiveUpdates" color="primary" />}
                  label="I want to receive inspiration, marketing promotions, and updates via email."
                  className="mb-3"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  mt={2}
                >
                  Sign Up
                </Button>
              </form>
              <Typography variant="body2" mt={3}>
                Already have an account? <Link href="#">Sign in</Link>
              </Typography>
              <Typography variant="body2" mt={2}>
                Copyright © Your Website 2024
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
