import { useState , useEffect } from "react";

function  Widthtracker(){
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleSize = ()=>{
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleSize)

        return()=>{
            window.removeEventListener('resize',handleSize)
            console.log("Clear")
        }
    },[])

    return(
        <>
            <h2>Window Width Tracker</h2>
            <p>Current Width {width}</p>
        </>
    )
}

export default Widthtracker