import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
  });

  const { getname } = useContext(AppContext);

  const handleuser = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handlesubmit = () => {
    if (state.username.length === 0 || state.username === undefined) {
      toast("Please Enter Valid Details");
    } else if (
      checkuseralpha(state.username) &&
      checkuseralphasmall(state.username) &&
      checkusernum(state.username)
    ) {
      axios
        .post("https://backend-ii41.onrender.com/login", state)
        .then((res) => getname(res.data.username));
      navigate("/noticeboard");
    } else {
      toast("Please Enter Valid Details");
    }
  };

  function checkuseralpha(str) {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < char.length; i++) {
      if (str.includes(char[i])) {
        return true;
      }
    }
    return false;
  }

  function checkuseralphasmall(str) {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newstr = char.toLowerCase();
    for (let i = 0; i < newstr.length; i++) {
      if (str.includes(newstr[i])) {
        return true;
      }
    }
    return false;
  }

  function checkusernum(str) {
    let num = "0123456789";
    for (let i = 0; i < num.length; i++) {
      if (str.includes(num[i])) {
        return true;
      }
    }
    return false;
  }

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection="column"
        gap="3"
        margin={"auto"}
        width="25%"
        padding="20px"
      >
        <Text fontSize={"xl"}>Pick a Username</Text>
        <Input
          variant="outline"
          onChange={handleuser}
          name="username"
          value={state.username}
          placeholder="Enter Username"
        />
        <Button onClick={handlesubmit} colorScheme="facebook">
          Login
        </Button>
        <ToastContainer />
      </Box>
    </Box>
  );
};
