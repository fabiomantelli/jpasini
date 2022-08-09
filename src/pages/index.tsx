import type { NextPage } from "next";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import { Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex>
      <Box
        backgroundImage="/background.webp"
        backgroundSize="cover"
        height="calc(100vh - calc(100vh - 100%))"
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
