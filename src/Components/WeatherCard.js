import React from 'react';


const WeatherCard = ({descrip,icon,day}) => {
	let date = new Date(day);
	let dayOfWeek =date.getDay();
	let theDay='';
	switch (dayOfWeek) {
	  case 6:
	    theDay = "Sunday";
	    break;
	  case 0:
	    theDay = "Monday";
	    break;
	  case 1:
	     theDay = "Tuesday";
	    break;
	  case 2:
	    theDay = "Wednesday";
	    break;
	  case 3:
	    theDay = "Thursday";
	    break;
	  case 4:
	    theDay = "Friday";
	    break;
	  case 5:
	    theDay = "Saturday";
	    break;
	  default: ;
  

	};

	return (
		<div className = "br3 grow tc w-15 dib ma4">
			<h1>{theDay}</h1>
			<img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt = "weatherIcon"/>

			<h3>{descrip}</h3>





		</div>
	);

};

export default WeatherCard;