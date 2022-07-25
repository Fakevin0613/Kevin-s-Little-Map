import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { useState } from 'react';
import useStyle from './styles';

const List = ({ places }) => {
    const classes = useStyle();
    const [type, setType] = useState('restaurant');
    const [rating, setRating] = useState('0');

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Where are you heading to?
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>What you are looking for?</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurant">Restaurant</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="0">All</MenuItem>
                    <MenuItem value="2">Rating above 2.0</MenuItem>
                    <MenuItem value="3">Rating above 3.0</MenuItem>
                    <MenuItem value="4">Rating above 4.0</MenuItem>
                    <MenuItem value="4.5">Rating above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing = {3} className={classes.list}>
                {places?.map((place ,i) => (
                    <Grid item key = {i} xs={12}>
                        <PlaceDetails place = {place} />
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}

export default List;