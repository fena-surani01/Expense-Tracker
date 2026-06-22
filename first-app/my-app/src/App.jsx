// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import Hello from './Hello'
import Demo from './demo'
import Loop from './loop'
import Object_loop from './object'
import Counter from './Counter'
import Like from './Like'
import './color.css'
import Form from './Form'
import Multiform from './Multiform'
import Uncontroll from './Uncontroll'

function App() {
  return (
    <>
        {/* <h1>This is Demo Test </h1> */}
        {/* <Hello/> */}
        {/* <img width="200px" src={reactLogo}/> */}
        {/* <Demo/>
        <Loop/>
        <Object_loop/> */}
        <h1> Counter System</h1>
        <Counter/>

        <h1> Like/Unlike System</h1>
        <Like/>

        <h1> Form System</h1>
        <Form/>

        <h1> Multi Form System</h1>
        <Multiform/>

        <h1> Uncontrolled System</h1>
        <Uncontroll/>

    </>
  )
}

export default App
