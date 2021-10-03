import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Grow } from '@material-ui/core';
import Form from '../Forms/Form';
import Posts from '../Posts/Posts';

import useStyles from './styles.js';
import { getPosts } from '../../actions/posts';

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in className={classes.mainContent}>
        <Container>
          <Grid
            className={classes.mainContainer}
            container 
            justifyContent="space-between" 
            alignItems="stretch" 
            spacing={3}
           
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home;
