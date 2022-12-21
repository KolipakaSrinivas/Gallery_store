import React from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"




import { Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <div className="App">
      <Header/>

      <Routes>

      <Route path='/'  element={<Photos/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
      </Routes>

      
      
      
    </div>
  )
}

export default App
