import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import Mainpage from "./pages/home/Mainpage";
import Projectpage from './pages/projects/Projectpage';




const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Mainpage />}/>
        <Route path = "/projects" element = {<Projectpage />}/>
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App