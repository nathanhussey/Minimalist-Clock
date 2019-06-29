import React from 'react';


const WeatherCard = ({descrip,icon,day}) => {
	let date = new Date(day);
	let dayOfWeek =date.getDay();
	let theDay='';
	switch (dayOfWeek) {
  case 0:
    theDay = "Sunday";
    break;
  case 1:
    theDay = "Monday";
    break;
  case 2:
     theDay = "Tuesday";
    break;
  case 3:
    theDay = "Wednesday";
    break;
  case 4:
    theDay = "Thursday";
    break;
  case 5:
    theDay = "Friday";
    break;
  case 6:
    theDay = "Saturday";
    break;
  default: ;
  

	}

	return (
		<div className = "bg-light-blue br3 grow ma3 pa3 tc dib">
			<h1>{theDay}</h1>
			<img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt = "weatherIcon"/>

			<h3>{descrip}</h3>





		</div>
	);

};

export default WeatherCard;