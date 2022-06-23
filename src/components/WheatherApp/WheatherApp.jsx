import Styles from "./WeatherApp.module.css";
import styled from "styled-components";
import PrimaryCity from "./PrimaryCity";
import SearchBar from "./SearchBar";

const FullSize = styled.div`
  display: block;
  position: absolute;
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WheatherApp({ setShow }) {
  return (
    <FullSize className={Styles.FullSize}>
      <div className={Styles.LaunchPanel}>
        <div className={Styles.menuOption}>
          <button onClick={(e) => setShow(false)}></button>
          <div></div>
          <div></div>
        </div>

        <div className={Styles.textArea}>
          <SearchBar />
          <PrimaryCity />
        </div>
      </div>
    </FullSize>
  );
}

export default WheatherApp;
