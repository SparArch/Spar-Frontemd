import React, { useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import "./newblog.css";
import clip from "../../Images/clip.png";
import left_align_icon from "../../Images/left_align.png";
import right_align_icon from "../../Images/right_align.png";
import center_align_icon from "../../Images/center_align.png";
import bullet_icon from "../../Images/bullets.png";
import b from "../../Images/b.png";
import BACKEND_URL from "../../../helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const Newblog = () => {
  const toast = useToast()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles(files);
  };

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setContent(content);
  };

  const handleSubmit = async () => {
    try {
      // Upload multiple media files to Cloudinary
      const mediaUrls = await Promise.all(
        mediaFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "spar-app");

          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dpdrteifc/upload",
            formData
          );

          return response.data.secure_url;
        })
      );

      await axios.post(`${BACKEND_URL}/api/posts`, {
        title,
        content,
        tags,
        media: mediaUrls,
      });
      toast({
        title: "Successfully Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Reset form fields after successful submission
      setTitle("");
      setContent("");
      setTags("");
      setMediaFiles([]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className="blogs-main">
        <div className="blogs">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "40rem" }}
            >
              <h3>ADD NEW POST</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button
                  onClick={handleSubmit}
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                >
                  PUBLISH
                </Button>
                <Button
                  onClick={() => {
                    navigate("/admin-blogs");
                  }}
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                >
                  BACK
                </Button>
              </div>
            </div>
            <div>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxW={"90%"}
                marginTop={"20px"}
                borderRadius={"50px"}
                marginBottom={"20px"}
                placeholder="Title"
              />
            </div>
            <div>
              <Button backgroundColor={"#2C6856"} color={"#fff"}>
                <input
                  type="file"
                  id="uploadInput"
                  accept="image/*,video/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  multiple
                />
                <label className="uploadbtn" htmlFor="uploadInput">
                  ADD MEDIA
                </label>
              </Button>
            </div>

            <div style={{ maxWidth: "90%" }}>
              {/* <Input
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                maxWidth={"90%"}
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"300px"}
              /> */}
              <ReactQuill
                value={content}
                onChange={handleEditorChange}
              />
            </div>
            <div>
              <h3>Tags</h3>
            </div>
            <div>
              <Textarea
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
                maxWidth={"90%"}
                borderRadius={"20px"}
                minHeight={"80px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newblog;
