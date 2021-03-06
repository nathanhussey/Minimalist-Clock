import React,{Component} from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard.js';
import WeatherCardList from './Components/WeatherCardList.js';
import TimeCard from './Components/TimeCard.js';



class App extends Component {
  constructor() {
    super()
    this.state = {
    	currentWeather:'',
      currentIcon:'',
      sunset:'',
      sunrise:'',
      currentUTC:'',
      currentDate:'',
      weekForcast:[],
      currentTime:'',
      colorMode:''
    };
  }

  async componentDidMount(){
    const APIkey = '24231ebf01444bd192758ea25617af52'
  	const currentWeatherAPI = `https://api.weatherbit.io/v2.0/current/?key=${APIkey}&lat=43.85012&lon=-79.03288`;
    const weekForcastAPI = `https://api.weatherbit.io/v2.0/forecast/daily/?key=${APIkey}&days=7&lat=43.85012&lon=-79.03288`;
  	const response = await fetch(currentWeatherAPI);
  	const json = await response.json();
    const response2 = await fetch(weekForcastAPI);
    const json2 = await response2.json();
    setInterval(this.getTime, 1000);
    setInterval(this.isSunDown,60000);

		this.setState(
      {currentWeather:json.data[0].weather.description,
        currentIcon:json.data[0].weather.icon,
        sunset:json.data[0].sunset,
        sunrise:json.data[0].sunrise,
        currentDate:json2.data[0].datetime,
        weekForcast:json2.data
      });
    this.isSunDown();
  }
  isSunDown=()=>{
    let time = new Date().toLocaleString('en-GB',{ timeZone: 'UTC',hour: '2-digit', minute:'2-digit'}); 
    let timeSplit = time.split(':').join('.');
    let sunsetSplit = this.state.sunset.split(':').join('.');
    let sunriseSplit=this.state.sunrise.split(':').join('.');
    if (parseInt(sunsetSplit)<parseInt(timeSplit) && parseInt(timeSplit)<parseInt(sunriseSplit)){
      this.setState({colorMode:'darkMode'})
    }else{this.setState({colorMode:'lightMode'})}



  };
  getTime=()=>{
    let currentTime = new Date();
    let currentSecond = currentTime.getSeconds();
    let currentMinute = currentTime.getMinutes();
    let currentHour = currentTime.getHours();
    let printTime;
    if (currentMinute < 10){
      currentMinute = "0" + currentMinute;
    }
    if (currentSecond < 10){
      currentSecond = "0" + currentSecond;
    }
    printTime =` ${currentHour} : ${currentMinute} : ${currentSecond}`;
    this.setState({currentTime:printTime})

  };

  render(){
    const {currentWeather,currentIcon,currentDate,weekForcast,currentTime,colorMode} = this.state;
    let theme = '';
    if (colorMode === "darkMode"){
      theme = 'dark-theme'

    }else{theme= 'light-theme'};
    return (
      <div className={theme}>
        <div className='flex justify-center'>
          <WeatherCard descrip={currentWeather} icon={currentIcon} day={currentDate} />
        </div>
        <div className='flex justify-center'>
          <TimeCard theTime={currentTime} />
        </div>
        <div className='flex justify-center'>
          <WeatherCardList weatherData={weekForcast}/>
        </div>


      </div>
  	);



  }
  
}

export default App;
