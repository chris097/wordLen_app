import React from 'react';
import { Box, Skeleton, Stack } from '@chakra-ui/react';

const SkeletonComp = ({bg}) => {
  return (
    <Box h='auto' bg={bg} m={14} p={10}>
      <Stack spacing={4}>
        <Skeleton h='33px' w='25%' bg='#DBE2F4' />
        <Skeleton h='18px' w='17%' />
      </Stack>
      <Box mt={10}><Skeleton h='10px' w='60%' /></Box>
      <Box bg={bg} h='300px' mt={10} px={10} pt={2}>
        <Box mt={10} mb={10}><Skeleton h='8px' w='70%' /></Box> 
        <Stack spacing={4}>
          <Skeleton h='6px' w='40%' />
          <Skeleton h='10px' w='20%' />
        </Stack>
        <Box mt={10} mb={10}><Skeleton h='8px' w='50%' /></Box> 
        <Stack spacing={4}>
          <Skeleton h='6px' w='70%' />
          <Skeleton h='10px' w='10%' />
        </Stack>
      </Box>
    </Box>
  )
}

export default SkeletonComp;