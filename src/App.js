import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Mainpage from "./pages/home/Mainpage";
import Projectpage from './pages/projects/Projectpage';




const App = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Mainpage />}/>
        <Route path = "/projects" element = {<Projectpage />}/>
      </Routes>
    </>
  )
}

export default App


