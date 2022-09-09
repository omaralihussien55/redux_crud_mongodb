import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContainerCrud from './component.js/ContainerCrud'


 
const App = () => { 
 


  return (

    <BrowserRouter>
    <div>
     
    <div className='my-4 container'>
    <Routes>
      <Route path='/' element={<ContainerCrud/>}/>
    </Routes>
   
    </div>
    </div>

    </BrowserRouter>
  )
}

export default App
