import { useState } from "react";
import Todoitem from "./Todoitem";
import Footer from "./Footer";
import './Todo.css';

function Todo(){
const[todo,setTodo]=useState({name:"",done:false});
const[todos,setTodos]=useState([]);
const completedtodos=todos.filter((todo)=>todo.done).length
const totalTodos=todos.length;
const Sortedtodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
function handleSubmit(e){
 e.preventDefault();
 setTodos([...todos,todo]);
 setTodo({name:"",done:false})

}

    return(
<div>
    
    <form className="todoform"  onSubmit={handleSubmit}>
        <div className="form">
    <input className="todoinput" onChange={(e)=>setTodo({name:e.target.value,done:false})}  value={todo.name} type="text" placeholder="Enter To-do item" />
        <button className="button">Add</button>
        </div>
    </form>
    <div className="list">
        
    {Sortedtodos.map((item)=>(
   <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
  )
)} 
    </div>
<Footer completed={completedtodos} totalTodos={totalTodos}/>
</div>
    )

};

export default Todo;