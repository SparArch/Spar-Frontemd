// import './App.css';
import { Route, Routes } from "react-router-dom";
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Service from "./Components/Services/service";
import Navbar from "./Components/HomePage/navbar";
import Footer from "./Components/HomePage/footer";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/"
          element={<Homepage />} />
        <Route path='/about'
          element={<Aboutus />} />
        <Route path='/service'
          element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
