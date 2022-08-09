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
        height='100vh'
        width="100vw"
        border="2px solid yellow"
      >
        <Header logo="white" />
        <MainSection logo="white" />
      </Box>
      <RightSide logo="white" />
    </Flex>
  );
};

export default Home;
