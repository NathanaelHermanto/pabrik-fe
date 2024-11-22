import React from "react";
import { 
  Button, 
  TextField, 
  Box, 
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  CircularProgress
 } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authenticate } from "../services/api";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authenticate({ email, password });
      const { token, firstname, lastname, email: userEmail } = response;
      login({ firstname, lastname, email: userEmail }, token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="background.default"
        p={3}
    >
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection="column"
                gap={3}
                maxWidth={400}
                padding={4}
                boxShadow={3}
                borderRadius={2}
                bgcolor="background.paper"
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Pabrik Login
                </Typography>
                
                <FormControl fullWidth>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        required
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        required
                    />
                </FormControl>

                <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={loading} // Disable button during loading
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null} // Add spinner in the button
                    >
                        {loading ? 'Logging In...' : 'Login'}
                    </Button>
            </Box>
        </form>
    </Box>
);};

export default Login;
