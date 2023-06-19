import React from 'react';
import './mainpage.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../../components/home/Home";
import Experience from '../../components/experience/Experience';
import Portfolio from '../../components/portfolio/Portfolio';
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';


const Mainpage = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
    </>
  )
}

export default Mainpage