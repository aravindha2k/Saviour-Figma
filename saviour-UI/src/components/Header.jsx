import React from 'react'
import '../styles/header.css'
import logo from "../assets/Logo-saviour.png"
import Navbar from './Navbar'
import { Box, Button, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo}  id="logo" alt="logo" />
        <div id='logoName' >Saviour</div>
        <Box
          display={{base: 'none', md:'block'}}
        >
        <Navbar/>
        </Box>
        <Button
          width="127px"
          height="38px"
          top="54px"
          // left="1296px"
          marginLeft={{base:"20%" , md:"80%"}}
          padding="10px 16px"
          gap="6.18px"
          borderRadius="15.44px"
          bgGradient="linear-gradient(93.73deg, #ED0137 20.19%, #F05733 88.3%)"
          color="white" 
          _hover={{
            bgGradient: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
          }}
        >
          Connect Wallet
        </Button>
        
        <Text
          bg={{ base: "rgba(0, 0, 0, 0.5)", md: "none" }}
          borderRadius={"20px"}
          p={{ base: "29px", md: "0px" }}
          mx={"auto"}
          marginTop={{base:"176px", md:"276px"}}
          maxW={"1268px"}
          width={"100%"}
          fontFamily={"Shojumaru"}
          fontSize={{ base: "32px", md: "45px" }}
          fontWeight={"400"}
          lineHeight={{ base: "38.08px", md: "53.55px" }}
          color={"#f8f8f8"}
          textAlign={"center"}
        >
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </Text>   
    </div>
  )
}

export default Header