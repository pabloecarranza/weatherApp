import React, { useContext } from "react";
import { useState } from "react";
import Styles from "./SearchBar.module.css";
import ShortcutsCities from "./ShortcutsCities";
import CityContext from "../../context/useContext";

const SearchBar = () => {

  const { getWeatherCity } = useContext(CityContext)
  const [city, setCity] = useState("");
  const [errores, setErrores] = useState("");


  function validate(input) {
    let errors = "";
    const regexName = /^([a-zA-Z ]+)$/i;
    input ? (errors = "") : (errors = "El nombre no puede estar vacio");
    if (input && !regexName.test(input)) {
      errors = "El nombre no puede incluir caracteres especiales o numeros";
    }

    return errors;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let errores = validate(city);
    if (city === "" || !city) return;
    if (errores) {
      setErrores(errores);
      return;
    }

    getWeatherCity(city);
  };

  return (
    <div className={Styles.SearchBar}>
      <form onSubmit={onSubmit}>
        <div className={Styles.title}>
          <span>Pablo Weather App</span>
          <div className={Styles.Find}>
            <input className={Styles.buttonx}
              type="text"
              placeholder="Buscar ciudad"
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className={Styles.buttonx}>Buscar</button>
          </div>
          <ShortcutsCities />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
