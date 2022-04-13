import { Box } from "@chakra-ui/react";
import React from "react";
import { UseColorMode } from "../../useDarkMode";
import FooterComp from "./Footer";

const Footer = () => (
    <>
        <UseColorMode 
            light={<FooterComp bgColor="#E5E5E5" borderColor="#E9ECF0" />} 
            dark={<FooterComp bgColor="#0D1726" borderColor="#122239" />} 
        />
    </>
)

export default Footer;