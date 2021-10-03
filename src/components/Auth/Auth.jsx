import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import Icon from './Icon.jsx';

import useStyles from './styles.js'
import Input from './Input.jsx';
import { signIn, signUp } from '../../actions/auth.js';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function Auth() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    
     if(isSignUp) {
       dispatch(signUp(formData, history));
     } else {
       dispatch(signIn(formData, history))
     }
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    handleShowPassword(false);
  }

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token }});

      history.push('/');

    } catch (error) {
      console.log(error);
    }
  }
  const googleFailure = () => {
    console.log('Google Sign in unsuccessful');
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        className={classes.paper}
      >
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
          <Grid
            container
            spacing={2}
          >
            {
              isSignUp && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )
            }
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && <Input 
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin 
            clientId="778033987435-1k2h1g6mmtbsqhm7d2vl85ctgivtht4e.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                className={classes.googleButton}
                style={{backgroundColor:'#DB4437', color: '#fff'}}
                fullWidth
                onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Sign in with Google
              </Button>
                )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
              />
          <Grid
            container 
            justifyContent="center"
          >
            <Grid item>
              <Button
                onClick={switchMode}
                style={{textDecoration: "underline", textTransform: 'none'}}
              >
                {isSignUp ? 'Already have an account?' : 'Create an account'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
