// import React from 'react';
import { TextField, Button, Link, Grid, Box, Typography, Container } from '@mui/material';

function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height:"80vh",
          border:"1px solid #B5B5B5",
          
        }}
      >
      
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            mt: 1,
            width: '100%',
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 2,background: "rgb(211, 135, 74)" }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{color:"rgb(211, 135, 74)",textDecoration:"none"}}>
                Forgot your password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" sx={{color:"rgb(211, 135, 74)",textDecoration:"none"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
