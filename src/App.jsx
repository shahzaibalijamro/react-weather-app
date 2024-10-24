import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard';
function App() {
  const [weatherArr, setweatherArr] = useState([]);
  const [indicator, setIndicator] = useState('Searched weather will appear here!')
  const input = useRef();
  const [inputVal,setInputVal] = useState(false);
  useEffect(()=>{
    if (inputVal) {
      axios(`https://api.weatherapi.com/v1/current.json?key=8ef41b56b9ea40aa9d7155732241206&q=${inputVal}&aqi=no`)
      .then(res => res.data)
      .then(res => {
        setweatherArr((previousVal) => [res, ...previousVal]);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        setIndicator('No such city exists!')
      })}
    }, [inputVal]); 
  function getWeather(e) {
    e.preventDefault();
    setInputVal(input.current.value);
    input.current.value = '';
  }
  return (
    <div className='px-3'>
      <h1 className="text-3xl my-14 text-center font-bold">
        Weather App
      </h1>
      <form onSubmit={getWeather} className='flex items-center justify-center gap-3'>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" ref={input}/>
        <button type='submit' class="btn btn-outline">Get Weather</button>
      </form>
      <div className='my-10 flex flex-wrap justify-center items-center gap-x-5'>
        {weatherArr.length > 0 ? weatherArr.map((item,index)=>{
          let initialTime = item.location.localtime;
          let finalTime = initialTime.slice(11);
          return (
            <>
            <WeatherCard 
              time={finalTime} 
              icon={`https:${item.current.condition.icon}`} 
              temperature={item.current.temp_c} 
              name={item.location.name} 
              key={index} 
              wind={item.current.wind_kph}
              humidity={item.current.humidity}
              feel={item.current.feelslike_c}
              />
              </>
          )
        }): <p className='text-center'>{indicator}</p>}
      </div>
    </div>
  )
}

export default App
