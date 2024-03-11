// import './App.css';
import { Route, Routes } from "react-router-dom";
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Navbar from "./Components/HomePage/navbar";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"
          element={<Homepage />} />
        <Route path='/about'
          element={<Aboutus />}
        />
        <Route path="/service"
          element={<Services />}
        />
      </Routes>

    </div>
  );
}

export default App;
