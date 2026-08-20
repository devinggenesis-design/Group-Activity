import { useState } from "react";
import { Button, Alert, Paper, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const usernameDisplay = "admin";
const passwordDisplay = "password123";

const colors = {
  navy: "#2b2d42",
  navySoft: "#5c677d",
  cardBg: "#edf2f4",
  border: "#dcdfe3",
  white: "#ffffff",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (!username && !password) {
      setMessage("Please enter username and password.");
      setMessageType("error");
      return;
    }

    if (username === usernameDisplay && password === passwordDisplay) {
      setMessage("Login successful!");
      setMessageType("success");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password.");
      setMessageType("error");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
    setMessageType("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "30px 15px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          bgcolor: colors.cardBg,
          borderRadius: "16px",
          p: "32px 36px",
          boxSizing: "border-box",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        }}
      >
        {isLoggedIn ? (
          <Stack spacing={3}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "1.45rem",
                color: colors.navy,
              }}
            >
              Logged in successfully!
            </Typography>
            <Alert severity="success">Welcome!</Alert>
            <Button
              onClick={handleLogout}
              color="error"
              variant="outlined"
              sx={{
                py: "11px",
                bgcolor: colors.cardBg,
                fontWeight: 600,
                fontSize: "0.9rem",
                textTransform: "none",
                fontFamily: "sans-serif",
                "&:hover": { bgcolor: "#e2e7ea" },
              }}
            >
              Logout
            </Button>
          </Stack>
        ) : (
          <Stack spacing={0}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "1.45rem",
                color: colors.navy,
                mb: "8px",
              }}
            >
              Login Authentication
            </Typography>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: "0.88rem",
                color: colors.navySoft,
                mb: "24px",
              }}
            >
              Enter your username and password to continue.
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Username"
                variant="outlined"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                sx={{
                  bgcolor: colors.white,
                  borderRadius: "8px",
                  "& .MuiInputBase-root": { height: 46, borderRadius: "8px" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.border,
                  },
                }}
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{
                  bgcolor: colors.white,
                  borderRadius: "8px",
                  "& .MuiInputBase-root": { height: 46, borderRadius: "8px" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.border,
                  },
                }}
              />
            </Stack>

            {message && (
              <Box sx={{ mt: 2 }}>
                <Alert severity={messageType}>{message}</Alert>
              </Box>
            )}

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button
                onClick={handleLogin}
                sx={{
                  flex: 1,
                  py: "11px",
                  bgcolor: colors.navy,
                  color: colors.white,
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "sans-serif",
                  "&:hover": { bgcolor: "#1f2133" },
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  setUsername("");
                  setPassword("");
                  setMessage("");
                  setMessageType("");
                }}
                sx={{
                  flex: 1,
                  py: "11px",
                  bgcolor: colors.cardBg,
                  color: colors.navy,
                  border: `1px solid ${colors.navy}`,
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "sans-serif",
                  "&:hover": { bgcolor: "#e2e7ea" },
                }}
              >
                Clear
              </Button>
            </Stack>
          </Stack>
        )}
      </Paper>
    </Box>
  );
}

export default Login;
