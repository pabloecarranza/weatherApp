import React, { createContext, useState } from "react";

const axios = require("axios");
const CityContext = createContext();

const initialCity = {
    "id": 3849769,
      "name": "Ciudad Default",
      "principalmente": "Clouds",
      "pais": "AR",
      "viento": 4.1,
      "humedad": 52,
      "presion": 1014,
      "tempmax": 8.97,
      "tempmin": 8.97,
      "sensacion": 6.69,
      "temperatura": 8.97,
      "icono": "04n",
      "descripcion": "muy nuboso",
      "dia1": {
        "temperatura": 8.97,
        "descripcion": "muy nuboso",
        "icon": "04n",
        "fecha": "06-1"
      },
      "dia2": {
        "temperatura": 9.43,
        "descripcion": "nubes",
        "icon": "04n",
        "fecha": "06-1"
      },
      "dia3": {
        "temperatura": 5.16,
        "descripcion": "cielo claro",
        "icon": "01n",
        "fecha": "06-1"
      },
      "dia4": {
        "temperatura": 4.48,
        "descripcion": "cielo claro",
        "icon": "01n",
        "fecha": "06-1"
      },
      "dia5": {
        "temperatura": 7.08,
        "descripcion": "muy nuboso",
        "icon": "04n",
        "fecha": "06-1"
      }
  
  
};

const initialName = {
  name: "default"
}

const CityProvider = ({ children }) => {
  const [city, setCity] = useState(initialCity);
  const [user, setUser] = useState(initialName)
  
  
  const setName = (name)=> {
    setUser(name)
  }


  const getWeatherCity = async (city) => {
    if(city) {
      const results = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9c5110e00d33dafab0e98fef1e997fc&lang=es&units=metric`
      );
      let longitud = results.data.coord.lon;
      let latitud = results.data.coord.lat;
  
      const selloDeTiempo = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&cnt=40&appid=f9c5110e00d33dafab0e98fef1e997fc&lang=es&units=metric`
      );
      let proximosdias = {
        dia1: {
          temperatura: selloDeTiempo.data.list[0].main.temp,
          descripcion: selloDeTiempo.data.list[0].weather[0].description,
          icon: selloDeTiempo.data.list[0].weather[0].icon,
          fecha: selloDeTiempo.data.list[0].dt_txt.substring(5,10),
        },
        dia2: {
          temperatura: selloDeTiempo.data.list[8].main.temp,
          descripcion: selloDeTiempo.data.list[8].weather[0].description,
          icon: selloDeTiempo.data.list[8].weather[0].icon,
          fecha: selloDeTiempo.data.list[8].dt_txt.substring(5,10),
        },
        dia3: {
          temperatura: selloDeTiempo.data.list[16].main.temp,
          descripcion: selloDeTiempo.data.list[16].weather[0].description,
          icon: selloDeTiempo.data.list[16].weather[0].icon,
          fecha: selloDeTiempo.data.list[16].dt_txt.substring(5,10),
        },
        dia4: {
          temperatura: selloDeTiempo.data.list[24].main.temp,
          descripcion: selloDeTiempo.data.list[24].weather[0].description,
          icon: selloDeTiempo.data.list[24].weather[0].icon,
          fecha: selloDeTiempo.data.list[24].dt_txt.substring(5,10),
        },
        dia5: {
          temperatura: selloDeTiempo.data.list[32].main.temp,
          descripcion: selloDeTiempo.data.list[32].weather[0].description,
          icon: selloDeTiempo.data.list[32].weather[0].icon,
          fecha: selloDeTiempo.data.list[32].dt_txt.substring(5,10),
        },
      };
      let NuevaCiudad = {
        id: results.data.id,
        name: results.data.name,
        principalmente: results.data.weather[0].main,
        pais: results.data.sys.country,
        viento: results.data.wind.speed,
        humedad: results.data.main.humidity,
        presion: results.data.main.pressure,
        tempmax: results.data.main.temp_max,
        tempmin: results.data.main.temp_min,
        sensacion: results.data.main.feels_like,
        temperatura: results.data.main.temp,
        icono: results.data.weather[0].icon,
        descripcion: results.data.weather[0].description,
      };
  
      const datosNecesarios = { ...NuevaCiudad, ...proximosdias };
  
  
      return setCity( datosNecesarios);
    } 
  }

  const getWeatherCityByLatLon = async(payload)=> {
    
    
    const lon = payload[0];
    const lat = payload[1];
   
    
   
       const results = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt=40&appid=f9c5110e00d33dafab0e98fef1e997fc&lang=es&units=metric`
      );
  
   
    
  
      const selloDeTiempo = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&appid=f9c5110e00d33dafab0e98fef1e997fc&lang=es&units=metric`
      );

      
       let proximosdias = {
        dia1: {
          temperatura: selloDeTiempo.data.list[8].main.temp,
          descripcion: selloDeTiempo.data.list[8].weather[0].description,
          icon: selloDeTiempo.data.list[8].weather[0].icon,
          fecha: selloDeTiempo.data.list[8].dt_txt.substring(5,10),
        },
        dia2: {
          temperatura: selloDeTiempo.data.list[16].main.temp,
          descripcion: selloDeTiempo.data.list[16].weather[0].description,
          icon: selloDeTiempo.data.list[16].weather[0].icon,
          fecha: selloDeTiempo.data.list[16].dt_txt.substring(5,10),
        },
        dia3: {
          temperatura: selloDeTiempo.data.list[24].main.temp,
          descripcion: selloDeTiempo.data.list[24].weather[0].description,
          icon: selloDeTiempo.data.list[24].weather[0].icon,
          fecha: selloDeTiempo.data.list[24].dt_txt.substring(5,10),
        },
        dia4: {
          temperatura: selloDeTiempo.data.list[32].main.temp,
          descripcion: selloDeTiempo.data.list[32].weather[0].description,
          icon: selloDeTiempo.data.list[32].weather[0].icon,
          fecha: selloDeTiempo.data.list[32].dt_txt.substring(5,10),
        },
        dia5: {
          temperatura: selloDeTiempo.data.list[39].main.temp,
          descripcion: selloDeTiempo.data.list[39].weather[0].description,
          icon: selloDeTiempo.data.list[39].weather[0].icon,
          fecha: selloDeTiempo.data.list[39].dt_txt.substring(5,10),
        },
      };
      let NuevaCiudad = {
        id: results.data.id,
        name: results.data.name,
        principalmente: results.data.weather[0].main,
        pais: results.data.sys.country,
        viento: results.data.wind.speed,
        humedad: results.data.main.humidity,
        presion: results.data.main.pressure,
        tempmax: results.data.main.temp_max,
        tempmin: results.data.main.temp_min,
        sensacion: results.data.main.feels_like,
        temperatura: results.data.main.temp,
        icono: results.data.weather[0].icon,
        descripcion: results.data.weather[0].description,
      };
  
      const datosNecesarios = { ...NuevaCiudad, ...proximosdias };
    
      return setCity( datosNecesarios );  
    
    

    
  }

  const data = { city, getWeatherCity, getWeatherCityByLatLon, user, setName };
  return (
  <CityContext.Provider value={data}>
    {children}
    </CityContext.Provider>);
};


export { CityProvider }
export default CityContext;
