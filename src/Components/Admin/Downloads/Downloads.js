import React, { useEffect, useState } from "react";
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
import axios from "axios";
import BACKEND_URL from "../../../helper";
const Downloads = () => {
  const [projectName, setProjectName] = useState("");
  const [content, setContent] = useState("");
  const [mediaFiles, setMediaFiles] = useState(null);
  const [itemsDownloads, setItemsDownloads] = useState([]);

  useEffect(() => {
    fetchItemsDownloads();
  }, []);

  const handleFileChange = (e) => {
    setMediaFiles(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", mediaFiles);
    formData.append("upload_preset", "spar-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpdrteifc/upload", // Replace with your Cloudinary cloud name
        formData
      );
      const { secure_url } = response.data;

      await axios.post(`${BACKEND_URL}/api/downloads`, {
        projectName,
        content,
        media: secure_url,
      });
      console.log("Uploaded media URL:", secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const fetchItemsDownloads = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/downloads`);
      setItemsDownloads(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDeleteDownloads = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/downloads/${itemId}`);
      setItemsDownloads(itemsDownloads.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="bg-[#D9E2DF]">
      <NavAd />
      <SideNav />
      <div className="flex justify-center mt-[10rem] bg-white">
        <div className="flex justify-flex-start g-[50px]">
          <div className=" mt-[20px] ml-[-100px]">
            <div className="flex gap-[500px] mb-[30px]">
              <h1 className=" text-[#4a8780] font-bold text-[32px]">
                Add New File
              </h1>
              <div className="flex gap-5">
                <Button
                  onClick={handleSubmit}
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                >
                  Publish
                </Button>
                <Button backgroundColor={"#2C6856"} color={"#fff"}>
                  Back
                </Button>
              </div>
            </div>
            <Input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project Name..."
              className="mb-[30px]"
            />
            <Button
              style={{ marginBottom: "16px" }}
              backgroundColor={"#2C6856"}
              color={"#fff"}
            >
              <input
                type="file"
                id="uploadInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="uploadInput">ADD MEDIA</label>
            </Button>

            <div>
              <Input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                marginTop={"30px"}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"200px"}
              />
            </div>
            <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
              {itemsDownloads.map((item) => (
                <div
                  style={{
                    height: "240px",
                    width: "300px",
                    backgroundImage: `url(${item.media})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  key={item._id}
                  className="flex justify-end mt-[20px] mb-[100px] h-[200px] w-[300px] bg-[#dedcdc] rounded-xl"
                >
                  <div style={{ padding: "10px" }}>
                    <Image
                      onClick={() => {
                        handleDeleteDownloads(item._id);
                      }}
                      cursor={"pointer"}
                      src={del}
                      height={"30px"}
                    />
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

export default Downloads;
