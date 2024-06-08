import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import "../Home/home.css";
import {
  Button,
  Image,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
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
import DOMPurify from "dompurify";
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
  const [mediaFilesCertifications, setMediaFilesCertifications] =
    useState(null);
  const [itemsAboutUs, setItemsAboutUs] = useState([]);
  const [itemsSolve, setItemsSolve] = useState([]);
  const [itemsMission, setItemsMission] = useState([]);
  const [itemsClients, setItemsClients] = useState([]);
  const [itemsCertifications, setItemsCertifications] = useState([]);

  useEffect(() => {
    fetchItemsAboutUs();
  }, []);

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

  const handleFileChangeCertifications = (e) => {
    setMediaFilesCertifications(e.target.files[0]);
  };
  const fetchItemsAboutUs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about`);
      setItemsAboutUs(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteAboutUs = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/about/${itemId}`);
      setItemsAboutUs(itemsAboutUs.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
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

  const handleSubmitAboutUs = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFileAboutUs);
    formData.append("upload_preset", "spar-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload", // Replace with your Cloudinary cloud name
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

  const handleSubmitSolutions = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFilesSolutions);
    formData.append("upload_preset", "spar-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload",
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
    formData.append("upload_preset", "spar-app");
    try {
      if (mediaFilesVision) {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dpdrteifc/upload",
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
    formData.append("upload_preset", "spar-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload",
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

  const handleSubmitCertifications = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFilesCertifications);
    formData.append("upload_preset", "spar-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload",
        formData
      );

      // Obtain URL of the uploaded file
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/about/certifications`, {
        media: secure_url,
      });
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log("Certifications created successfully");
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
                  accept="image/*,video/*"
                  style={{ display: "none" }}
                  onChange={handleFileChangeAboutUs}
                />
                <label className="uploadbtn" htmlFor="uploadInput">
                  ADD MEDIA
                </label>
              </Button>

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
            <div className="grid md:gap-10 gap-4 grid-cols-2 md:grid-cols-3 ">
              {itemsAboutUs.map((item) => {
                // Check if the media is an image or video based on file extension
                const isImage = /\.(jpg|jpeg|png|gif)$/i.test(item.image);
                const isVideo = /\.(mp4|webm|ogg)$/i.test(item.image);

                return (
                  <div
                    key={item._id}
                    className="relative mt-[12px] w-[300px] h-[240px] bg-slate-300 p-[20px] rounded-xl overflow-hidden"
                    style={{
                      backgroundSize: isImage ? "cover" : "initial",
                      backgroundPosition: isImage ? "center" : "initial",
                      backgroundImage: isImage ? `url(${item.image})` : "none",
                    }}
                  >
                    {isVideo && (
                      <video
                        src={item.image}
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div
                      className="relative"
                      style={{
                        marginLeft: "230px",
                        zIndex: "10",
                      }}
                      onClick={() => handleDeleteAboutUs(item._id)}
                    >
                      <Image cursor={"pointer"} src={del} height={"30px"} />
                    </div>
                  </div>
                );
              })}
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

          <div className="title3">
            <h3>OUR CERTIFICATION</h3>
            <Button backgroundColor={"#2C6856"} color={"#fff"}>
              <input
                type="file"
                id="uploadInputCertifications"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChangeCertifications}
              />
              <label className="uploadbtn" htmlFor="uploadInputCertifications">
                ADD MEDIA
              </label>
            </Button>
            <Button
              // marginLeft={"20rem"}
              paddingRight={"2rem"}
              paddingLeft={"2rem"}
              backgroundColor={"#2C6856"}
              color={"#fff"}
              onClick={handleSubmitCertifications}
            >
              ADD
            </Button>
          </div>
          <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
            {itemsCertifications.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  borderRadius: "1rem",
                  height: "240px",
                  width: "300px",
                  position: "relative", // Ensure the delete icon is positioned correctly
                }}
                // className="w-[300px] h-[200px] bg-slate-300 p-[20px] rounded-xl"
              >
                <div className="flex-col p-[20px] justify-center">
                  <Image paddingLeft={"70px"} src={item.media} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    padding: "10px",
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
