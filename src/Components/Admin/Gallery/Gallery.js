import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import { Button, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import "../Blogs/blogs.css";
import blankimg from "../../Images/black-img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../../helper";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
const Gallery = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => {
    fetchProjects();
  }, []);
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
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allProjectIds = projects.map((project) => project._id);
      setSelectedProjects(allProjectIds);
    } else {
      setSelectedProjects([]);
    }
  };

  console.log();
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/project`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleCheckboxChange = (projectId) => {
    if (selectedProjects.includes(projectId)) {
      setSelectedProjects(selectedProjects.filter((id) => id !== projectId));
    } else {
      setSelectedProjects([...selectedProjects, projectId]);
    }
  };

  const handleDeleteSelectedProjects = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/api/project`, {
        data: { projectIds: selectedProjects },
      });
      setProjects(
        projects.filter((project) => !selectedProjects.includes(project._id))
      );
      setSelectedProjects([]);
    } catch (error) {
      console.error("Error deleting projects:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className="blogs-main">
        <div className="blogs-comp">
          <div className="blogs-btn">
            <Button
              onClick={() => navigate("/add-new-post")}
              backgroundColor={"#2C6856"}
              color={"#fff"}
            >
              ADD NEW
            </Button>
            <Button
              onClick={handleDeleteSelectedProjects}
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
          {projects.map((project) => (
            <div className="card py-4" key={project._id}>
              <Checkbox
                isChecked={selectedProjects.includes(project._id)}
                onChange={() => handleCheckboxChange(project._id)}
              />
              <div style={{ width: "100%" }}>
                <img
                  src={project.media.length > 0 ? project.media[0] : blankimg}
                  className="rounded-lg object-cover w-full h-full "
                />
              </div>
              <div className="card-detail">
                <h3>{project.name}</h3>
                <h1>{formatDate(project.date)}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(truncateText(project.content, 100)),
                  }}
                >
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
