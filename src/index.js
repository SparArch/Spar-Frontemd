import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Helmet>
        <meta name="turnkey" content={"Bespoke fitout"} />
        <meta name="Bespoke" content={"Corporate Fitout"} />
        <meta name="turnkey" content={"turnkey fitout"} />
        <meta name="solution" content={"one stop solution"} />
        <meta name="turnkey" content={"turnkey projects"} />
        <meta name="fitout" content={"interior fitout"} />
        <meta name="roll-out solutions" content={"roll-out solutions"} />
        <meta name="fitout" content={"fitout interior"} />
        <meta name="commercial" content={"commercial fitout"} />
        <meta name="fixtures" content={"fixtures"} />
        <meta name="workplace" content={"workplace design"} />
        <meta name="Hospitality" content={"Hospitality"} />
        <meta name="turnkey" content={"turnkey solutions fitout"} />
        <meta name="interior" content={"interior turnkey projects"} />
        <meta name="fit" content={"fit out works"} />
        <meta name="fit" content={"fit out design"} />
        <meta name="fit" content={"fit out companies"} />
        <meta name="interior" content={"interior fit out companies"} />
        <meta name="design and build company" content={"design and build company"} />
        <meta name="turnkey" content={"turnkey construction"} />
        <meta name="interiors" content={"turnkey interiors"} />
        <meta name="fit" content={"fit out companies"} />
        <meta name="interior" content={"interior fit out companies"} />
        <meta name="design" content={"design and build company"} />
        <meta name="turnkey interiors" content={"turnkey interiors"} />
        <meta name="mumbai" content={"civil company in mumbai"} />
        <meta name="new construction company" content={"new construction company in mumbai"} />
        <meta name="key contractors" content={"key contractors"} />
        <meta name="infrastructure" content={"infrastructure company in mumbai"} />
        <meta name="contact details" content={"list of construction companies in mumbai with contact details"} />
        <meta name="construction" content={"construction mumbai"} />
        <meta name="decoration" content={"construction and decoration company"} />
        <meta name="turnkey vendor" content={"turnkey vendor"} />
        <meta name="interior contractor" content={"interior contractor delhi"} />
        <meta name="turnkey contractors" content={"turnkey contractors in bangalore"} />



      </Helmet>
      <App />
    </BrowserRouter>
  </ChakraProvider>

);


