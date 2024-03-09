// import './App.css';
import { Route, Routes } from "react-router-dom";
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Service from "./Components/Services/service";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/"
          element={<Homepage />} />
        <Route path='/about'
          element={<Aboutus />} />
        <Route path='/service'
          element={<Service />} />
      </Routes>

    </div>
  );
}

export default App;
