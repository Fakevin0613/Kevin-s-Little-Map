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
                    <CircularProgress size = "6rem"></CircularProgress>
                </div>
            ) : (
            <>
            <div className={classes.topBar}>
            <Typography variant="h4">
                Searching for {type}?
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Where are you going?</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="attractions">Attractions</MenuItem>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="0">All</MenuItem>
                    <MenuItem value="2">Rating above 2.0</MenuItem>
                    <MenuItem value="3">Rating above 3.0</MenuItem>
                    <MenuItem value="4">Rating above 4.0</MenuItem>
                    <MenuItem value="5">Rating at 5.0</MenuItem>
                </Select>
            </FormControl>
            </div>

            <Grid container spacing = {3} className={classes.list}>
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