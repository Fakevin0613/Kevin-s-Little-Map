import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles.js';

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography>Site by Qinyang Ke (Kevin)</Typography>
            <Typography>University of Waterloo, Waterloo ON, Canada</Typography>
            <Typography>This site is for learning purposes only.</Typography>
        </div>

    )
}

export default Footer