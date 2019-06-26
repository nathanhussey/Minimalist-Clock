import React,{Component} from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
    	weather:[]
    };
  }

  async componentDidMount(){
  	const weatherAPI = `https://api.weatherbit.io/v2.0/current/?key=24231ebf01444bd192758ea25617af52&lat=43.70011&lon=-79.4163`
  	const response = await fetch(weatherAPI);
  	const json = await response.json();
		this.setState({weather:json});


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
