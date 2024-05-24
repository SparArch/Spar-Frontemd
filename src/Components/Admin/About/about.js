import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import "../Home/home.css";
import { Button, Image, Input, Text, useToast } from "@chakra-ui/react";
import clip from "../../Images/clip.png";
import left_align_icon from "../../Images/left_align.png";
import right_align_icon from "../../Images/right_align.png";
import center_align_icon from "../../Images/center_align.png";
import bullet_icon from "../../Images/bullets.png";
import b from "../../Images/b.png";
import axios from "axios";
import BACKEND_URL from "../../../helper";
import del from "../../Images/delete.png";
import solImage from "../../Images/solution1.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const About = () => {
  const toast = useToast();
  const [titleAboutUs, setTitleAboutUs] = useState("");
  const [contentAboutUs, setContentAboutUs] = useState("");
  const [mediaFileAboutUs, setMediaFileAboutUs] = useState(null);
  const [titleSolutions, setTitleSolutions] = useState("");
  const [contentSolutions, setContentSolutions] = useState("");
  const [mediaFilesSolutions, setMediaFilesSolutions] = useState(null);
  const [titleVision, setTitleVision] = useState("");
  const [contentVision, setContentVision] = useState("");
  const [mediaFilesVision, setMediaFilesVision] = useState(null);
  const [mediaFilesClient, setMediaFilesClient] = useState(null);
  const [itemsSolve, setItemsSolve] = useState([]);
  const [itemsMission, setItemsMission] = useState([]);
  const [itemsClients, setItemsClients] = useState([]);
  const [itemsCertifications, setItemsCertifications] = useState([]);
 
  useEffect(() => {
    fetchItemsSolve();
  }, []);

  useEffect(() => {
    fetchItemsMission();
  }, []);

  useEffect(() => {
    fetchItemsClients();
  }, []);

  useEffect(() => {
    fetchItemsCertifications();
  }, []);
  const handleFileChangeAboutUs = (e) => {
    setMediaFileAboutUs(e.target.files[0]);
  };

  const handleFileChangeSolutions = (e) => {
    setMediaFilesSolutions(e.target.files[0]);
  };

  const handleFileChangeVision = (e) => {
    setMediaFilesVision(e.target.files[0]);
  };

  const handleFileChangeClient = (e) => {
    setMediaFilesClient(e.target.files[0]);
  };

  const handleSubmitAboutUs = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileAboutUs);
    formData.append("upload_preset", "chat-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload", // Replace with your Cloudinary cloud name
        formData
      );
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/about`, {
        title: titleAboutUs,
        content: contentAboutUs,
        image: secure_url,
      });
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log("About Us created successfully");
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const fetchItemsSolve = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/solutions`);
      setItemsSolve(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteSolve = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/about/solutions/${itemId}`);
      setItemsSolve(itemsSolve.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const fetchItemsMission = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/mission`);
      setItemsMission(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteMission = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/about/mission/${itemId}`);
      setItemsMission(itemsMission.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const fetchItemsClients = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/ourClients`);
      setItemsClients(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const handleDeleteClients = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/about/ourClients/${itemId}`);
      setItemsClients(itemsClients.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const fetchItemsCertifications = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/about/certifications`
      );
      setItemsCertifications(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const handleDeleteCertifications = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/about/certifications/${itemId}`);
      setItemsCertifications(
        itemsCertifications.filter((item) => item._id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleSubmitSolutions = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFilesSolutions);
    formData.append("upload_preset", "chat-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload",
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/about/solutions`, {
        title: titleSolutions,
        content: contentSolutions,
        media: secure_url,
      });
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log("Solutions created successfully");
    } catch (error) {
      console.error("Error creating Solutions:", error);
    }
  };

  const handleSubmitVision = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFilesVision);
    formData.append("upload_preset", "chat-app");
    try {
      if (mediaFilesVision) {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dlpvcxf2m/upload",
          formData
        );

        const { secure_url } = response.data;
        await axios.post(`${BACKEND_URL}/api/about/mission`, {
          title: titleVision,
          content: contentVision,
          media: secure_url,
        });
        toast({
          title: "Successfully Added",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        await axios.post(`${BACKEND_URL}/api/about/mission`, {
          title: titleVision,
          content: contentVision,
        });
        toast({
          title: "Successfully Added",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }

      console.log("Mission/Vision created successfully");
    } catch (error) {
      console.error("Error creating Mission/Vision:", error);
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

      await axios.post(`${BACKEND_URL}/api/about/ourClients`, {
        media: secure_url,
      });
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log("Clients created successfully");
    } catch (error) {
      console.error("Error creating Clients:", error);
    }
  };

  const handleEditorChangeVision = (content, editor) => {
    console.log("Content was updated:", content);
    setContentVision(content);
  };

  const handleEditorChangeAboutUs = (content, editor) => {
    console.log("Content was updated:", content);
    setContentAboutUs(content);
  };

  const handleEditorChangeSolutions = (content, editor) => {
    console.log("Content was updated:", content);
    setContentSolutions(content);
  };

  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className="Titles-main">
        <div className="Titles">
          <div>
            <h3>ABOUT US</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeAboutUs}
                />
                <label className="uploadbtn" htmlFor="uploadInput">
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
                onClick={handleSubmitAboutUs}
                marginLeft={"20rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                SAVE CHANGES
              </Button>
            </div>
            <div>
              <Input
                value={titleAboutUs}
                onChange={(e) => setTitleAboutUs(e.target.value)}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              {/* <Input
                value={contentAboutUs}
                onChange={(e) => setContentAboutUs(e.target.value)}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              /> */}
              <ReactQuill
                value={contentAboutUs}
                onChange={handleEditorChangeAboutUs}
              />
            </div>
          </div>
          <div>
            <h3>SOLUTIONS</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputSol"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeSolutions}
                />
                <label htmlFor="uploadInputSol">ADD MEDIA</label>
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
                onClick={handleSubmitSolutions}
                marginLeft={"20rem"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                SAVE CHANGES
              </Button>
            </div>

            <Input
              value={titleSolutions}
              onChange={(e) => {
                setTitleSolutions(e.target.value);
              }}
              marginTop={"20px"}
              borderRadius={"50px"}
              marginBottom={"20px"}
              placeholder="Title"
            />
            <div className="title1">
              {/* <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button> */}
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
                marginLeft={"28rem"}
                marginBottom={"16px"}
                backgroundColor={"#2C6856"}
                color={"#fff"}
                paddingLeft={"2rem"}
                paddingRight={"2rem"}
              >
                ADD
              </Button>
            </div>
            {/* <Input
              value={contentSolutions}
              onChange={(e) => {
                setContentSolutions(e.target.value);
              }}
              placeholder="Write..."
              marginTop={"20px"}
              marginBottom={"20px"}
              borderRadius={"20px"}
              minHeight={"80px"}
            /> */}
             <ReactQuill
                value={contentSolutions}
                onChange={handleEditorChangeSolutions}
              />
          </div>
          <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
            {itemsSolve.map((item) => (
              <div className="flex gap-4">
                <div
                  key={item._id}
                  className="bg-[gray] max-w-[300px] rounded-xl"
                >
                  <div
                    style={{
                      position: "relative",
                      marginLeft: "250px",
                      zIndex: "100",
                    }}
                    onClick={() => handleDeleteSolve(item._id)}
                  >
                    <Image
                      style={{ paddingTop: "6px", marginTop: "4px" }}
                      cursor={"pointer"}
                      src={del}
                      height={"30px"}
                    />
                  </div>

                  <div className="flex-col p-[20px] justify-center">
                    <Image paddingLeft={"70px"} src={item.media} />
                    <Text
                      textAlign="center"
                      fontSize={"30px"}
                      fontWeight={"800"}
                      color={"#1E443E"}
                    >
                      {/* Highly Commited <br /> to Work */}
                      {item.title}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>MISSION/ VISION</h3>
            <div className="title1">
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInputVision"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeVision}
                />
                <label htmlFor="uploadInputVision">ADD MEDIA</label>
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
                onClick={handleSubmitVision}
              >
                ADD
              </Button>
            </div>
            <div>
              <Input
                value={titleVision}
                onChange={(e) => {
                  setTitleVision(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              {/* <Input
                value={contentVision}
                onChange={(e) => {
                  setContentVision(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              /> */}
              <ReactQuill
                value={contentVision}
                onChange={handleEditorChangeVision}
              />
            </div>
          </div>
          <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
            {itemsMission.map((item) => (
              <div key={item._id} className="flex-col gap-4">
                <div className="max-w-[300px] rounded-xl">
                  <div
                    style={{
                      position: "relative",
                      marginLeft: "250px",
                      zIndex: "100",
                    }}
                    onClick={() => handleDeleteMission(item._id)}
                  >
                    <Image cursor={"pointer"} src={del} height={"30px"} />
                  </div>

                  <div className="flex-col p-[20px] justify-center">
                    <Text
                      fontWeight={"800"}
                      fontSize={"20px"}
                      marginBottom={"20px"}
                    >
                      {item.title}
                    </Text>
                    <Text fontSize={"15px"}>{item.content}</Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="title3">
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
              // marginLeft={"20rem"}
              paddingRight={"2rem"}
              paddingLeft={"2rem"}
              backgroundColor={"#2C6856"}
              color={"#fff"}
              onClick={handleSubmitClient}
            >
              ADD
            </Button>
          </div>

          <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
            {itemsClients.map((item) => (
              <div
                key={item._id}
                className="w-[300px] h-[200px] bg-slate-300 p-[20px] rounded-xl"
                style={{
                  backgroundImage: `url(${item.media})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    marginLeft: "230px",
                    zIndex: "100",
                  }}
                  onClick={() => handleDeleteClients(item._id)}
                >
                  <Image cursor={"pointer"} src={del} height={"30px"} />
                </div>
              </div>
            ))}
          </div>

          <div className="title3">
            <h3>OUR CERTIFICATION</h3>
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
              // marginLeft={"20rem"}
              paddingRight={"2rem"}
              paddingLeft={"2rem"}
              backgroundColor={"#2C6856"}
              color={"#fff"}
              onClick={handleSubmitClient}
            >
              ADD
            </Button>
          </div>
          <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
            {itemsCertifications.map((item) => (
              <div
                key={item._id}
                style={{
                  backgroundImage: `url(${item.media})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[300px] h-[200px] bg-slate-300 p-[20px] rounded-xl"
              >
                <div
                  style={{
                    position: "relative",
                    marginLeft: "230px",
                    zIndex: "100",
                  }}
                  onClick={() => handleDeleteCertifications(item._id)}
                >
                  <Image cursor={"pointer"} src={del} height={"30px"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
