import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '140px',
  },
  mapContainer: {
    height: '99vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }, margin: 'auto',
  },
  mapimage: {
    cursor: 'pointer',
    width: '120px',
    height: '120px',
    margin: 'auto',
  },
  maptitle: {
    textAlign: 'center',
    margin: 'auto',
  },
  maprating: {
    margin: 'auto',
  },
}));