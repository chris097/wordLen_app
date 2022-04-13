import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { changeWord } from "../../libs/actions/changeWord";


const Banner = ({textColor, searchColor, borderColor, placeholderColor, word, setWord}) => {

    const dispatch = useDispatch();

    return(
        <>
            <Text mt={{base:"80px", md:"100px" }} fontWeight={600} lineHeight='1.4' color={textColor}  fontSize={{base: "44px", sm: "70px", md: "98px"}}>Search <br /> for any word.</Text>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(changeWord(word))
                }}>
                <Box d="flex" border={`1px solid ${borderColor}`} pl={4} pr={1} h="65px" alignItems="center" mt='53px'>
                    <BiSearch color={searchColor} fontSize={24} />
                    <Input onChange={(e) => setWord(e.target.value)} _focus={{border: "#fff"}} border="none" _placeholder={{color: `${placeholderColor}`}} placeholder="What would you like to search for? eg hello" />
                    <Button type="submit" _focus={{border: "#fff"}} _hover={{opacity: .8}} bgColor="#000" w="123px" h="54px" color="#fff">Search</Button>
                </Box>
            </form>
        </>
    )
}

export default Banner;