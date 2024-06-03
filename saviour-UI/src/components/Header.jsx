import React from 'react'
import '../styles/header.css'
import logo from "../assets/Logo-saviour.png"
import wallet from "../assets/wallet-btn.png"
import Navbar from './Navbar'
import { Button } from '@chakra-ui/react'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo}  id="logo" alt="logo" />
        <div id='logoName' >Saviour</div>
        <Navbar/>
        <Button
          width="127px"
          height="38px"
          top="54px"
          left="1296px"
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
        
        <div id='headText'>Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</div>
            
    </div>
  )
}

export default Header