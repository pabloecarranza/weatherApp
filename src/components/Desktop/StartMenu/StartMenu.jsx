import React from 'react'
import AppleLogo from "../../../assets/appleLogo.png";
import WifiLogo from "../../../assets/Wifi.png";
import Styles from "./StartMenu.module.css"
import { fecha } from '../../Utils/Utils';


function StartMenu() {
  return (
    <div className={Styles.topBar}>
        <div className={Styles.OptionBar}>
          <img src={AppleLogo} alt="" />
          <span>Finder</span>
          <span>Archivo</span>
          <span>Edicion</span>
          <span>Visualizacion</span>
          <span>Ir</span>
          <span>Ventana</span>
          <span>Ayuda</span>
        </div>
        <div className={Styles.DateBar}>
          <img src={WifiLogo} alt="" />
          <span>{fecha()}</span>
        </div>
      </div>
  )
}

export default StartMenu