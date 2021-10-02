import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core';

import useStyles from './styles.js';

function NavBar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log(user);

  useEffect(() => {
    const toek = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [])

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
            Memre
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
            >
              Logout
            </Button>
          </div>
          ) 
          :  (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
  )
}

export default NavBar
