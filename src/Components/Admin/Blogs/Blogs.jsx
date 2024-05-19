import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import { Button, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import "./blogs.css";
      import blankimg from "../../Images/black-img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../../helper";
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
              <div className="blogs-fil1">
                <div>FILTER BY</div>
                <select
                  style={{ border: "2px black solid", borderRadius: "30px" }}
                >
                  <option value="someOption">Some option</option>
                  <option value="otherOption">Other option</option>
                </select>
              </div>
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
        <div className="blogs-cards" >
          {posts.map((post) => (
            <div className="card py-4" key={post._id}>
              <Checkbox isChecked={selectedPosts.includes(post._id)} onChange={() => handlePostSelection(post._id)} />
              <Image
                style={{
                  width: "750px",
                  height: "160px",
                  borderRadius: "16px",
                }}
                src={post.media.length > 0 ? post.media[0] : blankimg}
              />

              <div className="card-detail">
                <h3>{post.title}</h3>
                <h1>{post.date}</h1>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
