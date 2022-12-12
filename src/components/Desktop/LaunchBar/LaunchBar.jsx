import React from "react";
import Styles from "./LaunchBar.module.css";
import Calc from "../../../assets/Calculator.png";
import Calendar from "../../../assets/Calendar.png";
import Clock from "../../../assets/Clock.png";
import Maps from "../../../assets/Maps.png";
import Messages from "../../../assets/Messages.png";
import Music from "../../../assets/Music.png";
import Notes from "../../../assets/Notes.png";
import Podcasts from "../../../assets/Podcasts.png";
import Safari from "../../../assets/Safari.png";

function LaunchBar() {
  return (
    <div className={Styles.fullArea}>
      <div className={Styles.AllZone}>
      <button className={Styles.tolTip}>
        Contenido no disponible
      </button>
        <div className={Styles.LaunchBar}>
          <img src={Calc} alt="" />
          <img src={Calendar} alt="" />
          <img src={Clock} alt="" />
          <img src={Maps} alt="" />
          <img src={Messages} alt="" />
          <img src={Music} alt="" />
          <img src={Notes} alt="" />
          <img src={Podcasts} alt="" />
          <img src={Safari} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LaunchBar;
