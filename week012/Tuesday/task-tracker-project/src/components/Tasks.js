import Task from "./Task";

const Tasks = ({tasks, deleteTask, toggleDone}) =>{
    return(
        <div>
            {tasks.map((task) => (
                <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleDone={toggleDone}
                >

                </Task>
            ))}
        </div>
    )
}

export default Tasks