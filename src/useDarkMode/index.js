import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export const UseColorMode = ({ light, dark}) => {
    const { colorMode } = useColorMode();
    return <>{ colorMode === "light" ? light : dark }</>
}

export const UseColorModeValue = ({light, dark}) => {
    const bg = useColorModeValue(light, dark);
    return bg;
}