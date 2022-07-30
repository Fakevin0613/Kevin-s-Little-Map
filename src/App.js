import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';


import { getPlacesData } from './api'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClick, setChildClick] = useState(null);

    const [places, setPlaces] = useState([]);
    const [isloading, setIsloading] = useState(false);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('0');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, []);

    useEffect(() => {
        setIsloading(true)
        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
                setIsloading(false)
            }
            )
    }, [coordinates, bounds, type]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={places} 
                        childClick={childClick} 
                        isLoading={isloading} 
                        type={type}
                        rating={rating}
                        setType={setType}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClick}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;