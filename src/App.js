import logo from './logo.svg';

import React, { useState}from 'react';
import './App.css';

import Header from './Components/Header';
import Services from './Components/Services';
import Slider from './Components/Slider/Slider';
import Blink from './Components/blink';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Terms from './Components/Terms';
import Form from './Components/Form';

function App() {

  
  const[toggleform, setToggleForm]=useState(false);

  const buttonClickHandler = ()=>{
    setToggleForm(true);
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    
      <div className="App">

        <Header />
        {/* <img src={imageone} className="App"/> */}
        <Blink />
        <Services />
        <Slider />
        <button onClick={buttonClickHandler} className="clickButton">CLICK HERE FOR QUOTE REQUEST</button>
        {toggleform && <Form />}
        <AboutUs />
        <ContactUs />
        <Terms />
        
      </div>
    
  );
}

export default App;
