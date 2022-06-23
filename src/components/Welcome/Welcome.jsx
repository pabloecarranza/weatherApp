import React, { useContext, useEffect, useState } from "react";
import Styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { getUserLocation, validate } from "../Utils/Utils";
import CityContext from "../../context/useContext";



const Welcome = () => {

  const { setName, getWeatherCityByLatLon } = useContext(CityContext)
  
   useEffect(()=>{
    getUserLocation().then((lngLat) =>
    getWeatherCityByLatLon(lngLat)
    );

  }, []) 

  const [errors, setErrors] = useState({});
  const [popUp, setPopUp] = useState(false);
  const [popUp2, setPopUp2] = useState(false);
  const [input, setInput] = useState({
    name: "",
  });
  validate(input)

  let navigate = useNavigate();
  const handleClickss = () => {
    navigate("/home/");
  };

  function handleSubmit(e) {
     if (!input.name) {
      e.preventDefault();
      setPopUp(() => true);
      return;
    } 
    if (errors.name) {
      e.preventDefault();
      setPopUp(() => true);
    }
    if (!errors.name) {
      e.preventDefault();
      setName(input.name);
      handleClickss();
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className={Styles.Welcome}>
      <div className={Styles.ModalWelcome}>
        <span>Bienvenido</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="Ingresa tu nombre aquí"
            type="text"
            name="name"
            className={Styles.inputs}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit"
       
            className={Styles.btnPrimary}
          >
            {" "}
            &gt;
          </button>
        </form>
      </div>
      {errors.name && <span className={Styles.Error}>{errors.name}</span> }
    </div>
  );
};

export default Welcome;
