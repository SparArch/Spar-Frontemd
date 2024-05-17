import React, { useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import { Button, Image, Input } from "@chakra-ui/react";
import clip from "../../Images/clip.png";
import left_align_icon from "../../Images/left_align.png";
import right_align_icon from "../../Images/right_align.png";
import center_align_icon from "../../Images/center_align.png";
import bullet_icon from "../../Images/bullets.png";
import b from "../../Images/b.png";
import del from "../../Images/delete.png";
import "./services.css";
import axios from "axios";
import BACKEND_URL from "../../../helper";
const Services = () => {
  // const [text, setText] = useState('');
  const [titleServices, setTitleServices] = useState("");
  const [contentServices, setContentServices] = useState("");
  const [titleWork, setTitleWork] = useState("");
  const [contentWork, setContentWork] = useState("");
  const [mediaFileServices, setMediaFileServices] = useState(null);
  const [mediaFileWork, setMediaFileWork] = useState(null);
  // const handleButtonClick = () => {
  //   const boldText = `<b>${text}</b>`; // Wrap text in <b> HTML tag for bold formatting
  //   const data = { text: boldText };
  //   console.log(data);
  //     axios.post('your-backend-endpoint', data)
  //       .then(response => {
  //       console.log('Response from backend:', response.data);
  //       // Handle response as needed
  //     })
  //   .catch(error => {
  //     console.error('Error sending data to backend:', error);
  //     // Handle error
  //   });
  // }

  const handleFileChangeServices = (e) => {
    setMediaFileServices(e.target.files[0]);
  };

  const handleFileChangeWork = (e) => {
    setMediaFileWork(e.target.files[0]);
  };

  const handleSubmitServices = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileServices);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/service/services`, {
        title: titleServices,
        content: contentServices,
        media: secure_url,
      });
      console.log("Services created successfully");

      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const handleSubmitWork = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileWork);
    formData.append("upload_preset", "chat-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/service/workProcess`, {
        title: titleWork,
        content: contentWork,
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
      <div className="services-main">
        <div className="service">
          <div>
            <h3>SERVICES</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputServices"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeServices}
                />
                <label className="uploadbtn" htmlFor="uploadInputServices">
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
                onClick={handleSubmitServices}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleServices}
                onChange={(e) => {
                  setTitleServices(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Input
               value={contentServices}
               onChange={(e) => {
                 setContentServices(e.target.value);
               }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>OUR WORK PROCESS</h3>
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputWork"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeWork}
                />
                <label className="uploadbtn" htmlFor="uploadInputWork">
                  ADD MEDIA
                </label>
              </Button>
              <Button
                marginLeft={"20rem"}
                paddingRight={"2rem"}
                paddingLeft={"2rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
                onClick={handleSubmitWork}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
               value={titleWork}
               onChange={(e)=>{
                setTitleWork(e.target.value)
               }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Input
              value={contentWork}
              onChange={(e)=>{
                setContentWork(e.target.value)
               }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
            <div>
              <div className="work-process">
                <div style={{ padding: "10px" }}>
                  <Image cursor={"pointer"} src={del} height={"30px"} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <h3>CERTIFICATES</h3>
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                ADD MEDIA
              </Button>
            </div>
            <div>
              <div className="certificates">
                <div style={{ padding: "10px" }}>
                  <Image cursor={"pointer"} src={del} height={"30px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
