import type { NextPage } from "next";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

import Menu from '../components/Menu'
import Next from "../components/Next";

const Home: NextPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Flex>
      <Box
        backgroundImage="/background.webp"
        backgroundSize="cover"
        // width="85vw"
        width={isLargerThan768 ? 'calc(100vw - 280px)' : '100vw'}
        height="100vh"
      >
        <Header logo="white" />
        <Menu logo="white" />
        <MainSection logo="white" />
        <Next logo="white" />
      </Box>
      <RightSide logo="white" />
    </Flex>
  );
};

export default Home;
