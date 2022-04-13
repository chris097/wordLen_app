import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import { UseColorMode } from "../../useDarkMode";
import NotFound from "../NotFound";
import Footer from "../../components/Footer";
import Skeleton from "../Skeleton";
import HomeComp from "./HomeComp";
import Banner from "../../components/Banner";
import { useFetchApi } from "../../services/fectchApi";
import { useSelector } from "react-redux";


const Home = () => {

    const initialState = useSelector((state) => state.wordReducer);
    const {data, isLoading, isError} = useFetchApi(initialState.word)
    console.log(data);


    return(
        <React.Fragment>
            {/* Header components */}
            <Header />
            {/* Banner components */}
            <Box maxW='80%' mx='auto'>
                <UseColorMode 
                    light={<Banner textColor="#0B0A1B" searchColor="#BEC8DA" borderColor="#E9ECF0" />} 
                    dark={<Banner textColor="#91A2CB" borderColor="#122239" placeholderColor="#8C98AD" />}
                />
                 {/*  */}
                 <Box mt="60px">
                    {isError && <NotFound /> }
                    {isLoading && <Skeleton /> }
                    <UseColorMode 
                        light={<HomeComp data={data} bg="#FCFCFC" />} 
                        dark={<HomeComp data={data} bg="#0D1726" />} 
                    />
                 </Box>
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Home;