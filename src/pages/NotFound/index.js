import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { UseColorMode } from '../../useDarkMode';

const NotFound = () => {
  return (
    <Flex justifyContent='center' mt={20}>
      <Box>
          <UseColorMode light={
              <>
                <Text lineHeight={1} textAlign='left' fontSize={24} fontWeight={500}>Oops, Sorry pal, we couldn't find definitions <br /> for the word you were looking for.</Text>
                <Text lineHeight={1.2} textAlign='center' fontSize={164} fontWeight={600}>404</Text>
                <Text fontStyle='italic' lineHeight={.2} textAlign='center' fontSize={36} fontWeight={400}>no be juju be that!</Text>
              </>
            }
            dark={
                <>
                  <Text lineHeight={1} textAlign='left' fontSize={24} fontWeight={500}>Oops, Sorry pal, we couldn't find definitions <br /> for the word you were looking for.</Text>
                  <Text lineHeight={1.2} textAlign='center' fontSize={164} fontWeight={600}>404</Text>
                  <Text fontStyle='italic' lineHeight={.2} textAlign='center' fontSize={36} fontWeight={400}>no be juju be that!</Text>
                </>
            }
            />
      </Box>
    </Flex>
  )
}

export default NotFound