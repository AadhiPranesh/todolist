import TodoItems from "./TodoItems";

const TodoDisplay=(props)=>{
const {task} = props;
    return(
<div >
   <h3 >Todo List</h3>
   <div className="todo-display" >
   {

    task.map((item)=>(
        <TodoItems key={item.id} task={item}
        />
    ))
   }</div>
</div>
)
}
export default TodoDisplay;