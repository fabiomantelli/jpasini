import type { NextPage } from "next";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import { Box, Flex } from "@chakra-ui/react";

import { ViewportHeightBox } from "next-real-viewport";

const Home: NextPage = () => {
  return (
    <ViewportHeightBox>
      <Flex>
        <Box
          backgroundImage="/background.webp"
          backgroundSize="cover"
          width="100%"
          height="vh"
        >
          <Header logo="white" />
          <MainSection logo="white" />
        </Box>
        <RightSide logo="white" />
      </Flex>
    </ViewportHeightBox>
  );
};

export default Home;
