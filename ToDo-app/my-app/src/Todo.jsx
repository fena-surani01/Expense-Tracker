import { useState } from "react";

function Todo(){

    const [newTodo,setNewtodo] = useState("")
    const [todos,setTodos] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(newTodo)
        {
            setTodos(
                [
                    ...todos,
                    {
                        "text":newTodo,
                        completed : false
                    }
                ]   
            )
            setNewtodo('')
        }


    }

    const handleDelete = (index)=>{
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        console.log(newTodos[index].completed)
        setTodos(newTodos)

    }

    const setText = (e)=>{
        setNewtodo(e.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={newTodo} placeholder="Enter Todo Name" 
                    onChange={setText}
                />
                <button>Add</button>
            </form>
            <ul>
                {
                    todos.map((todo,index)=>(
                        <li key={index}>
                            <div style={{
                                "display" : "flex",
                                "gap" : "20px"
                            }}>
                                <span 
                                    style={{textDecoration : todo.completed ? 'line-through': 'none',color : todo.completed ? 'red': 'black'}}>
                                        {todo.text}
                                </span>
                                <button onClick={()=>handleDelete(index)}>Delete</button>
                            </div>
                            <br></br>
                        </li>

                    ))
                }
            </ul>
        </>
    )

}

export default Todo