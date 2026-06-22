import { useState } from "react";

function Like(){
    const [like,setLike] = useState(false)

    function set()
    {
        setLike(!like)
    }
    function message()
    {
        // alert(like)
        !like ? alert("Thank you for Your Like !!") : '';
    }

    return(
        <>
            <br/><br/>
            <button onClick={()=>{set(); message();}}  className={like ? "color" : 'noncolor '}> 
                {like ? "Liked" : 'Like '}
            </button>
        </>
    )
}

export default Like