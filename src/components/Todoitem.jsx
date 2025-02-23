import './Todoitem.css';
export default function Todoitem({item,todos,setTodos}){
  
    function handleDelete(item){
        setTodos( todos.filter((todo)=>todo!==item))
       

        console.log("delete for item",item);
    }
    function handleClick(name){
const newTodos=todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo);
setTodos(newTodos);

    }
    const clasname = item.done ? "completed" : "";
  
    return(
        <div className="todoitem">
            <div>
                <span className={clasname} onClick={()=>handleClick(item.name)}> {item.name}</span>

            <span>
                <button onClick={()=>handleDelete(item)} className='deletebutton'>x</button>
            </span>
            </div> 
        
            
        </div>
    )
}