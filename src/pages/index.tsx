import type { NextPage } from "next";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import { Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex minHeight="100vh; -webkit-fill-available">
      <Box
        backgroundImage="/background.webp"
        backgroundSize="cover"
        width="100%"
      >
        <Header logo="white" />
        <MainSection logo="white" />
      </Box>
      <RightSide logo="white" />
    </Flex>
  );
};

export default Home;
