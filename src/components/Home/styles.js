import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    width: '100%',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0 0 0 0',
    borderBottom: '1px solid black',
    BackgroundColor: 'rgba(0,183,255, 1)'
  },
  heading: {
    paddingLeft: '15px',
    color: 'whitesmoke',
    textShadow: '0px 2px 0px black',
    fontFamily: 'Oleo Script, cursive',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }

  },
  mainContent: {
    marginTop: '120px',
  }
}));