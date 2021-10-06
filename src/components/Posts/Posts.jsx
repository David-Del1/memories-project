import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles.js';

function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector(state => state.posts);
  const classes = useStyles();

  // if(!posts?.length && !isLoading) return <h1>No Posts to Show.</h1>
  
  return (
    isLoading
      ? <CircularProgress /> 
      : (
        <Grid 
          className={classes.container} 
          container  
          spacing={3}
        >
          {posts?.map(post => (
            <Grid key={post._id} 
              item
              xl={4}
              md={6}
              sm={12}
            >
              <Post post={post} setCurrentId={setCurrentId} />

            </Grid>
          ))}
        </Grid>
      )
  )
}

export default Posts;
