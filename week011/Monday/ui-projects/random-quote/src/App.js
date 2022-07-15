import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Quote from './components/Quote/Quote';
import quotes from './data';


function App() {

  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const max = quotes.length - 1; 
    let newIndex = Math.floor(Math.random()*(max-0))
    setQuote(quotes[newIndex]);
  }

  return (
		<div className="App">
			<Card>
        <Quote quote={ quote} />
      </Card>
      <Button onClick={ randomQuote} />
		</div>
	);
}

export default App;
