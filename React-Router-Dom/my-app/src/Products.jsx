import { Link , Outlet } from "react-router-dom"

function Products(){
    return (
        <>
            <h1>Products Page</h1>
            <Link to='phone'>Phone</Link> <br></br>
            <Link to='laptop'>Laptop</Link>

            <Outlet/>
        </>
    )
}

export default Products