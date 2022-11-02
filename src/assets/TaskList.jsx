import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice"
import {Link} from "react-router-dom"
function TaskList() {
const tasks = useSelector(state => state.tasks)
const dispatch = useDispatch();

const handleDelete = (id) => {
    dispatch(deleteTask(id))
};


  return (
    <div className='task-list'>
      <h1>Tasks: {tasks.length}</h1>
      <Link to="/create-task">Create Task!</Link>
        {tasks.map(task => (
        <div key={task.id}>
            <h1>Título: {task.title}</h1>
            <h3>Descripción: {task.description}</h3>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={"/edit-task/" + task.id}>Edit</Link>
        </div>
    ))}
    </div>
  )
}

export default TaskList;