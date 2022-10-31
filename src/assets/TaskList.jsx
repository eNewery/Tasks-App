import {useSelector} from "react-redux";

function TaskList() {
const tasks = useSelector(state => state.tasks)
console.log(tasks)
  return (
    <div>
        {tasks.map(task => (
        <div key={task.id}>
            <h1>Título: {task.title}</h1>
            <h3>Descripción: {task.description}</h3>
        </div>
    ))}
    </div>
  )
}

export default TaskList;