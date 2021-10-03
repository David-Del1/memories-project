import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { 
  Container, Grid, Grow, 
  Paper, AppBar, TextField, Button 
} from '@material-ui/core';
import Form from '../Forms/Form';
import Posts from '../Posts/Posts';

import useStyles from './styles.js';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination/Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page');
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if(search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchPost();
    }
  }

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter(tag => tag !== tagToDelete));

  

  return (
    <Grow in className={classes.mainContent}>
        <Container maxWidth="xl">
          <h1 style={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.2',
            width: '75%',
            paddingBottom: '5px',
            color: 'rgba(0, 0, 0, 0.7)'
          }}>
            Recent Posts
          </h1>
          <Grid
            className={classes.mainContainer}
            container 
            justifyContent="space-between" 
            alignItems="stretch" 
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid 
              item 
              xs={12} 
              sm={6}
              md={9}
            >
              <Posts 
                setCurrentId={setCurrentId} 
              />
            </Grid>
            <Grid 
              item 
              xs={12} 
              sm={6}
              md={3} 
            >
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField 
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  onKeyPress={handleKeyPress}
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                  style={{
                    margin: '10px 0px',
                  }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  color="primary"

                >
                  Search
                </Button>
              </AppBar>
              <Form 
                currentId={currentId} 
                setCurrentId={setCurrentId}
              />
              <Paper
                className={classes.pagination}
                elevation={6}
              >
                <Pagination />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home;