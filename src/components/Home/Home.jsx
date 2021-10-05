import React, { useState } from 'react';
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
import { getPostsBySearch } from '../../actions/posts';
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
  const page = query.get('page') || 1;
  // const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

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
        <Container maxWidth="xl" 
      >
          
          <Grid
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
              
            </Grid>
          </Grid>
          <Paper
                className={classes.pagination}
                elevation={6}
                style={{
                  boxShadow: 'none',
                  backgroundColor: 'whitesmoke',
                  width: '50%',
                  justifySelf: 'center',
                  padding: '50px 0',
                  margin: 'auto',
                }}
              >
                <Pagination page={page} />
              </Paper>
        </Container>
      </Grow>
  )
}

export default Home;
