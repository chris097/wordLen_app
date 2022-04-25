import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { UseColorMode } from '../../useDarkMode';

const NotFound = () => {
  return (
    <Flex justifyContent='center' mt={20} mb={{base:"105px", md:"335.5px"}}>
      <Box>
          <UseColorMode light={
              <>
                <Text lineHeight={1} textAlign={{base:"center", md:'left'}} fontSize={{base:16, md:24}} fontWeight={500}>${`Oops, Sorry pal, we couldn't find definitions`} <br /> for the word you were looking for.</Text>
                <Text lineHeight={1.2} textAlign='center' fontSize={{base:72, md:164}} fontWeight={600}>404</Text>
                <Text fontStyle='italic' lineHeight={.2} textAlign='center' fontSize={{base:20, md:36}} fontWeight={400}>no be juju be that!</Text>
              </>
            }
            dark={
                <>
                  <Text lineHeight={{base:1.3, md:1}} textAlign={{base:"center", md:'left'}} fontSize={{base:16, md:24}} fontWeight={500}>${`Oops, Sorry pal, we couldn't find definitions`} <br /> for the word you were looking for.</Text>
                  <Text lineHeight={1.2} textAlign='center' fontSize={{base:72, md:164}} fontWeight={600}>404</Text>
                  <Text fontStyle='italic' lineHeight={.2} textAlign='center' fontSize={{base:20, md:36}} fontWeight={400}>no be juju be that!</Text>
                </>
            }
            />
      </Box>
    </Flex>
  )
}

export default NotFound