import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Container } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles.js';
import { deletePost, likePost } from '../../../actions/posts.js';
import PostHeader from './PostHeader/PostHeader.jsx';

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const Likes = () => {
    if(post.likes.length > 0) {
      return post.likes.find(like => like === (user?.result?.googleId || user?.results?._id))
        ? (
          <>
            <ThumbUpAltIcon
              fontSize="small"
            />
            &nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }
          </>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        )
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  }

  const openPost = () => {
    history.push(`/posts/${post._id}`)
  }

  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
      // border: '1px solid red',
      padding: '0'
    }} 
    > 
    <PostHeader post={post} setCurrentId={setCurrentId} />  
    <Card className={classes.card}>
      <ButtonBase
        component="span"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia 
          className={classes.media} 
          image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
          title={post.title}
          style={{ transform: 'translateY(-10%)' }}
        />
        <div 
          className={classes.details}
        >
          <Typography 
          className={classes.title} 
          gutterBottom 
          variant="h5" 
          component="h2"
        >
          {post.title}
        </Typography>
        </div>
        <CardContent>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p"
            className={classes.message}
          >
            {post.message}
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions 
        className={classes.cardActions}
      >
        <Button 
          size="small" 
          color="primary" 
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
          {(user?.result?.googleId === post?.creator 
            || user?.resilt?._id === post?.creator)
            && (
            <Button 
              size="small" 
              color="primary" 
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon 
                fontSize="small" 
              /> 
                Delete
            </Button>

            )}
      </CardActions>
    </Card>
    </Container>
  )
}

export default Post
