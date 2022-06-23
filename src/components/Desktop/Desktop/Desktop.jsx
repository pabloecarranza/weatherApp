import React from "react";
import LaunchBar from "../LaunchBar/LaunchBar";
import StartMenu from "../StartMenu/StartMenu";
import Styles from "./Desktop.module.css";
import IconArea from "../IconArea/IconArea";




function Desktop() {





  return (
    <div id={Styles.DesktopMAC}>
      <StartMenu></StartMenu>
      <IconArea></IconArea>
      <LaunchBar></LaunchBar>
    </div>
  );
}

export default Desktop;
