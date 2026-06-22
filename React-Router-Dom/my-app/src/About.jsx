import { useNavigate } from "react-router-dom"

export default function About(){
    const Navigate = useNavigate()
    function GoTohome()
    {
        Navigate('/')
    }

    return (
        <>
            <h1>About Page</h1>
            <button onClick={GoTohome}>Go to Home</button>
        </>
    )
}