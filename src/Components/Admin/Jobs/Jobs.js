import React, { useEffect, useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import {
  Button,
  Checkbox,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import clip from "../../Images/clip.png";
import left_align_icon from "../../Images/left_align.png";
import right_align_icon from "../../Images/right_align.png";
import center_align_icon from "../../Images/center_align.png";
import bullet_icon from "../../Images/bullets.png";
import b from "../../Images/b.png";
import del from "../../Images/delete.png";
import pos from "../../Images/position.jpeg";
import axios from "axios";
import BACKEND_URL from "../../../helper";
const Jobs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [itemsJobs, setItemsJobs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const contactsPerPage = 5;

  useEffect(() => {
    fetchContacts();
  }, [currentPage]);

  useEffect(() => {
    fetchItemsJobs();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contacts/jobs`, {
        title,
        content,
      });
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error :", error);
    }
  };
  const fetchItemsJobs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contacts/jobs`);
      setItemsJobs(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const handleDeleteJobs = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/contacts/jobs/${itemId}`);
      setItemsJobs(itemsJobs.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contacts/collab`);
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/api/contacts/collab/${selectedContacts.join(",")}`
      );
      if (response.status === 200) {
        setContacts(
          contacts.filter((contact) => !selectedContacts.includes(contact._id))
        );
        setSelectedContacts([]);
        setSelectAll(false); // Reset select all state
      }
    } catch (error) {
      console.error("Error deleting contacts:", error);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(currentContacts.map((contact) => contact._id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectContact = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(
        selectedContacts.filter((contactId) => contactId !== id)
      );
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };
  const handleExport = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/contacts/collab/export`,
        {
          selectedContacts,
        },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "collab.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error exporting contacts:", error);
    }
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contacts/collab/send-email`, {
        selectedContacts,
      });
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  const currentContacts = contacts.slice(0, currentPage * contactsPerPage);

  return (
    <div>
      <NavAd />
      <SideNav />
      <div className="flex justify-center mt-[10rem] bg-white">
        <div className="flex justify-flex-start g-[50px]">
          <div className="ml-[100px]">
            <div className="flex gap-[700px] mb-[30px]">
              <h1 className=" text-[#4a8780] font-bold text-[32px]">JOB</h1>
              <div className="flex ">
                <Button
                  onClick={handleSubmit}
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                >
                  SAVE CHANGES
                </Button>
              </div>
            </div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-[30px]"
              placeholder="Title..."
            />
            <div className="flex gap-2">
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
              <Button>FONT Options</Button>
            </div>
            <div>
              <Input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                marginTop={"30px"}
                marginBottom="16px"
                placeholder="Write..."
                borderRadius={"20px"}
                minHeight={"200px"}
              />
            </div>
            <div className="grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 ">
              {itemsJobs.map((item) => (
                <div
                  key={item._id}
                  className="flex-col gap-4"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    overflow: "hidden", // Ensures the image does not overflow the div
                    width: "300px", // Set your desired width
                    height: "240px", // Set your desired height
                    position: "relative", // To position the delete icon
                  }}
                >
                  <img
                    src={pos}
                    alt="Background"
                    style={{
                      width: "100%",
                      height: "100%",
                      filter: "blur(4px)",
                      borderRadius: "24px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="max-w-[300px] rounded-xl">
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: "100",
                      }}
                      onClick={() => handleDeleteJobs(item._id)}
                    >
                      <Image cursor={"pointer"} src={del} height={"30px"} />
                      <div className="flex-col p-[20px] justify-center">
                        <Text
                          fontWeight={"800"}
                          fontSize={"20px"}
                          marginBottom={"20px"}
                          color="white"
                          textAlign="center"
                        >
                          {item.title}
                        </Text>
                        <Text
                          textAlign="center"
                          color="white"
                          fontSize={"15px"}
                        >
                          {item.content}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h1 className="text-[#4a8780] font-bold text-[32px]">
              COLLAB DATA
            </h1>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{ display: "flex", marginTop: "20px", gap: "200px" }}>
              <div style={{ display: "flex", gap: "50px" }}>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
                  <Text>SELECT ALL</Text>
                </div>
                <Button
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                  onClick={handleDelete}
                >
                  DELETE
                </Button>
                <Button onClick={handleSendEmail} backgroundColor={"#2C6856"} color={"#fff"}>
                  SEND TO MAIL
                </Button>
              </div>
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Text>FILTER BY</Text>
                  <select
                    style={{ border: "2px black solid", borderRadius: "30px" }}
                  >
                    <option value="someOption">Some option</option>
                    <option value="otherOption">Other option</option>
                  </select>
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
          </div>
          <div>
            <TableContainer>
              <Table variant="unstyled" border={"2px"} marginTop="12px">
                <Thead>
                  <Tr>
                    <Th border={"2px"}></Th>
                    <Th border={"2px"}>Name/Date</Th>
                    <Th isNumeric border={"2px"}>
                      Contact No
                    </Th>
                    <Th border={"2px"}>Mail</Th>
                    <Th border={"2px"}>Message</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {currentContacts.map((contact) => (
                    <Tr key={contact._id}>
                      <Td border={"2px"}>
                        <Checkbox
                          isChecked={selectedContacts.includes(contact._id)}
                          onChange={() => handleSelectContact(contact._id)}
                        />
                      </Td>
                      <Td border={"2px"}>
                        <Text fontWeight={800}>{contact.fullName}</Text> <br />
                        <Text color={"#8D8D94"}>
                          {new Date(contact.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </Text>
                      </Td>
                      <Td border={"2px"} fontWeight={800}>
                        {contact.contactNo}
                      </Td>
                      <Td border={"2px"}>{contact.email}</Td>
                      <Td border={"2px"}>{contact.message}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            {currentContacts.length < contacts.length && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "3rem",
                  marginTop: "2rem",
                  marginLeft: "-10rem",
                }}
              >
                <Button
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  LOAD MORE
                </Button>
              </div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                marginTop: "2rem",
                marginLeft: "-10rem",
              }}
            >
              <Button onClick={handleExport} backgroundColor={"#2C6856"} color={"#fff"}>
                EXPORT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Jobs;
