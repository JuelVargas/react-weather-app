import React from 'react'
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather'
import Forecast from './components/forecast/Forecast'
import { WeatherApiUrl, WeatherApiKey } from './api'
import { useState } from 'react'



const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`);
    const forecastFetch = fetch(`${WeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`);

    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err))

  }
  
  return (
    <div className='w-full max-w-[1080px] mx-auto my-4'>

      <div className="w-11/12 sm:w-4/6 lg:w-3/6 mx-auto">
        <Search
          onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}

        {forecast &&<Forecast data={forecast}/>}
      </div>
    </div>
  )
}

export default App