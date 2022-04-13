import React from 'react';
import { UseColorMode } from '../../useDarkMode';
import SkeletonComp from './Skeleton';

const Skeleton = () => (
    <>
        <UseColorMode 
            light={ <SkeletonComp bg="#FCFCFC" />} 
            dark={<SkeletonComp dark="#FCFCFC" />} 
        />
    </>
  );

export default Skeleton;