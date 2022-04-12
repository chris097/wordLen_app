import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import logo from '../../public/svgs/logo.svg';
import darkLogo from '../../public/svgs/dark_logo.svg';
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import { UseColorMode, UseColorModeValue } from "../../useDarkMode";

const Header = () => {

    const { toggleColorMode } = useColorMode();

    return(
        <React.Fragment>
            <Box h='70px' borderBottom='1px solid #E9ECF0'>
                <Box maxW='90%' h='full' mx='auto' d='flex' alignItems='center' justifyContent='space-between'>
                    <Box>
                        <UseColorModeValue 
                            light={<Image src={logo} alt="logo" />} 
                            dark={<Image src={darkLogo} alt="logo" />} 
                        />
                    </Box>
                    <Button onClick={toggleColorMode} _focus={{border: '#fff'}}>
                        <UseColorMode 
                            light={<BsMoonStarsFill />} 
                            dark={<BsFillSunFill color='#F6F54D' />} 
                        />
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Header;