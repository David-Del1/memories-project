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
    textShadow: '0px 1px 0px black',
    fontFamily: 'Oleo Script, cursive',
    fontSize: '3rem',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    },

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
    paddingLeft: '15px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    marginRight: '2px',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
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
    },
    logo: {
      width: '40px',
      height: '40px',
    },
    subtitle: {
      fontSize: '0.8rem',
    },
  },
  logout: {
    width: '100px',
    marginLeft: '40px'

  }
 
}));