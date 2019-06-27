import React,{Component} from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
    	currentWeather:'',
      currentSunset:''
    };
  }

  async componentDidMount(){
  	const weatherAPI = `https://api.weatherbit.io/v2.0/current/?key=24231ebf01444bd192758ea25617af52&lat=43.85012&lon=79.03288`
  	const response = await fetch(weatherAPI);
  	const json = await response.json();
		this.setState(
      {currentWeather:json.data[0].weather.description,
        currentSunset:json.data[0].sunset
      });


    }


  render(){
    const {currentWeather,currentSunset} = this.state;
    return (
      <div>
    	 <WeatherCard displayWeather = {currentWeather} sunset1={currentSunset}/>


      </div>
  	);



  }
  
}

export default App;
