import React from 'react'; 
import Controller from '../Controller/Controller';
import './Carousel.css';

const Carousel = (props) => {
  return (
		<div className="Carousel">
			<img src={props.src} />
			<Controller
        size={ 50 }
        color={ "#eee" }
        icon={ "fas fa-chevron-circle-left" }
        position={ { top: "40%", left: "10px" } }
        action={ props.prev}
			/>
			<Controller
				size={50}
				color={"#eee"}
				icon={"fas fa-chevron-circle-right"}
				position={{ top: "40%", right: "10px" }}
				action={props.next}
			/>
		</div>
	);
}

export default Carousel