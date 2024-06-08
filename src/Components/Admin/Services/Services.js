import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
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
import del from "../../Images/delete.png";
import "./services.css";
import axios from "axios";
import BACKEND_URL from "../../../helper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
const Services = () => {
  // const [text, setText] = useState('');
  const toast = useToast();
  const [titleServices, setTitleServices] = useState("");
  const [contentServices, setContentServices] = useState("");
  const [titleWork, setTitleWork] = useState("");
  const [contentWork, setContentWork] = useState("");
  const [mediaFileServices, setMediaFileServices] = useState(null);
  const [mediaFileWork, setMediaFileWork] = useState(null);
  const [itemsWork, setItemsWork] = useState([]);
  const [itemsServices, setItemsServices] = useState([]);
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

  useEffect(() => {
    fetchItemsWork();
  }, []);

  useEffect(() => {
    fetchItemsServices();
  }, []);
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
    formData.append("upload_preset", "spar-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload", // Replace with your Cloudinary cloud name
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
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
    formData.append("upload_preset", "spar-app");
    try {
      // Upload file to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload", // Replace with your Cloudinary cloud name
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
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Now you can use secure_url to display the media or save it to your backend
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const fetchItemsWork = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/service/workProcess`
      );
      setItemsWork(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteWork = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/service/workProcess/${itemId}`);
      setItemsWork(itemsWork.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const fetchItemsServices = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/service/services`);
      setItemsServices(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteServices = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/service/services/${itemId}`);
      setItemsServices(itemsServices.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEditorChangeServices = (content, editor) => {
    console.log("Content was updated:", content);
    setContentServices(content);
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
              {/* <Input
                value={contentServices}
                onChange={(e) => {
                  setContentServices(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
              /> */}
              <ReactQuill
                value={contentServices}
                onChange={handleEditorChangeServices}
              />
            </div>
          </div>
          <div>
            <div className="grid md:gap-10 gap-4 grid-cols-2 md:grid-cols-3 ">
              {itemsServices.map((item) => (
                <div
                  key={item._id}
                  className="bg-slate-300 p-[20px] rounded-xl flex-col max-w-[300px] align-middle justify-center text-justify items-center"
                >
                  <div className="flex justify-center">
                    <Image src={item.media} />
                  </div>
                  <div className="flex justify-center">
                    <h3>{item.title}</h3>
                  </div>
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                    fontSize={"12px"}
                  >
                  </Text>
                  <div
                    style={{
                      position: "relative",
                      marginLeft: "235px",
                      zIndex: "100",
                    }}
                    onClick={() => handleDeleteServices(item._id)}
                  >
                    <Image cursor={"pointer"} src={del} height={"30px"} />
                  </div>
                </div>
              ))}
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
                onChange={(e) => {
                  setTitleWork(e.target.value);
                }}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
              <Textarea
                value={contentWork}
                onChange={(e) => {
                  setContentWork(e.target.value);
                }}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"80px"}
                marginBottom={"20px"}
              />
            </div>

            <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
              {itemsWork.map((item) => (
                <div className="flex gap-4" style={{ marginBottom: "24px" }}>
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
                      onClick={() => handleDeleteWork(item._id)}
                    >
                      <Image
                        style={{
                          paddingTop: "6px",
                          marginTop: "4px",
                          marginRight: "12px",
                        }}
                        cursor={"pointer"}
                        src={del}
                        height={"30px"}
                      />
                    </div>

                    <div className="flex-col p-[20px] justify-center">
                      <Image src={item.media} />
                      <Text
                        textAlign="center"
                        fontSize={"30px"}
                        fontWeight={"800"}
                        color={"#1E443E"}
                      >
                        {item.content}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
