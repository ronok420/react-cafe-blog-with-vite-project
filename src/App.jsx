import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './Component/Blog/Blog'
import Header from './Component/Header/header'

function App() {
 

  return (
    <>
      <div className='main-page'>
      <Header></Header>
       <Blog></Blog>
      </div>
      
     
    </>
  )
}

export default App
