import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core';

import useStyles from './styles.js';

function NavBar() {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar 
        className={classes.appBar} 
        colorPrimary
      >
        <div 
          style={{display: 'flex', flexDirection: 'column'}}
        >
          <Typography 
            className={classes.heading} 
            variant="h2" 
            align="center"
          >
            Memre
          </Typography>
          <Typography 
            variant="subtitle" 
            align="center"
            style={{paddingBottom: '10px'}}
          >
            Where Memories Live.
          </Typography>

        </div>
        <Toolbar 
          className={classes.toolbar}
        >
          {user ? (
            <div
            className={classes.profile}
          >
            <Avatar 
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.results.name.charAt(0)}
            </Avatar>
            <Typography
              className={classes.userName}
              variant="h6"
            >
              {user.result.name}
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
