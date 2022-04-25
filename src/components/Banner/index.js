import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { changeWord } from "../../libs/actions/changeWord";
import validator from "validator";


const Banner = ({textColor, searchColor, borderColor, placeholderColor, word, setWord}) => {

    const dispatch = useDispatch();
    
    const [searchError, setsearchError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validator.isEmpty(word)){
            return setsearchError("Search input is required.")
        }else{
            return dispatch(changeWord(word))
        }
    };

    return(
        <>
            <Text mt={{base:"80px", md:"100px" }} fontWeight={600} lineHeight='1.4' color={textColor}  fontSize={{base: "44px", sm: "70px", md: "98px"}}>Search <br /> for any word.</Text>
            <form
                onSubmit={handleSubmit}>
                <Box d={{base:"block", md:"flex"}} justifyContent="space-between" border={`1px solid ${borderColor}`} pl={{base:0, md:4}} pr={{base:0, md:1}} h="65px" alignItems="center" mt='53px' mb={{base: "126px", md:0}}>
                    <Box d="flex" alignItems="center" h="full" w="full" pl={2}>
                        <BiSearch color={searchColor} fontSize={24} />
                        <Input onChange={(e) => setWord(e.target.value)} _focus={{border: "#fff"}} border="none" _placeholder={{color: `${placeholderColor}`}} placeholder="What would you like to search for? eg hello" />
                    </Box>
                    <Button type="submit" _focus={{border: "#fff"}} _hover={{opacity: .8}} bgColor="#000" w={{base: "full", md:"123px"}} h="54px" mb={{base:"126px", md:0}} mt={{base: "18px", md:0}} color="#fff">Search</Button>
                </Box>
                {!word ? <Box fontSize={12} color="red.400">{searchError}</Box> : null}
            </form>
        </>
    )
}

Banner.propTypes={
    textColor: PropTypes.node,
    searchColor: PropTypes.node,
    borderColor: PropTypes.node,
    placeholderColor: PropTypes.node,
    word: PropTypes.node,
    setWord: PropTypes.func,
}

export default Banner;