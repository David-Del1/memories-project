import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    paddingTop: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  card: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: '0px',
    height: '100%',
    boxShadow: '0px 2px 5px -2px black'
    
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  message: {
    paddingBottom: '20px',
  }
});