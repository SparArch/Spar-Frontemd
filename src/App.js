// src/App.js
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './Components/AuthContext';
import Aboutus from './Components/AboutUs/aboutus';
import Homepage from './Components/HomePage/homepage';
import Service from "./Components/Services/service";
import Gallery from "./Components/Gallery/gallery";
import GalleryPost from "./Components/Gallery/gallerypost";
import Navbar from "./Components/HomePage/navbar";
import Footer from "./Components/HomePage/footer";
import Blogs from './Components/Blogs/blogs';
import Blogpost from './Components/Blogs/blogpost';
import Contactus from "./Components/ContactUs/contactus";
import Apply from "./Components/Join/apply";
import Collaborate from "./Components/Join/collaborate";
import Download from "./Components/Download/download";
import AdminLogin from "./Components/Admin/AdminLogin";
import Admin from "./Components/Admin/Admin";
import AdminHome from "./Components/Admin/Home/home";
import AdminBlog from './Components/Admin/Blogs/Blogs';
import AdminGallery from "./Components/Admin/Gallery/Gallery";
import AdminServices from "./Components/Admin/Services/Services";
import AdminAbout from "./Components/Admin/About/about";
import AdminNewBlog from './Components/Admin/Blogs/newblog';
import AdminNewPost from './Components/Admin/Gallery/newpost';
import AdminContactUs from './Components/Admin/ContactUs/contactus';
import AdminContactMain from './Components/Admin/ContactUs/contactmain';
import AdminDownloads from './Components/Admin/Downloads/Downloads';
import AdminJobs from './Components/Admin/Jobs/Jobs';
import AdminSocial from './Components/Admin/Social/Social';
import TrackPageViews from "./Components/TrackPageViews";
import AdminNewJoin from './Components/Admin/NewJoin/NewJoin'
import BlogPost from "./Components/Blogs/blogpost";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/adminlogin" />;
};

function App() {
  return (
    <AuthProvider>
      <TrackPageViews />
      <div>
        <Routes>



          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/download" element={<Download />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
          <Route path="/admin-about" element={<ProtectedRoute element={<AdminAbout />} />} />
          <Route path="/admin-home" element={<ProtectedRoute element={<AdminHome />} />} />
          <Route path="/admin-services" element={<ProtectedRoute element={<AdminServices />} />} />
          <Route path="/admin-blogs" element={<ProtectedRoute element={<AdminBlog />} />} />
          <Route path="/admin-gallery" element={<ProtectedRoute element={<AdminGallery />} />} />
          <Route path="/add-new-blog" element={<ProtectedRoute element={<AdminNewBlog />} />} />
          <Route path="/add-new-post" element={<ProtectedRoute element={<AdminNewPost />} />} />
          <Route path="/admin-contactus" element={<ProtectedRoute element={<AdminContactUs />} />} />
          <Route path="/admin-contact-main" element={<ProtectedRoute element={<AdminContactMain />} />} />
          <Route path="/admin-downloads" element={<ProtectedRoute element={<AdminDownloads />} />} />
          <Route path="/admin-jobs" element={<ProtectedRoute element={<AdminJobs />} />} />
          <Route path="/admin-social" element={<ProtectedRoute element={<AdminSocial />} />} />
          <Route path="/admin-newjoin" element={<ProtectedRoute element={<AdminNewJoin />} />} />

        </Routes>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
