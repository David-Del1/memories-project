import Posts from "../components/Posts/Posts";

export default (state, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return Posts;
    default:
      return Posts;
  }
}