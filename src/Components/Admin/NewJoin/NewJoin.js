import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import NavAd from "../NavAd";
import {
  Button,
  Checkbox,
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
import axios from "axios";
import BACKEND_URL from "../../../helper";

const NewJoin = () => {
  const [join, setJoin] = useState([]);
  const [selectedJoin, setSelectedJoin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const contactsPerPage = 5;
  useEffect(() => {
    fetchJoin();
  }, [currentPage]);

  const fetchJoin = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contacts/join`);
      setJoin(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/api/contacts/join/${selectedJoin.join(",")}`
      );
      if (response.status === 200) {
        setJoin(join.filter((contact) => !selectedJoin.includes(contact._id)));
        setSelectedJoin([]);
        setSelectAll(false); // Reset select all state
      }
    } catch (error) {
      console.error("Error deleting contacts:", error);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedJoin([]);
    } else {
      setSelectedJoin(currentContacts.map((contact) => contact._id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectContact = (id) => {
    if (selectedJoin.includes(id)) {
      setSelectedJoin(selectedJoin.filter((contactId) => contactId !== id));
    } else {
      setSelectedJoin([...selectedJoin, id]);
    }
  };

  const handleExport = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/contacts/join/export`,
        {
          selectedJoin,
        },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "join.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error exporting contacts:", error);
    }
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contacts/join/send-email`, {
        selectedJoin,
      });
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  const currentContacts = join.slice(0, currentPage * contactsPerPage);
  return (
    <div>
      <NavAd />
      <SideNav />
      <div className="flex justify-center mt-[10rem] bg-white">
        <div className="flex-col justify-flex-start g-[50px]">
          <div className="flex-col ml-[240px]">
            <h1 className="text-[#4a8780] font-bold text-[32px]">JOIN</h1>
            <div style={{ display: "flex", marginTop: "20px", gap: "200px" }}>
              <div style={{ display: "flex", gap: "50px" }}>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
                  <Text>SELECT ALL</Text>
                </div>
                <Button
                  onClick={handleDelete}
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                >
                  {" "}
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
          <div className="mt-[10px] ml-[200px]">
            <TableContainer>
              <Table variant="unstyled" border={"2px"}>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th border={"2px"}></Th>
                    <Th border={"2px"}>Name/Date</Th>
                    <Th isNumeric border={"2px"}>
                      Contact No
                    </Th>
                    <Th border={"2px"}>Mail</Th>
                    <Th border={"2px"}> Job Position</Th>
                    <Th border={"2px"}>CV link</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {currentContacts.map((item) => (
                    <Tr key={item._id}>
                      <Td border={"2px"}>
                        <Checkbox
                          isChecked={selectedJoin.includes(item._id)}
                          onChange={() => handleSelectContact(item._id)}
                        />
                      </Td>
                      <Td border={"2px"}>
                        <Text fontWeight={800}>{item.fullName}</Text> <br />
                        <Text color={"#8D8D94"}>
                          {new Date(item.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </Text>
                      </Td>
                      <Td border={"2px"} fontWeight={800}>
                        {" "}
                        {item.contactNo}
                      </Td>
                      <Td border={"2px"}>{item.email}</Td>
                      <Td border={"2px"}>{item.apply}</Td>
                      <Td border={"2px"}>{item.resume}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                marginTop: "2rem",
                marginLeft: "-10rem",
              }}
            >
              {currentContacts.length < join.length && (
                <Button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  backgroundColor={"#2C6856"}
                  color={"#fff"}
                >
                  LOAD MORE
                </Button>
              )}

              <Button
                onClick={handleExport}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                EXPORT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJoin;
