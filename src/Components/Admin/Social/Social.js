import React, { useState } from "react";
import NavAd from "../NavAd";
import SideNav from "../SideNav";
import { Button, Image, Input, useToast } from "@chakra-ui/react";
import instaIcon from "../../Images/insta-icon.png";
import linkedIcon from "../../Images/linkedin-icon.png";
import twitterIcon from "../../Images/twitter-icon.png";
import faceIcon from "../../Images/facebook-icon.png";
import axios from "axios";
import BACKEND_URL from "../../../helper";

const Social = () => {
  const toast = useToast();
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleAddLink = async (platform) => {
    try {
      let updatedLink;
      switch (platform) {
        case "instagram":
          updatedLink = instagram;
          break;
        case "linkedin":
          updatedLink = linkedin;
          break;
        case "facebook":
          updatedLink = facebook;
          break;
        case "twitter":
          updatedLink = twitter;
          break;
        default:
          return;
      }
      const response = await axios.patch(
        `${BACKEND_URL}/api/social-media/${platform}`,
        {
          link: updatedLink,
        }
      );
      console.log(response.data);
      toast({
        title: "Link Added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating social media link:", error);
    }
  };
  return (
    <div>
      <NavAd />
      <SideNav />
      <div className="flex justify-center mt-[10rem] bg-white">
        <div className="flex justify-flex-start gap-[50px]">
          <div className="flex-col content-center justify-center items-center ml-[100px] ">
            <div className="flex  gap-10">
              <Image src={instaIcon} />
              <Input
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                width={"600px"}
              />
              <Button
                onClick={() => handleAddLink("instagram")}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                {" "}
                ADD LINK
              </Button>
            </div>
            <div className="flex gap-10">
              <Image src={linkedIcon} />
              <Input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                width={"600px"}
              />
              <Button
                onClick={() => handleAddLink("linkedin")}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                {" "}
                ADD LINK
              </Button>
            </div>
            <div className="flex gap-10 ml-3">
              <Image paddingRight={"11px"} src={faceIcon} />
              <Input
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                width={"600px"}
              />
              <Button
                onClick={() => handleAddLink("facebook")}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                {" "}
                ADD LINK
              </Button>
            </div>
            <div className="flex gap-10">
              <Image src={twitterIcon} />
              <Input
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                width={"600px"}
              />
              <Button
                onClick={() => handleAddLink("twitter")}
                backgroundColor={"#2C6856"}
                color={"#fff"}
              >
                {" "}
                ADD LINK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
