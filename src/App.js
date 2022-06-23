import { Route, Routes } from "react-router-dom";
import Desktop from "./components/Desktop/Desktop/Desktop";
import Styles from "./App.css";
import Welcome from "./components/Welcome/Welcome";
import { CityProvider } from "./context/useContext";



function App() {
 
  return (
    <CityProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Desktop />} />
      </Routes>
    </CityProvider>
  );
}

export default App;
