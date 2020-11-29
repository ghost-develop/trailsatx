import React from 'react';

const axios = require('axios');

const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
    });
}
getCurrentLocation();