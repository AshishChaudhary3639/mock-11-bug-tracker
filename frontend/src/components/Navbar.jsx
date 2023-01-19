import React from 'react'
import {Button, Flex} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate=useNavigate()
  return (
    <Flex w={"100%"} justifyContent={"center"} gap={"2rem"} bgColor={"teal"} alignItems={"center"} h={"12vh"} >
        <Button onClick={()=>navigate("/signup")}>Sign Up</Button>
        <Button>Sign In</Button>
        <Button>Dashboard</Button>
    </Flex>
  )
}

export default Navbar