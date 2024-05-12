// import './App.css';
import { Route, Routes } from "react-router-dom";
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Service from "./Components/Services/service";
import Gallery from "./Components/Gallery/gallery";//yaha pe alag alag gallery ki post aayegi jb gallery me kisi image pe click karenge
import Gallerypost from "./Components/Gallery/gallerypost";
import Navbar from "./Components/HomePage/navbar";
import Footer from "./Components/HomePage/footer";
import Blogs from './Components/Blogs/blogs';
import Blogpost from "./Components/Blogs/blogpost";
import Contactus from "./Components/ContactUs/contactus";
import Apply from "./Components/Join/apply";
import Collaborate from "./Components/Join/collaborate";
import Download from "./Components/Download/download"

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
        <Route path='/gallery'
          element={<Gallery />} />
        {/* <Route path='/gallery/:id' />  aisa kuch karna hai */}
        <Route path='/blogs'
          element={<Blogpost />} />
        {/* <Route path='/gallery/:id' />  aisa kuch karna hai */}
        <Route path='/contactus'
          element={<Contactus />} />
        <Route path='/apply'
          element={<Apply />} />
        <Route path='/collaborate'
          element={<Collaborate />} />
        <Route path='/download' 
          element={<Download/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
