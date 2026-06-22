import { useState } from "react";

function Multiform(){

    const [formdata,setFormdata] = useState({
        name : "",
        age : "",
        gender : ""
    })

    function setData(e)
    {
        const {name,value} = e.target
        setFormdata((prev)=>({
            ...prev,
            [name] : value,
        })
           
        )
    }

    function getFormData(e){
        e.preventDefault()
        console.log(formdata)
    }
    
    return(
        <>
            <form>
                <input type="text" name='name'  placeholder="Enter Your Name" onChange={setData} /> <br></br><br></br>
                <input type="text" name='age'  placeholder="Enter Your age" onChange={setData}/> <br></br><br></br>
                <input type="text" name='gender'  placeholder="Enter Your Gender" onChange={setData}/> <br></br><br></br>

                <button onClick={getFormData}>Submit</button>

            </form>
        </>
    )
}

export default Multiform