
import './App.css';
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';
import Carousel from './components/Carousel/Carousel';
import React, { useState} from 'react'

const data = [image1, image2, image3, image4, image5, image6];

function App() {

  const [index, setIndex] = useState(3);
  const [image, setImage] = useState(data[index]);


  const nextImage = () => { 
    if (index <data.length-1) {
      setImage(data[index + 1]);
      setIndex(prevIndex => prevIndex + 1);
    } else { 
      setImage(data[0]);
		  setIndex(0);
    }
  }

  const prevImage = () => { 
    if (index >0) {
      setImage(data[index - 1]);
      setIndex(prevIndex => prevIndex - 1);
    } else { 
      setImage(data[data.length-1]);
		  setIndex(data.length-1);
    }
  }

  return (
    <div className="App">
      <img src={ image} className="BackImage"/>
      <Carousel src={ image } next={ nextImage } prev={ prevImage} />
		</div>
	);
}

export default App;
