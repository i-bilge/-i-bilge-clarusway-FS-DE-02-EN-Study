import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

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
  const [showAddTask, setShowAddTask] = useState(false)

  const toggleShow = () => setShowAddTask(!showAddTask)

  const addTask = (newTask)=>{
    const id = Math.floor(Math.random()*100)+1
    const addNewTask = {id, ...newTask }
    setTasks([...tasks, addNewTask])
  }

  const deleteTask = (deletedTaskId) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== deletedTaskId
      )
    )
  }

  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map(
        (task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task
      )
    )
  }

  return (
    <div className="container">
      <Header
      title = "TASK TRACKER"
      shoxAddTask={showAddTask}
    toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}
      
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/>
      ) : (
        <p style={{ textAlign: "center"}}>NO TASKS TO SHOW</p>
      )}

    </div>
  );
}

export default App;
