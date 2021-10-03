import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(page);

    console.log(data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error.message);
  }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error({error});
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error(error.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};