import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
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
    const {data, isLoading, isError} = useFetchApi(initialState.word);
    const [word, setWord] = useState("");
    const [allWords, setallWords] = useState([]);
    const [isNoun, setNoun] = useState([]);
    
   async function getWords () {
        const fetchWord = await data?.map(el=>el?.meanings?.filter(meaning=>meaning.partOfSpeech==="verb"));
        setallWords(fetchWord);
        const fetchNoun = await data?.map(el=>el?.meanings?.filter(meaning=>meaning.partOfSpeech==="noun"));
        setNoun(fetchNoun);
    }

    useEffect(() => {
        getWords()
    },[data]);

    return(
        <React.Fragment>
            {/* Header components */}
            <Header />
            {/* Banner components */}
            <Box maxW='80%' mx='auto'>
                <UseColorMode 
                    light={<Banner word={word} setWord={setWord} textColor="#0B0A1B" searchColor="#BEC8DA" borderColor="#E9ECF0" />} 
                    dark={<Banner word={word} setWord={setWord} textColor="#91A2CB" borderColor="#122239" placeholderColor="#8C98AD" />}
                />
                 {/*  */}
                 {isLoading ? <Skeleton /> : (isError ? <NotFound /> : 
                    <Box mt="60px">
                        <UseColorMode 
                            light={<HomeComp data={data} words={allWords} nouns={isNoun} bg="#FCFCFC" border="1px solid #E5E5E5" />} 
                            dark={<HomeComp data={data} words={allWords} nouns={isNoun} bg="#0D1726" border="1px solid #8C98AD" />} 
                        />
                    </Box>
                 )}
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Home;