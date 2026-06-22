import { useState } from "react";

function Form() {
    const [name, setName] = useState("")

    return(
        <>  
            <br/><br/>
            <input name='name' placeholder="Enter Your Name" onChange={(e)=> setName(e.target.value || "Guest")}/>
            <h3> Your Name : {name} </h3>
        </>
    )
}

export default Form 