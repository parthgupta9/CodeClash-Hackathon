import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Main from './hotels/App'

const Appp = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/hotels' element={<Main/>}/> 
           
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Appp