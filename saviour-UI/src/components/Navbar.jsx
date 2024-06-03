import React from 'react';
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import "../styles/navbar.css"


const Navbar = () => {
  return (
    <Box
      className='Navbar'
      width="583px"
      height="52px"
      position="absolute"
      top="46px"
      left="498px"
      padding="16px 24px"
      display="flex"
      alignItems="center"
      gap="24px"
      borderRadius="20px"
      bg="#191818"
    >
      <Flex align="center" width="100%" justifyContent="space-between">
        <Box color="white" _hover={{ cursor: 'pointer', color: 'teal.500' }}> Home</Box>
        <Box color="white" _hover={{ cursor: 'pointer', color: 'teal.500' }}>IDO</Box>
        <Box color="white" _hover={{ cursor: 'pointer', color: 'teal.500' }}>Tokenomics</Box>
        <Box color="white" _hover={{ cursor: 'pointer', color: 'teal.500' }}>Roadmap</Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} _hover={{ bg: 'teal.500', color: 'white' }} bg="#191818" color="white">
          Coming Soon
          </MenuButton>
          <MenuList >
            <MenuItem>Saviour 2</MenuItem>
            <MenuItem>Savoiur 3</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;

