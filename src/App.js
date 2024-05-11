// import './App.css';
import { Route, Routes } from "react-router-dom";
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Service from "./Components/Services/service";
import Gallery from "./Components/Gallery/gallerypost";//yaha pe alag alag gallery ki post aayegi jb gallery me kisi image pe click karenge
import Navbar from "./Components/HomePage/navbar";
import Footer from "./Components/HomePage/footer";
import Blogs from './Components/Blogs/blogs';
import Contactus from "./Components/ContactUs/contactus";
import Apply from "./Components/Join/apply";
import Collaborate from "./Components/Join/collaborate";
import Download from "./Components/Download/download"
import AdminLogin from "./Components/Admin/AdminLogin";
import Admin from "./Components/Admin/Admin";
import AdminHome from "./Components/Admin/Home/home"
import AdminBlog from './Components/Admin/Blogs/Blogs'
import AdminGallery from "./Components/Admin/Gallery/Gallery"
import AdminServices from "./Components/Admin/Services/Services"
import AdminAbout from "./Components/Admin/About/About"
import AdminNewBlog from './Components/Admin/Blogs/newblog'
import AdminNewPost from './Components/Admin/Gallery/newpost'
import AdminContactUs from './Components/Admin/ContactUs/contactus'
import AdminContactMain from './Components/Admin/ContactUs/contactmain'
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
        <Route path='/gallery'
          element={<Gallery />} />
        {/* <Route path='/gallery/:id' />  aisa kuch karna hai */}
        <Route path='/blogs'
          element={<Blogs />} />
        <Route path='/contactus'
          element={<Contactus />} />
        <Route path='/apply'
          element={<Apply />} />
        <Route path='/collaborate'
          element={<Collaborate />} />
        <Route path='/download'
          element={<Download />} />
        <Route path='/adminlogin'
          element={<AdminLogin />} />
        <Route path='/admin'
          element={<Admin />} />
        <Route path='/admin-about'
          element={<AdminAbout />} />
        <Route path='/admin-home'
          element={<AdminHome />} />
        <Route path='/admin-services'
          element={<AdminServices />} />
        <Route path='/admin-blogs'
          element={<AdminBlog />} />
        <Route path='/admin-gallery'
          element={<AdminGallery />} />
        <Route path="/add-new-blog"
          element={<AdminNewBlog />} />
        <Route path="/add-new-post"
          element={<AdminNewPost />} />
        <Route path="/admin-contactus"
          element={<AdminContactUs />} />
        <Route path="/admin-contact-main"
          element={<AdminContactMain />}
        />
      </Routes>

    </div>
  );
}

export default App;
