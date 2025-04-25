import React, {useState} from 'react'
import axios from 'axios'
import './App.css'

const weatherapp = () =>{
const [city, setcity] = useState('');
const [weather, setweather] = useState(null);

const fetchweather = async() => {
  if(!city){
    alert('Enter a valid city name');
  }
  const api = '17652006d301c86da1184e8a31997ea0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  try{
    const response = await axios.get(url);
    setweather(response.data);
  }
  catch(error){
    alert("error fetching the data", error);
  }
 }

return(
    <div className="weather-app">
      <h1 className='heading'>Weather App</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/678/678310.png" alt="image" className='image-icon'/>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                />
                <button onClick={fetchweather}>Get Weather</button>
            </div>

            {weather && (
                <div className="output-container">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        className="weather-icon"
                    />
                </div>
            )}
        </div>
  );
};

export default weatherapp;