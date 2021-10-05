import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  postHeader : {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white', 
    padding: '10px', 
    boxShadow: '0px 0px 4px -2px black', 
    borderRadius: '2px 2px 0 0', 
    zIndex: 1000,
    cursor: 'pointer',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
})
