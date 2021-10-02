import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles.js'

function Auth() {
  const classes = useStyles();

  const isSignUp = false;

  const handleSubmit = () => {

  }

  const handleChange = () => {
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography 
          variant="h5"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid>
            {
              isSignUp && (
                <>
                  <Grid xs={6} md={12}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      handleChange={handleChange}
                      autoFocus
                      xs={6}
                    >
                    </TextField>
                  </Grid>
                  <Grid xs={6} md={12}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      handleChange={handleChange}
                      autoFocus
                      xs={6}
                    >
                    </TextField>
                  </Grid>
                </>
              )
            }
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
