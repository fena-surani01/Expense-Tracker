import { useRef } from 'react'

export {useRef} from 'react'


function Uncontroll(){

    const nameRef = useRef();
    const ageRef = useRef();
    
    const handleform = (e)=>{
        e.preventDefault()
        
        console.log("Name :",nameRef.current.value)
        console.log("Age :",ageRef.current.value)

    }

    return(
        <form>
            <br/>
            <input type="text" ref={nameRef} name='name' placeholder='Enter Your Name' /> <br/><br/>
            <input type="text" ref={ageRef} name='age' placeholder='Enter Your Age' /> <br/><br/>

            <button onClick={handleform}>Submit</button>

        </form>
    )
}

export default Uncontroll