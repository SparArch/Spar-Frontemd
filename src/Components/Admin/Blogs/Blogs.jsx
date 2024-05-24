import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import { Button, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import "./blogs.css";
import blankimg from "../../Images/black-img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../../helper";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
const Blogs = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  // Function to fetch all posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, options);
    return `${formattedDate}`;
  };
  // Function to handle post selection
  const handlePostSelection = (postId) => {
    if (selectedPosts.includes(postId)) {
      setSelectedPosts(selectedPosts.filter((id) => id !== postId));
    } else {
      setSelectedPosts([...selectedPosts, postId]);
    }
  };

  // Function to handle delete selected posts
  const handleDeleteSelectedPosts = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/api/posts/${selectedPosts.join(",")}`);
      fetchPosts();
      setSelectedPosts([]);
      setSelectAll(false);
    } catch (error) {
      console.error("Error deleting selected posts:", error);
    }
  };
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allPostIds = posts.map((post) => post._id);
      setSelectedPosts(allPostIds);
    } else {
      setSelectedPosts([]);
    }
  };

  useEffect(() => {
    // Fetch all posts when the component mounts
    fetchPosts();
  }, []);

  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className="blogs-main">
        <div className="blogs-comp">
          <div className="blogs-btn">
            <Button
              onClick={() => navigate("/add-new-blog")}
              backgroundColor={"#2C6856"}
              color={"#fff"}
            >
              ADD NEW
            </Button>
            <Button
              onClick={handleDeleteSelectedPosts}
              backgroundColor={"#2C6856"}
              color={"#fff"}
            >
              DELETE
            </Button>
          </div>
          <div className="blogs-filter">
            <div className="blogs-check">
              <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
              <Text>SELECT ALL</Text>
            </div>
            <div className="blogs-fil">
              <div>
                <Input
                  borderRadius={"2rem"}
                  type="search"
                  minWidth={"20px"}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blogs-cards">
          {posts.map((post) => (
            <div className="card py-4" key={post._id}>
              <Checkbox
                isChecked={selectedPosts.includes(post._id)}
                onChange={() => handlePostSelection(post._id)}
              />{" "}
              {/* <Image
                width="750px"
                height="160px"
                  style={{
                    width: "750px",
                    height: "160px",
                    borderRadius: "16px",
                  }}
                 
                /> */}
              <div style={{ width: "100%" }}>
                <img
                  src={post.media.length > 0 ? post.media[0] : blankimg}
                  className="rounded-lg object-cover w-full h-full "
                />
              </div>
              <div className="card-detail">
                <h3>{post.title}</h3>
                <h1>{formatDate(post.date)}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(truncateText(post.content, 100)),
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
