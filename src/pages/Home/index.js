import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import { BiSearch } from 'react-icons/bi';
import { UseColorMode } from "../../useDarkMode";
import NotFound from "../NotFound";


const Home = () => {
    return(
        <React.Fragment>
            {/* Header components */}
            <Header />
            {/* Banner components */}
            <Box maxW='80%' mx='auto'>
                <UseColorMode 
                    light={<Text mt={{base:"80px", md:"100px" }} fontWeight={600} lineHeight='1.4' color='#0B0A1B'  fontSize={{base: "44px", sm: "70px", md: "98px"}}>
                    Search <br /> for any word.</Text>}
                    dark={<Text mt={{base:"80px", md:"100px" }} fontWeight={600} lineHeight='1.4' color='#91A2CB' fontSize={{base: "44px", sm: "70px", md: "98px"}}>
                    Search <br /> for any word.</Text>}
                 />
                 <UseColorMode 
                    light={<Box d="flex" border="1px solid #E9ECF0" pl={4} pr={1} h="65px" alignItems="center" mt='53px'>
                    <BiSearch color="#BEC8DA" fontSize={24} />
                    <Input border="none" placeholder="What would you like to search for?" />
                    <Button _focus={{border: "#fff"}} _hover={{opacity: .8}} bgColor="#000" w="123px" h="54px" color="#fff">Search</Button>
                    </Box>}
                    dark={<Box d="flex" border="1px solid #122239" pl={4} pr={1} h="65px" alignItems="center" mt='53px'>
                        <BiSearch color="#BEC8DA" fontSize={24} />
                    <Input border="none" placeholder="What would you like to search for?" _placeholder={{color: "#8C98AD"}} />
                    <Button _focus={{border: "#fff"}} bgColor="#000" w="123px" h="54px" color="#fff">Search</Button>
                    </Box>}
                 />
                 {/*  */}
                 <Box mt="60px">
                    <NotFound />
                 </Box>
            </Box>
        </React.Fragment>
    )
}

export default Home;