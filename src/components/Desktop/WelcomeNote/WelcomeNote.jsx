import React, { useContext } from "react";

import Styles from "./WelcomeNote.module.css";
import styled from "styled-components";
import CityContext from "../../../context/useContext";

  const FullSize = styled.div`
    display: block;
    position: absolute;
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
function WelcomeNote({ show, setShow }) {

  const { user } = useContext(CityContext)


  return (
    <FullSize>
      <div className={Styles.LaunchPanel}>
        <div className={Styles.menuOption}>
          <button onClick={(e) => setShow(false)}></button>
          <div></div>
          <div></div>
        </div>
        <div className={Styles.topBorder}></div>
        <div className={Styles.textArea}>
          <div className={Styles.text}>
            <span>Hola {user} !</span>
            <span>
              Bienvenido a mi Aplicacion de Clima 
            </span>
           
            <span>
              La Siguiente aplicacion es para la consulta de clima en la que se pueda
              visualizar el pronóstico actual y el de los próximos 5 dias de la cuidad
              en la que se encuentre mediante geolocalización, y a su vez un selector que permita cambiar entre 
              5 cuidades preseleccionadas y un buscador de cuidades.
            </span>
          </div>
        </div>
      </div>
    </FullSize>
  );
}

export default WelcomeNote;
