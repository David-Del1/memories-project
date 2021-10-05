import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0 0 0 0',
    borderBottom: '1px solid black',
    BackgroundColor: 'rgba(0,183,255, 1)'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }

  }
}));

