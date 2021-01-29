import React from 'react';
import WeatherCard from './WeatherCard'

function WeatherContainer(props) {
    console.log(props.weatherData)
    const data = props.weatherData;
    
    return (
        <div className="container">
            This will be the weather card container
            {/* <WeatherCard fetchWeatherApi={props.fetchWeatherApi} drawWeather={props.drawWeather}/> */}
            <ul>
                {
                    data.map(w => (
                        <li className={w.weather[0].description.indexOf('rain') > 0 ? 'rainy' : w.weather[0].description.indexOf('sunny') > 0 ? 'sunny' : w.weather[0].description.indexOf('cloud') > 0 ? 'cloudy' : 'blank'}><WeatherCard key={w.coord.lon + w.coord.lat} description={w.weather[0].description} name={w.name} temp={Math.round(parseFloat(w.main.temp)) + ' F'}/></li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default WeatherContainer;