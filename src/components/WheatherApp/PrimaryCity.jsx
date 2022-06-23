import React, { useContext } from "react";
import Styles from "./PrimaryCity.module.css";

import { diaDeSemana, MesyDia } from "../Utils/Utils";

import CityContext from "../../context/useContext";

function PrimaryCity() {

const { city } = useContext(CityContext)
console.log('city desde componente ',city);

  return (
    <div className={Styles.PrimaryCity}>
           {city ? (
        <>
          <div className={Styles.RenderDates}>
            <div className={Styles.supDates}>
              <span>{city.name}</span>
              <span>{diaDeSemana()}</span>
              <span>{MesyDia()}</span>
            </div>
            <div className={Styles.bottonDates}>
            <img  src={"http://openweathermap.org/img/wn/"+ city.icono +"@2x.png"}/>
              <span>{city.temperatura}°C</span>
              <span>{city.descripcion}</span>
            </div>
          </div>
          <div className={Styles.primaryDates}>
            <img
              src={`https://source.unsplash.com/random/?${city.name},${city.principalmente}`}
             
            />
          </div>
          <div className={Styles.extendsWeather}>
            <div className={Styles.ExtendsDates}>
              <div className={Styles.auxOne}>
                <span>Sensación térmica</span>
                <span>Temperatura máxima</span>
                <span>Temperatura Mínima</span>
                <span>Presión atmosférica</span>
                <span>Humedad</span>
                <span>Velociad del Viento</span>
              </div>

              <div className={Styles.auxTwo}>
                <span> {city.sensacion}°C</span>
                <span> {city.tempmax}°C</span>
                <span> {city.tempmin}°C</span>
                <span> {city.presion}</span>
                <span>{city.humedad}%</span>
                <span> {city.viento}km/h</span>
              </div>
            </div>
            <div className={Styles.ExtendsNextDays}>
              <div className={Styles.miniCard}>
                <span>{city.dia1.temperatura}°C</span>
                <span>{city.dia2.temperatura}°C</span>
                <span>{city.dia3.temperatura}°C</span>
                <span>{city.dia4.temperatura}°C</span>
                <span>{city.dia5.temperatura}°C</span>
              </div>
              <div className={Styles.miniCard}>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.dia1.icon +"@2x.png"}/>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.dia2.icon +"@2x.png"}/>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.dia3.icon +"@2x.png"}/>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.dia4.icon +"@2x.png"}/>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.dia5.icon +"@2x.png"}/>
              </div>
              <div className={Styles.miniCard}>
                <span>{city.dia1.fecha}</span>
                <span>{city.dia2.fecha}</span>
                <span>{city.dia3.fecha}</span>
                <span>{city.dia4.fecha}</span>
                <span>{city.dia5.fecha}</span>
              </div>
              
            </div>
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}   
    </div>
  );
}

export default PrimaryCity;
