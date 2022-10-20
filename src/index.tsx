import React from "react"
import ReactDOM from "react-dom/client"
import { Todo } from "./components/Todo";
import { User } from "./components/User";
import todos from "./todos.json"
import users from "./users.json"

const todosList = todos
const todosContainer = ReactDOM.createRoot(document.getElementById('todos') as HTMLElement);

let i=0;
setInterval(()=>{
    todosContainer.render(<Todo title={todos[i].title} isCompleted={todos[i].completed}/>);
    if(i<=todosList.length-1) i++; else i = 0;
},500)

const usersList = users
const usersContainer = ReactDOM.createRoot(document.getElementById('users') as HTMLElement);
usersContainer.render(<User name={usersList[0].name} website={usersList[0].website} company={usersList[0].company}/>);
