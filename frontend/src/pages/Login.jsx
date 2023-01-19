import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signup } from "../redux/authReducer/action";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("working");
    if (email && password) {
      let payload = {
        email: email,
        password: password,
      };
      dispatch(login(payload)).then(() => {
            
      });
    }
  };
  return (
    <Flex bgColor={"#414141"} h={"90vh"}>
      <Box
        w={"40%"}
        m="auto"
        bgColor={"white"}
        borderRadius={"0.7rem"}
        p="15px"
        minH={"60vh"}
        lineHeight={"2rem"}
      >
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="User Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="User Password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          mt="1rem"
          w="100%"
          bgColor={"teal"}
          color={"White"}
          fontSize={"bold"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
