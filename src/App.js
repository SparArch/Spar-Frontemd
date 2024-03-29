// import './App.css';
import { Route, Routes } from "react-router-dom";
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Service from "./Components/Services/service";
import Gallery from "./Components/Gallery/gallery";
import Navbar from "./Components/HomePage/navbar";
import Footer from "./Components/HomePage/footer";
import Blogs from './Components/Blogs/blogs'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"
          element={<Homepage />} />
        <Route path='/about'
          element={<Aboutus />} />
        <Route path='/service'
          element={<Service />} />
        <Route path='/gallery'
          element={<Gallery />} />
        <Route path='/blogs'
          element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
