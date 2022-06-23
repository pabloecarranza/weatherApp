import React, { useState, useEffect } from "react";
import Styles from "./IconArea.module.css";
import Weather from "../../../assets/Weather.png";
import WheatherApp from "../../WheatherApp/WheatherApp";
import WelcomeNote from "../WelcomeNote/WelcomeNote";

import Notes from "../../../assets/Notes.png";

function IconArea() {



  const [ShowApp, setShowApp] = useState(false);
  const [ShowLaunch, setShowLaunch] = useState(true);

  function toggle() {
    if (ShowApp) {
      setShowApp(false);
    } else {
      setShowApp(true);
    }
  }

useEffect(()=>{

}, [ShowLaunch])

  function toggle2() {
    if (ShowLaunch) {
     
      setShowLaunch(false)
    } else {
     
      setShowLaunch(true)
    }
  }

  const Setting = () => {  
    setShowLaunch(false);
    
  }

  const Setting2 = () => {  
    setShowApp(false);
    
  }
  return (
    <div className={Styles.fullArea}>
      {ShowApp ? <WheatherApp show={true} setShow={Setting2}/> : <span></span>}
      <button className={Styles.weatherIcon} onClick={toggle}>
        <img src={Weather} alt="" />
        Pablo Weather App
      </button>
      {ShowLaunch ? <WelcomeNote show={true} setShow={Setting} /> : <span></span>}
      <button className={Styles.weatherIcon} onClick={toggle2}>
        <img src={Notes} alt="" />
        Nota de Bienvenida
      </button>
    </div>
  );
}

export default IconArea;
