import React, { useContext } from "react";

import Styles from "./WelcomeNote.module.css";
import styled from "styled-components";
import CityContext from "../../../context/useContext";

const FullSize = styled.div`
  display: block;
  position: absolute;
  height: 83vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function WelcomeNote({ show, setShow }) {
  const { user } = useContext(CityContext);

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
            <span>Bienvenido a mi Aplicacion de Clima</span>

            <span>
              Simulando un escritorio del Sistema Operativo macOS Big Sur con un
              formulario controlado de ingreso para el nombre. Cuenta con una la
              aplicacion para la consulta de clima, en la que se puede
              visualizar el pronóstico actual y el de los próximos 5 dias de la
              cuidad en la que se encuentre mediante geolocalización, y a su vez
              un selector que permita cambiar entre 5 cuidades preseleccionadas
              y un buscador de cuidades.
              <br />
              <br />
              Espero que te guste :)
              <br />
              <br />
              Aquí puedes encontrar mas proyectos mios:
              <br /> 🐱
              <a href="https://github.com/pabloecarranza" target="_blank">
                {" "}
                https://github.com/pabloecarranza
              </a>
              <br />
              <br />
              Ademas te dejo mi correo para que estemos en contacto: <br />
              📬
              <a href="mailto:pabloecarranza@gmail.com">
                pabloecarranza@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </FullSize>
  );
}

export default WelcomeNote;
