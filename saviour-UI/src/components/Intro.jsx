

import React, { useState } from 'react';
import { Box, Heading, Text, Button, Image, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import introSav from "../assets/intro-saviour.png"

const Intro = () => {
    const[isOpen, setIsOpen] = useState(false)

    const onToggle = ()=>{
        setIsOpen((prev)=> !prev)
        console.log(isOpen);
    }
  return (
    <Box
      height="622px"
      width="1512px"
      display="flex" 
      flexDirection="row"
      bg="#0a0a0a"
    >
      <Box 
        flex={1} 
        padding="4" 
      >
        <Heading
          style={{ 
            width: '389px',
            height: '52px',
            position: 'absolute',
            top: '677px', 
            left: '163px', 
            gap: '0px',
            fontFamily: 'Shojumaru',
            fontSize: '44px',
            fontWeight: '400',
            lineHeight: '52.36px',
            textAlign: 'left',
            color: '#ED0137',
          }}
        >
          Introduction
        </Heading>
        <Text
          style={{ opacity: 1 }} 
          maxWidth="587px" 
          maxHeight="207px" 
          position="absolute"
          top="753px"
          left="166px"
          fontFamily="ZCOOL KuaiLe"
          fontSize="24px"
          fontWeight="400"
          lineHeight="28.56px"
          textAlign="left"
          color= "#FFFCFD"
        >
          We've all been in the mud once, and now we've decided to fight it out. <br/>
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future!<br/>
          Our mission is to empower everyone to share wealth and succeed.<br/>
          read more...
        </Text>
        <Button 
          variant="unstyled" 
          width="178.94px" 
          height="54.06px" 
          position="absolute"
          top="1048px"
          left="166px"
          padding="17.03px 21.29px 17.03px 21.29px" 
          borderRadius="21.92px" 
          bgGradient="linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)" 
          _hover={{ 
            bgGradient: "linear-gradient(to right, #EE6910 0%, #D51B46 100%)" 
          }}
          _active={{ opacity: 0.8 }} 
        >
          <Text 
            width= "109px"
            height= "20px"
            fontFamily="ZCOOL KuaiLe"
            fontSize= "20.03px"
            fontWeight= "400"
            lineHeight= "20.03px"
            textAlign= "left"
            color= "#FFFCFD"
          >
            Documents
            <IconButton 
            aria-label="Toggle Dropdown"
            icon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />} 
            ml={4} 
            position="absolute" 
            right="4px" 
            top="50%" 
            transform="translateY(-50%)" 
            onClick={onToggle} 
            style={{ backgroundColor: 'inherit' }}
            color="#FFFCFD"
            />
          </Text>
        </Button>
      </Box>
      <Box flex={1} padding="4"> {/* Second column for image */}
        <Image
          src={introSav} // Replace with your image path
          alt="intro img"
          width="795px" // Set image width
          height="795px" // Set image height
          position="absolute"
          top="511px"
          left="723px"
        />
      </Box>
    </Box>
  );
};

export default Intro;
