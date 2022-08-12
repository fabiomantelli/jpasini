import { useEffect, useState } from "react";
import type { NextPage } from "next";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import { Box, Flex, keyframes } from "@chakra-ui/react";

import Menu from '../components/Menu'
import Next from "../components/Next";

import { enterprisesData } from "../data/enterprises"

const fadeIn = keyframes`
  0% { opacity: 0.5; }
  100% { opacity: 1; }
`
const Home: NextPage = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState(enterprisesData[0].name);
  const [mainDescription, setMainDescription] = useState(enterprisesData[0].mainDescription);
  const [secondaryDescription, setSecondaryDescription] = useState(enterprisesData[0].secondaryDescription);
  const [url, setUrl] = useState(enterprisesData[0].url);
  const [logoColor, setLogoColor] = useState(enterprisesData[0].logoColor);
  const [textColor, setTextColor] = useState(enterprisesData[0].textColor)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < Object.keys(enterprisesData).length) {
        const enterprise = enterprisesData.filter((data, index) => index === count);
        setName(enterprise[0].name);
        setMainDescription(enterprise[0].mainDescription);
        setSecondaryDescription(enterprise[0].secondaryDescription);
        setUrl(enterprise[0].url);
        setCount(count + 1);
        setLogoColor(enterprise[0].logoColor)
        setTextColor(enterprise[0].textColor)
      } else {
        setCount(1);
        setName(enterprisesData[0].name);
        setMainDescription(enterprisesData[0].mainDescription);
        setSecondaryDescription(enterprisesData[0].secondaryDescription);
        setUrl(enterprisesData[0].url);
        setLogoColor(enterprisesData[0].logoColor);
        setTextColor(enterprisesData[0].textColor);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <Flex>
      <Box
        key={url}
        backgroundImage={url}
        animation={`${fadeIn} 0.7s linear`}
        backgroundSize="cover"
        width={['100vw', '100vw', '100vw', 'calc(100vw - 280px)']}
        height="100vh"
      >
        <Header logoColor={logoColor} />
        <Menu logoColor={logoColor} />
        <MainSection 
          logoColor={logoColor}
          textColor={textColor}
          count={count}
          name={name}
          mainDescription={mainDescription}
          secondaryDescription={secondaryDescription}
        />
        <Next 
          key={name}
          logoColor={logoColor} 
          name={name}
        />
      </Box>

      <RightSide logoColor={logoColor} />
    </Flex>
  );
};

export default Home;
