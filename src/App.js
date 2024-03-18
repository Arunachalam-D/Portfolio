import Home from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from './pages/Timeline';
import Works from './pages/Works'; 
import Contact from './pages/Contact';
import HireMe from './pages/HireMe';
import { useState } from 'react';
import Loader from './shared/Loader';

export default function App(){
  const [loading,setLoading] =  useState(true)

  setTimeout(()=>{
      setLoading(false);
  },3000)
  return (
    <>
    
    {loading ? <Loader/> :
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/experience' element={<Timeline/>} />
      <Route path='/works' element={<Works/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/HireMe' element={<HireMe/>}/>
    </Routes>
    </BrowserRouter>
    
  }
    </>
  )
}