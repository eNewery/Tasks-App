import React from 'react';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {addTask, updateTask} from "../features/tasks/taskSlice"
import {v4 as uuid} from "uuid"
import {useParams, useNavigate} from "react-router-dom"
import { useEffect } from "react";
function TaskForm() {
    const params = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();
const tasks = useSelector(state => state.tasks)


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

    if (params.id) {
        dispatch(updateTask(task))
    }
    else {
        dispatch(addTask({
            ...task,
            id: uuid(),
        }))
    };  
    navigate("/")
}

useEffect(() => {
if (params.id) {
    setTask(tasks.find(task => task.id === params.id))

}
}, [params.id, tasks])

  return (
    <form className='bg-zinc-800 max-w-sm p-4' onSubmit={handleSubmit}>
        <label className='mb-2 block text-xs font-bold' htmlFor="title">Task:</label>
        <input
        onChange={handleChange}
        placeholder="Title"
        name="title" 
        type="text" 
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor="description" className='mb-2 block text-xs font-bold'>Description:</label>
        <textarea
        onChange={handleChange} 
        placeholder="Description" 
        name="description" 
        cols="30" 
        rows="10"
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        >
        </textarea>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default TaskForm;