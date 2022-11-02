import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TaskForm from './assets/TaskForm';
import TaskList from './assets/TaskList';
function App() {  
  return (
    <div className="container">
      <BrowserRouter>
<Routes>
<Route path='/' element={<TaskList/>}/>
<Route path='/create-task' element={<TaskForm/>}/>
<Route path='/edit-task/:id' element={<TaskForm/>}/>
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
