import React from 'react';
import './Quote.css'

const Quote = (props) => {

  return (
		<>
			<i class="fas fa-quote-left"></i>
			<i class="fas fa-quote-right"></i>
      <h2>{ props.quote.text}</h2>
      <p> - { props.quote.author}</p>
		</>
	);
}

export default Quote