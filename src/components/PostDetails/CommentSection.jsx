import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js';
import { commentPost } from '../../actions/posts.js';

function CommentSection({ post }) {
  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const commentsRef = useRef();

  const handleClick = async () => {
    const commentPosting = `${user?.result?.name}: ${comment}`;

    const newComments = await dispatch(commentPost(commentPosting, post._id));

    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({ 
      behavior: "smooth",
      block: "nearest",
      inline: "start" 
    });
  }
  
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
         
        <div className={classes.commentsInnerContainer}>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}: </strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      </div>
      {user ? (
        <div style={{ width: '80%'}}>
        <Typography gutterBottom variant="h6">
          Write a comment
        </Typography>
        <TextField
          fullWidth
          rows={4}
          variant="outlined"
          label="Comment"
          multiline
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Button 
          style={{ marginTop: '10px'}} 
          fullWidth 
          disabled={!comment} 
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Send
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default CommentSection;
