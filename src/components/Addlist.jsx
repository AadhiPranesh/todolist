import { useState } from "react";
const Addlist=(props)=>{
    const{addTask}=props;
    const [title, setTitle] =useState("");
    const [completed, setCompleted] =useState();
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }   
    const handlecompleted=(e)=>{
        setCompleted(e.target.value);
    }
    const handleSubmit=(e)=>{
        
        addTask(title, completed);
        e.preventDefault();
    }
    return(
        <div className="add-list">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title"  onChange={handleTitle} id="title"/>
                <input type="text" name="comleted" id="completed" onChange={handlecompleted}  placeholder="only enter pending:complete"/>
       <button>Submit</button>
            </form>

        </div>
    )
}
export default Addlist;