import type { NextPage } from "next";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import { Box, Flex } from "@chakra-ui/react";

import Menu from '../components/Menu'
import Next from "../components/Next";

const Home: NextPage = () => {
  return (
    <Flex>
      <Box
        backgroundImage="/background.webp"
        backgroundSize="cover"
        width={['100vw', '100vw', '100vw', 'calc(100vw - 280px)']}
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
