import { useEffect, useState } from "react";


function Timer (){
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("Use Effect is Called !!")

        const interval = setInterval(() => {
            setCount((prev)=> prev+1)
        },1000);

        return()=>{
            clearInterval(interval)
        }
    },[])

    return(
        <>
            <p>Count : {count}</p>
        </>
    )
}

export default Timer