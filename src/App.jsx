import React, { useState,useEffect } from 'react'
import './App.css'
import {Home, Pokedex, About} from './Pages';
import { Routes, Route } from 'react-router';
import Nav from './nav'



function App() {

  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Nav/>} >
            <Route index element={<Home/>}/>
            <Route path='/Pokedex'>
                <Route index element={<Pokedex/>}/>
            </Route>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<h1>Not found</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
