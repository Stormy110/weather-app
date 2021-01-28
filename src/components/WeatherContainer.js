import React from 'react';
import WeatherCard from './WeatherCard'

function WeatherContainer() {
    return (
        <div className="container">
            This will be the weather card container
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    )
}

export default WeatherContainer;