import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import ZipCodeButton from './components/ZipCodeButton';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [zip, setZip] = useState('');
  const [weatherData, setWeatherData] = useState([])
  

 function fetchWeatherApi (zipCode){
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=043f23db3ceba860d9c6c3e02a173fee`)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
       console.log(data)
       
       const results = [
         ...weatherData,
         data
       ]
       setWeatherData(results)
      //  drawWeather(data)
       console.log(results)
  })
  };

  // function drawWeather( d ) {
  //   var temp = Math.round(parseFloat(d.main.temp));
  //   document.getElementById('description').innerHTML = d.weather[0].description;
  //   document.getElementById('temp').innerHTML = temp + '&deg; F';
  //   document.getElementById('location').innerHTML = d.name;
  // }

  return (
    <div className="App">
    <Header />
    <Search setZip={setZip} zip={zip}/>
    <ZipCodeButton fetchWeatherApi={fetchWeatherApi} zip={zip} />
    <WeatherContainer weatherData={weatherData} fetchWeatherApi={fetchWeatherApi} />
    </div>
  );
}

export default App;
