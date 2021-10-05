import React from 'react';
import moment from 'moment';
import { Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js';

function PostHeader( {post, setCurrentId} ) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className={classes.postHeader}>
    <div 
      >
      <Typography 
        variant="h6"
      >
        {post.name}
      </Typography>
      <Typography 
        variant="body2"
        style={{ color: 'gray' }}
      >
        {moment(post.createdAt).fromNow()}
      </Typography>
      <div 
      className={classes.overlay2}
    >
      {(user?.result?.googleId === post?.creator 
        || user?.resilt?._id === post?.creator)
        && (
        <Button 
          style={{ color: 'black', zIndex: 1000 }} 
          size="small" 
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>)}
    </div>
    </div>
  </div>
  )
}

export default PostHeader
