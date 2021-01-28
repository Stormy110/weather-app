import React from 'react';

function ZipCodeButton(props) {
    return (
        <button onClick={()=>{
            props.fetchWeatherApi(props.zip)
            }}>
        Search
        </button>
    )
}

export default ZipCodeButton;