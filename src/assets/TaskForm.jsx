import { useState } from "react";
import {useDispatch} from "react-redux"
import {addTask} from "../features/tasks/taskSlice"
import {v4 as uuid} from "uuid"
function TaskForm() {
const dispatch = useDispatch();

const [task, setTask] = useState({
    title: "",
    description:""
})
 
const handleChange = (e) => {
setTask({
    ...task,
    [e.target.name]: e.target.value,
});
}
const handleSubmit = (e) => {
    e.preventDefault();
dispatch(addTask({
    ...task,
    id: uuid(),
}))
}


  return (
    <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        placeholder="Title"
        name="title" 
        type="text" />
        <textarea
        onChange={handleChange} 
        placeholder="Description" 
        name="description" 
        cols="30" 
        rows="10">
        </textarea>
        <input type="submit" />
    </form>
  )
}

export default TaskForm;