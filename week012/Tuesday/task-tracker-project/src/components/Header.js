import Button from "./Button"

const Header = ({title = "TASK", toggleShow, shoxAddTask})=> {
    return(
        <header className="header">
            <h1>
                {title}
            </h1>
            <Button 
                color={shoxAddTask ? "red" : "purple"}
                text={shoxAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
                toggleShow={toggleShow}
            />
        </header>
    )
}

export default Header