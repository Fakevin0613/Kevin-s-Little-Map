import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((isMobile) => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '140px',
  },
  mapContainer: {
    height: '94vh', width: '100%', padding: '20px',
  },
  markerContainer: {
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, '&:hover': { zIndex: 2 }, 
    marginLeft: 'auto',
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