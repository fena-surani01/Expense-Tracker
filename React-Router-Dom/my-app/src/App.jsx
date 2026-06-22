import {BrowserRouter , Routes , Route , Link , NavLink, useParams} from 'react-router-dom'

import Home from './Home'
import About from './About'

import Products from './Products'
import Phones from './Phones'
import Laptops from './Laptops'



function App() {
    function User(){
        const {id} = useParams()
        return <h2> Your param is  : {id}</h2>
    }

    function Notfound(){
      return <h1>404 - Page Not Found !!</h1>
    }

  return (
    <BrowserRouter>
    <a href='/'>Home</a>
    <nav>
      
      <NavLink to='/about' style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}>About</NavLink>  |
      
      <NavLink to='/user/10' style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}>User</NavLink>  | 

      <NavLink to='/products' style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}>Products</NavLink>  | 
      
      <NavLink to='/xyz'>Not Found</NavLink>
      
      {/* 
        style={({ isActive }) => {
          return {
            color: isActive ? 'red' : 'blue'
          };
        }}
      */}
    </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user/:id" element={<User/>} />

            <Route path="/products" element={<Products/>}>
                <Route path="phone" element={<Phones/>} />
                <Route path="laptop" element={<Laptops/>} />
            </Route>

            <Route path="*" element={<Notfound/>} />
            

        </Routes>
    </BrowserRouter>
  )
}

export default App
