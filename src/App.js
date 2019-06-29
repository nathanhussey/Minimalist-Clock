import React,{Component} from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard.js';
import WeatherCardList from './Components/WeatherCardList.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
    	currentWeather:'',
      currentIcon:'',
      currentDate:'',
      weekForcast:[]
    };
  }

  async componentDidMount(){
    const APIkey = '24231ebf01444bd192758ea25617af52'
  	const currentWeatherAPI = `https://api.weatherbit.io/v2.0/current/?key=${APIkey}&lat=43.85012&lon=79.03288`;
    const weekForcastAPI = `https://api.weatherbit.io/v2.0/forecast/daily/?key=${APIkey}&days=7&lat=43.85012&lon=79.03288`;
  	const response = await fetch(currentWeatherAPI);
  	const json = await response.json();
    const response2 = await fetch(weekForcastAPI);
    const json2 = await response2.json();



		this.setState(
      {currentWeather:json.data[0].weather.description,
        currentIcon:json.data[0].weather.icon,
        currentDate:json2.data[0].datetime,
        weekForcast:json2.data

      });


  }


  render(){
    const {currentWeather,currentIcon,currentDate,weekForcast} = this.state;
    return (
      <div>
        <WeatherCard descrip={currentWeather} icon={currentIcon} day={currentDate} />

        <WeatherCardList weatherData={weekForcast}/>


      </div>
  	);



  }
  
}

export default App;
