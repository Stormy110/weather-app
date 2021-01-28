import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import ZipCodeButton from './components/ZipCodeButton';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [zip, setZip] = useState('');
  

  const fetchWeatherApi = (zipCode) => {
    fetch(`api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=043f23db3ceba860d9c6c3e02a173fee`)
    .then(response => response.json())
    .then(data => console.log(data))
   
  };

  return (
    <div className="App">
    <Header />
    <Search setZip={setZip} zip={zip}/>
    <ZipCodeButton fetchWeatherApi={fetchWeatherApi} zip={zip} />
    <WeatherContainer />
    </div>
  );
}

export default App;
