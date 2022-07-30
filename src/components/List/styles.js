import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), width: 190, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    height: '99vh',
    userSelect: 'none',
  },
  list: {
    overflow: 'auto',
    height: '77vh',
  },
  topBar: {
    height: '20vh',
  }
}));