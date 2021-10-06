import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  recommendedPostsItem: {
    width: '300px', overflowX: 'scroll', margin: '10px', padding: '10px', cursor: 'pointer', boxShadow: '0px 0px 6px -1px black', borderTop: '8px solid steelblue', borderRadius: '5px', position: 'relative',
    height: '360px',

  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  
}));