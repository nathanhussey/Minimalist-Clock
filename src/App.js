import React,{Component} from 'react';
import './App.css';
import '../Components/WeatherCard.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
    	weather:""
    }
  }

  componentDidMount(){
  	async function getWeatherData()
  	{ 
  		let response = await fetch(/api/location/search/?lattlong=43.8509,79.0204);
  		let rawData = await response.json();
  		let locationData = rawData.woeid;
  		let weatherData = locationData.weather_state_name;
		return {this.setState({weather: weatherData})};



  	}


  }


  render(){
  	const {weather} = this.state;
    return (
    <div>
    	<WeatherCard displayWeather = {weather}/>

    </div>
  	);



  }
  
}

export default App;
