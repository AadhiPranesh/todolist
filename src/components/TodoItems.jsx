import { useState } from "react";

const TodoItems=(props)=>{
    const {title,completed} = props.task;
  const [process,setprocess]=useState()
const stage=completed==="complete"?true:false
const handleprocess=(e)=>{
setprocess(e.target.value)
}
    return (
            <div className={`todo-item ${completed}`}>
            <input type="checkbox" checked={stage} onChange={handleprocess}   />
            <p>{title}</p>

            </div>    
        )
      }
export default TodoItems;