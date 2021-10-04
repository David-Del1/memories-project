import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';


import useStyles from './styles.js';

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const location = useLocation();

  const logOut = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodedToken = jwtDecode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line
  }, [location])

  

  return (
    <AppBar 
        className={classes.appBar} 
      >
        <div
          className={classes.brandContainer}
        >
          
          <Typography 
            className={classes.heading} 
            variant="h2" 
            align="center"
            component={Link}
            to="/"
          >
            <div className={classes.logo}>M</div>emre
          </Typography>
          <Typography 
            variant="subtitle2" 
            align="center"
            style={{paddingBottom: '10px'}}
            component={Link}
            to="/"
          >
            Where Memories Live.
          </Typography>
         
        </div>
        <Toolbar 
          className={classes.toolbar}
        >
          {user?.result ? (
            <div
            className={classes.profile}
          >
            <Avatar 
              className={classes.purple} 
              alt={user?.result.name} 
              src={user?.result.imageUrl}
            >
                {user?.result.name.charAt(0)}
              </Avatar>
            <Typography
              className={classes.userName}
              variant="h6"
            >
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logOut}
            >
              Log out
            </Button>
          </div>
          ) 
          :  (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              style={{backgroundColor: 'aqua' }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
  )
}

export default NavBar
