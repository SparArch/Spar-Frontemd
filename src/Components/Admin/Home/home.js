import React, { useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import "./home.css";
import { Button, Input } from "@chakra-ui/react";
import clip from "../../Images/clip.png";
import left_align_icon from "../../Images/left_align.png";
import right_align_icon from "../../Images/right_align.png";
import center_align_icon from "../../Images/center_align.png";
import bullet_icon from "../../Images/bullets.png";
import b from "../../Images/b.png";
import axios from "axios";
import BACKEND_URL from "../../../helper";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [titleTopCover, setTitleTopCover] = useState("");
  const [contentTopCover, setContentTopCover] = useState("");
  const [mediaFileTopCover, setMediaFileTopCover] = useState(null);
  const [titleHello, setTitleHello] = useState("");
  const [contentHello, setContentHello] = useState("");
  const [mediaFileHello, setMediaFileHello] = useState(null);
  const [titleSpaces, setTitleSpaces] = useState("");
  const [contentSpaces, setContentSpaces] = useState("");
  const [mediaFileSpaces, setMediaFileSpaces] = useState(null);
  const [titleSolve, setTitleSolve] = useState("");
  const [mediaFileSolve, setMediaFileSolve] = useState(null);
  const [titleTestimonials, setTitleTestimonials] = useState("");
  const [contentTestimonials, setContentTestimonials] = useState("");
  const [mediaFileTestimonials, setMediaFileTestimonials] = useState(null);
  const [titleProjects, setTitleProjects] = useState("");
  const [locationProjects, setLocationProjects] = useState("");
  const [mediaFileProjects, setMediaFileProjects] = useState(null);
  const [titleJoin, setTitleJoin] = useState("");
  const [mediaFileJoin, setMediaFileJoin] = useState(null);
  const [mediaFilesClient, setMediaFilesClient] = useState(null);
  const handleFileChangeTopCover = (e) => {
    setMediaFileTopCover(e.target.files[0]);
  };
  const handleFileChangeHello = (e) => {
    setMediaFileHello(e.target.files[0]);
  };
  const handleFileChangeSpaces = (e) => {
    setMediaFileSpaces(e.target.files[0]);
  };
  const handleFileChangeSolve = (e) => {
    setMediaFileSolve(e.target.files[0]);
  };
  const handleFileChangeTestimonials = (e) => {
    setMediaFileTestimonials(e.target.files[0]);
  };
  const handleFileChangeProjects = (e) => {
    setMediaFileProjects(e.target.files[0]);
  };

  const handleFileChangeJoin = (e) => {
    setMediaFileJoin(e.target.files[0]);
  };
  const handleSubmitTopCover = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileTopCover);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/topCover`, {
        title: titleTopCover,
        content: contentTopCover,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };
  const handleFileChangeClient = (e) => {
    setMediaFilesClient(e.target.files[0]);
  };
  const handleSubmitHello = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileHello);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/hello`, {
        title: titleHello,
        content: contentHello,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };
  const handleSubmitClient = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFilesClient);
    formData.append("upload_preset", "chat-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", 
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/ourClients`, {
        media: secure_url,
      });
      console.log("Clients created successfully");
    } catch (error) {
      console.error("Error creating Clients:", error);
    }
  };

  const handleSubmitSpaces = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileSpaces);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/knowEverySpaces`, {
        title: titleSpaces,
        content: contentSpaces,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const handleSubmitSolve = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileSolve);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/solveForRightProblems`, {
        title: titleSolve,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const handleSubmitTestimonials = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileTestimonials);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/testimonials`, {
        name: titleTestimonials,
        content: contentTestimonials,
        image: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };
  const handleSubmitProjects = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileProjects);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/featuredProjects`, {
        projectName: titleProjects,
        location: locationProjects,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const handleSubmitJoin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileJoin);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/home/joinCollaborateTransform`, {
        title: titleJoin,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className="Titles-main">
        <div className="Titles">
          <div>
            <h3>HOME TOP COVER</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputTopCover"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeTopCover}
                />
                <label className="uploadbtn" htmlFor="uploadInputTopCover">
                  ADD MEDIA
                </label>
              </Button>
              <Button fontWeight={"800"}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={"italic"}>I</Button>
              <Button>
                <img src={clip} alt="clip_logo" />
              </Button>
              <Button>
                <img src={left_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={right_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={center_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={bullet_icon} alt="clip_logo" />
              </Button>

              <Button
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
                onClick={handleSubmitTopCover}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleTopCover}
                onChange={(e) => {
                  setTitleTopCover(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Input
                value={contentTopCover}
                onChange={(e) => {
                  setContentTopCover(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
          <div>
            <h3>OUR CLIENTS</h3>
            <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputClient"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeClient}
                />
                <label className="uploadbtn" htmlFor="uploadInputClient">
                  ADD MEDIA
                </label>
              </Button>
              <Button
              marginLeft={"2rem"}
              paddingRight={"2rem"}
              paddingLeft={"2rem"}
              backgroundColor={"#2C6856"}
              color={"#fff"}
              onClick={handleSubmitClient}
            >
              ADD
            </Button>
            <div className="prev_clients">{/* clients logo pictures */}</div>
          </div>
          <div>
            <h3>HELLO.</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputHello"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeHello}
                />
                <label className="uploadbtn" htmlFor="uploadInputHello">
                  ADD MEDIA
                </label>
              </Button>
              <Button fontWeight={"800"}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={"italic"}>I</Button>
              <Button>
                <img src={clip} alt="clip_logo" />
              </Button>
              <Button>
                <img src={left_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={right_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={center_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={bullet_icon} alt="clip_logo" />
              </Button>

              <Button
                onClick={handleSubmitHello}
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleHello}
                onChange={(e) => {
                  setTitleHello(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Input
                value={contentHello}
                onChange={(e) => {
                  setContentHello(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
          <div>
            <h3>WE KNOW EVERY SPACES</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputSpaces"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeSpaces}
                />
                <label className="uploadbtn" htmlFor="uploadInputSpaces">
                  ADD MEDIA
                </label>
              </Button>
              <Button fontWeight={"800"}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={"italic"}>I</Button>
              <Button>
                <img src={clip} alt="clip_logo" />
              </Button>
              <Button>
                <img src={left_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={right_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={center_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={bullet_icon} alt="clip_logo" />
              </Button>

              <Button
                onClick={handleSubmitSpaces}
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleSpaces}
                onChange={(e) => {
                  setTitleSpaces(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Input
                value={contentSpaces}
                onChange={(e) => {
                  setContentSpaces(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
          <div>
            <h3>WE SOLVE THE RIGHT PROBLEMS</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputSolve"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeSolve}
                />
                <label className="uploadbtn" htmlFor="uploadInputSolve">
                  ADD MEDIA
                </label>
              </Button>
              <Button fontWeight={"800"}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={"italic"}>I</Button>
              <Button>
                <img src={clip} alt="clip_logo" />
              </Button>
              <Button>
                <img src={left_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={right_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={center_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={bullet_icon} alt="clip_logo" />
              </Button>

              <Button
                onClick={handleSubmitSolve}
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleSolve}
                onChange={(e) => {
                  setTitleSolve(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              {/* <Input placeholder='Write...' borderRadius={'20px'} minHeight={'80px'} /> */}
            </div>
          </div>
          <div>
            <h3>TESTIMONIALS</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputTestimonials"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeTestimonials}
                />
                <label className="uploadbtn" htmlFor="uploadInputTestimonials">
                  ADD MEDIA
                </label>
              </Button>
              <Button fontWeight={"800"}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={"italic"}>I</Button>
              <Button>
                <img src={clip} alt="clip_logo" />
              </Button>
              <Button>
                <img src={left_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={right_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={center_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={bullet_icon} alt="clip_logo" />
              </Button>
              <Button>FONT Options</Button>

              <Button
                onClick={handleSubmitTestimonials}
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleTestimonials}
                onChange={(e) => {
                  setTitleTestimonials(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Input
                value={contentTestimonials}
                onChange={(e) => {
                  setContentTestimonials(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
          <div>
            <h3>OUR FEATURED PROJECTS</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputProjects"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeProjects}
                />
                <label className="uploadbtn" htmlFor="uploadInputProjects">
                  ADD MEDIA
                </label>
              </Button>
              <Button fontWeight={"800"}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={"italic"}>I</Button>
              <Button>
                <img src={clip} alt="clip_logo" />
              </Button>
              <Button>
                <img src={left_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={right_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={center_align_icon} alt="clip_logo" />
              </Button>
              <Button>
                <img src={bullet_icon} alt="clip_logo" />
              </Button>

              <Button
                onClick={handleSubmitProjects}
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleProjects}
                onChange={(e) => {
                  setTitleProjects(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Project Name........."
              />
              <Input
                value={locationProjects}
                onChange={(e) => {
                  setLocationProjects(e.target.value);
                }}
                placeholder="Location......."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
          <div>
            <h3>BLOGS</h3>
            <div>
              <Button
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
                onClick={() => {
                  navigate("/add-new-blog");
                }}
              >
                ADD
              </Button>
            </div>
          </div>
          <div>
            <h3>JOIN , COLLABORATE AND TRANSFORM TOGETHER</h3>
            <div className="title2">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputJoin"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeJoin}
                />
                <label className="uploadbtn" htmlFor="uploadInputJoin">
                  ADD MEDIA
                </label>
              </Button>
              <Button
                onClick={handleSubmitJoin}
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                ADD
              </Button>
            </div>
            <Input
              value={titleJoin}
              onChange={(e) => {
                setTitleJoin(e.target.value);
              }}
              marginTop={"20px"}
              placeholder="Title"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;