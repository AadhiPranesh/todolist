
import React, {useState} from "react";
import TodoDisplay from "./TodoDisaply";
import Addlist from "./Addlist";
import { v4 as uuidv4 } from 'uuid';
const TodolistContainer =() =>{
const todolist = [
    { id: uuidv4(), title: "Buy groceries", completed:"complete" }, 
    { id: uuidv4(), title: "Walk the dog", completed:"pending" },
    { id: uuidv4(), title: "Finish project report",completed: "pending"}
];  
const[task,setTask] =useState(todolist);
const addTask=(title,completed)=>{
    setTask([...task, {id:uuidv4(), title:title, completed:completed}]);
}
    return(
    <div className="todolist-container">
        <h1 className="heading">Todo list</h1>
       <TodoDisplay task={task}/>
       <Addlist addTask={addTask} />
    </div>
)
} 
export default TodolistContainer;
