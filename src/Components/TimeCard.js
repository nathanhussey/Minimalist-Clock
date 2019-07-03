import React from 'react';
import "./TimeCard.css";

const TimeCard = ({theTime}) => {

	return(
		<div className = "grow ma3 tc dib">
			<h1 className="clock">{theTime}</h1>

		</div>



	)



}
export default TimeCard;