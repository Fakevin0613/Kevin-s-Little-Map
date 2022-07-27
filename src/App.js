import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';


import { getPlacesData } from './api'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [coordinates, setCoordinates] = useState();
    const [bounds, setBounds] = useState({});
    const [childClick, setChildClick] = useState(null)

    const [places, setPlaces] = useState([]);
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, []);

    useEffect(() => {
        setIsloading(true)
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
                setIsloading(false)
            }
        )
    }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places} childClick = {childClick} isLoading = {isloading}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked = {setChildClick}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;