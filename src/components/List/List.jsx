import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { useState, useEffect, createRef} from 'react';
import useStyle from './styles';

const List = ({ places, childClick, isLoading, type, rating, setType, setRating}) => {
    const classes = useStyle();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs)
    }, [places]);

    return (
        <div className={classes.container}>
            {isLoading? (
                <div className={classes.loading}>
                    <CircularProgress size = "6rem" className={classes.rollingBar}></CircularProgress>
                </div>
            ) : (
            <>
            <div className={classes.topBar}>
            <Typography variant="h4" className={classes.text}>
                {type[0].toUpperCase() + type.slice(1)}
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.text} >Type</InputLabel>
                <Select className={classes.text} value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem className={classes.text} value="attractions">Attractions</MenuItem>
                    <MenuItem className={classes.text} value="restaurants">Restaurants</MenuItem>
                    <MenuItem className={classes.text} value="hotels">Hotels</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel className={classes.text} >Rating</InputLabel>
                <Select className={classes.text} value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem className={classes.text} value="0">All</MenuItem>
                    <MenuItem className={classes.text} value="2">Rating above 2.0</MenuItem>
                    <MenuItem className={classes.text} value="3">Rating above 3.0</MenuItem>
                    <MenuItem className={classes.text} value="4">Rating above 4.0</MenuItem>
                    <MenuItem className={classes.text} value="5">Rating at 5.0</MenuItem>
                </Select>
            </FormControl>
            </div>

            <Grid container spacing = {2} className={classes.list}>
                {places?.map((place ,i) => (
                    place.name? (
                        (place.rating >= rating)? 
                        (<Grid ref = {elRefs[i]} item key = {i} xs={12}>
                            <PlaceDetails place = {place} selected = {Number(childClick) === i} refProp = {elRefs[i]} />    
                        </Grid> ) : null
                    ) : null
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}

export default List;