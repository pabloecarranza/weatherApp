import React, { useContext } from "react";

import CityContext from "../../context/useContext";

import Styles from "./ShortcutsCities.module.css";

function ShortcutsCities() {

const { getWeatherCity } = useContext(CityContext)

  

  return (
    <div className={Styles.ShortcutsCities}>
      <button onClick={()=> getWeatherCity('mendoza')} className={Styles.buttonx}>Mendoza</button>
      <button onClick={()=> getWeatherCity('cordoba')} className={Styles.buttonx}>Cordoba</button>
      <button onClick={()=> getWeatherCity('buenos aires')} className={Styles.buttonx}>Buenos Aires</button>
      <button onClick={()=> getWeatherCity('san luis')} className={Styles.buttonx}>San Luis</button>
      <button onClick={()=> getWeatherCity('rosario')} className={Styles.buttonx}>Rosario</button>
    </div>
  );
}

export default ShortcutsCities;
