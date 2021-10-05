import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { getSinglePost, getPostsBySearch } from '../../actions/posts.js';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import useStyles from './styles.js';



function PostDetails() {
  const { post, posts, isLoading } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const history = useHistory()
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePost(id))
  }, [id]);

  useEffect(() => {
    if(post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }))
    }
  }, [post]);

  if(!post) return null;

  if(isLoading) {
    return <Paper elevation={0} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>
  }

  const recommendedPosts = posts?.filter(({_id}) => _id !== post._id);

  const openPost = (_id) => history.push(`/posts/${_id}`);

  return (
    <Paper 
      style={{
         margin:'160px 0 0px 0px', padding: '15px', 
         borderRadius: '2px' }} 
      elevation={0}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography 
            variant="h6"
            style={{ color: 'gray', padding: '10px 0' }}
          >
            {post.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map(tag => `#${tag} `)}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography>Realtime Chat = Coming soon!</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">Comments - Coming soon!</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile} alt="" />
        </div>
      </div>
      {recommendedPosts?.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">Other posts you may like:</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(({title, message, name, likes, selectedFile, _id}) => (
                <div 
                  className={classes.recommendedPostsItem}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                  >
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ color: 'gray' }}
                  >
                    {name}
                  </Typography>
                  <img style={{ padding: '7px 0'}}src={selectedFile} width="200px" alt="" />
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                  >
                    {message}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ display: 'flex', alignItems: 'center', opacity: 0.6 }}
                  >
                    <ThumbUpAltOutlined fontSize="small" /> &nbsp; {likes.length}
                  </Typography>
                  
                </div>
              ))}
            </div>
          
        </div>
      )}
    </Paper>
  )
}

export default PostDetails;
