import { Avatar, Box, Button, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../Context/Context";


export const Noticeboard = () => {
  const { username } = useContext(AppContext);

  const [msg, setmsg] = useState();

  const [data, setData] = useState([]);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setmsg({
      ...msg,
      [name]: value,
    });
  };

  const handlesubmit = async () => {
 
    await axios
      .post("https://backend-ii41.onrender.com/post", {
        Postmessage: msg.Postmessage,
        username,
      })
      .then((res) => {
        handledata();
     
      });
    
  };

  //fetching api

  const handledata = async () => {
    await axios
      .get("https://backend-ii41.onrender.com/post/postdata")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    handledata();
  }, []);



  return (
    <Box>
        <Text textAlign={"center"} fontSize="3xl" fontWeight={"bold"}>Notice Board</Text>
      <Box display={"flex"} alignItems={"center"}>
        <Avatar src="https://bit.ly/broken-link" />
        <p>{username}</p>
      </Box>
      <Textarea
        variant="outline"
        onChange={(e) => handleChange(e)}
        name="Postmessage"
        value={msg?.Postmessage}
        placeholder="Post Message"
      />
      <Button onClick={() => handlesubmit()} colorScheme="facebook">
        Send
      </Button>
      <Box >
        {data.map((el, i) => (
          <Box
            key={i}
            marginTop="10px"
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            
          >
            <Box
              border={"1px"}
              width="500px"
              borderRadius={"8px"}
              height="auto"
            >
              <Box>{el.Postmessage}</Box>
              
              <Box display={"flex"} justifyContent="space-between" marginTop={"50px"} >
                <Text fontWeight={"bold"}>{el.username}</Text>
                <Text fontWeight={"bold"}>
                  {el.createdAt.split("T").join(" ").slice(0, 16)}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
