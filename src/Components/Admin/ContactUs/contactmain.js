import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavAd from '../NavAd';
import SideNav from '../SideNav';
import './contactmain.css';
import { Button, Checkbox, Input, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import BACKEND_URL from '../../../helper';


const ContactMain = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const contactsPerPage = 5;

  useEffect(() => {
    fetchContacts();
  }, [currentPage]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/contacts/${selectedContacts.join(',')}`);
      if (response.status === 200) {
        setContacts(contacts.filter(contact => !selectedContacts.includes(contact._id)));
        setSelectedContacts([]);
        setSelectAll(false); // Reset select all state
      }
    } catch (error) {
      console.error('Error deleting contacts:', error);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(currentContacts.map(contact => contact._id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectContact = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const currentContacts = contacts.slice(0, currentPage * contactsPerPage);

  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className='contactus-main'>
        <div className='contactus'>
          <div>
            <h3>CONTACTS</h3>
            <div style={{ display: "flex", marginTop: "20px", gap: "200px" }}>
              <div style={{ display: "flex", gap: "50px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
                  <Text>SELECT ALL</Text>
                </div>
                <Button backgroundColor={'#2C6856'} color={'#fff'} onClick={handleDelete}>DELETE</Button>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>SEND TO MAIL</Button>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Text>FILTER BY</Text>
                  <select style={{ border: "2px black solid", borderRadius: "30px" }}>
                    <option value="someOption">Some option</option>
                    <option value="otherOption">Other option</option>
                  </select>
                  <div>
                    <Input borderRadius={'2rem'} type='search' minWidth={'20px'} placeholder='Search' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TableContainer>
              <Table variant='unstyled' border={'2px'}>
                <Thead>
                  <Tr>
                    <Th border={'2px'}></Th>
                    <Th border={'2px'}>Name/Date</Th>
                    <Th isNumeric border={'2px'}>Contact No</Th>
                    <Th border={'2px'}>Mail</Th>
                    <Th border={'2px'}>Message</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {currentContacts.map(contact => (
                    <Tr key={contact._id}>
                      <Td border={'2px'}>
                        <Checkbox
                          isChecked={selectedContacts.includes(contact._id)}
                          onChange={() => handleSelectContact(contact._id)}
                        />
                      </Td>
                      <Td border={'2px'}>
                        <Text fontWeight={800}>{contact.fullName}</Text> <br />
                        <Text color={'#8D8D94'}>{new Date(contact.date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</Text>
                      </Td>
                      <Td border={'2px'} fontWeight={800}>{contact.contactNo}</Td>
                      <Td border={'2px'}>{contact.email}</Td>
                      <Td border={'2px'}>{contact.message}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            {currentContacts.length < contacts.length && (
              <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "2rem", marginLeft: "-10rem" }}>
                <Button backgroundColor={'#2C6856'} color={'#fff'} onClick={() => setCurrentPage(currentPage + 1)}>LOAD MORE</Button>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "2rem", marginLeft: "-10rem" }}>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>EXPORT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
