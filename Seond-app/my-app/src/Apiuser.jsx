import { useState ,useEffect } from "react";

function Apiuser(){
    const [users,setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setUser(json))
    },[])

    return(
        <>
            <h1>Api Calling Tool</h1>
            <div>
                <table border="2" width="100%">
                    <tr style={{backgroundColor:"#03487d",color : "white"}}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                    {users.map((user)=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.company.name}</td>

                        </tr>
                    ))}
                    
                </table>
            </div>
        </>
    )
}

export default Apiuser