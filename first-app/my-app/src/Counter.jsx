import { useState } from "react";

function Counter(){
    const [counter,indexCount] = useState(0);
    
    const increase = ()=>{
        indexCount(counter + 1);
    }

    return(
        <>
            <h3>Count : {counter}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={()=>indexCount(counter + 10)}>+ 10</button>
            <button onClick={()=>indexCount(0)}>Clear</button>

        </>
    )
}

export default Counter