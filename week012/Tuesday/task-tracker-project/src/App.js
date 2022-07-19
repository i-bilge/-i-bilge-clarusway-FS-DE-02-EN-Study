import './App.css';
import { useState } from 'react';

function App() {
  //TaskState
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: "Study Reacts Pre-class Notes",
      day: "July 20th, 11:30AM",
      isDone: false
    },
    {
      id: 2,
      text: "Repeat yesterday",
      day: "July 20th, 12:30AM",
      isDone: false
    },
    {
      id: 3,
      text: "Attend class",
      day: "July 20th, 14:30AM",
      isDone: true
    }
  ])
//Show task button state
  const [showTask, setShowTask] = useState(false)

  const toggleShow = () => setShowTask(!showTask)



  return (
    <div className="container">
      
    </div>
  );
}

export default App;
