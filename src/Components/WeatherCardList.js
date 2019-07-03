import React from 'react';
import WeatherCard from './WeatherCard.js';

const WeatherCardList = ({weatherData}) =>{

	return(
		<div>
			{
			 weatherData.map((info, i) => {
			 	if (i === 0){return null}
			 	else{
			 		return(
			 			<WeatherCard 
			 				key ={weatherData[i].moonrise_ts}
			 				descrip = {weatherData[i].weather.description}
			 				icon={weatherData[i].weather.icon}
			 				day ={weatherData[i].datetime}

			 			/>
			 	)}		
			 })

			}

		</div>

	);


}
export default WeatherCardList;