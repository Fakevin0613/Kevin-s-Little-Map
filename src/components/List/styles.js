import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: { width: 160, marginRight: '30px',
  },
  loading: {
    height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '20px',
    userSelect: 'none',
  },
  list: {
    marginTop: '20px',
    overflow: 'auto',
    height: `calc(100vh - 150px)`,
  },
  rollingBar:{
    color: '#ffffff',
  },
  text:{
    color: '#374785',
  },
}));