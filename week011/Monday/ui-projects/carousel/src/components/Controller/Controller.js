import React from 'react'; 
import './Controller.css';

const Controller = ({ icon, size, color, position, action}) => {
  return (
		<i
			className={icon}
			style={{
				fontSize: size,
				color,
				top: position.top,
				left: position.left,
				right: position.right,
				bottom: position.bottom,
			}}
			onClick={action}></i>
	);
}

export default Controller