import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    width: '100%',
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 0 5px 0 black',
    BackgroundColor: 'rgba(0,183,255, 1)'
  },
  heading: {
    marginTop: '10px',
    paddingLeft: '15px',
    textShadow: '0px 1px 0px black',
    fontFamily: 'Oleo Script, cursive',
    fontSize: '3.5rem',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    },

  },
  mainContent: {
    marginTop: '180px',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
  
    
  },
  profile: {
    display: 'flex',
    // width: '360px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    marginRight: '2px',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    backgroundColor: '#fff',
    color: '#3f51b5',
    textShadow: '0 0px 0px black',
    boxShadow: '0px 0px 2px 0px black'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '10px'
  },
  [theme.breakpoints.down('md')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    },
    purple: {
      
    },
    userName: {
      display: 'none',
    },
    logout: {
      marginLeft: '20px'
    },
    heading: {
      fontSize: '2.4rem',
      paddingLeft: '10px',
    },
    logo: {
      width: '40px',
      height: '40px',
    },
    subtitle: {
      fontSize: '0.8rem'
    },
  },
  logout: {
    width: '100px',
    marginLeft: '40px'

  }
 
}));