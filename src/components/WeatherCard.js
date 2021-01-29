import React from 'react';

function WeatherCard(props) {
 

    return (
        <div className="card">
            <div id='weather'>
                <div id='description'>{props.description}</div>
                <h1 id='temp'>{props.temp}</h1>
                <div id='location'>{props.name}</div>
            </div>
            <br/>
        </div>
    )
}

export default WeatherCard;