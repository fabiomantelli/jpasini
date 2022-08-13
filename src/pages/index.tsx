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
  0% { opacity: 0.6; }
  100% { opacity: 1; }
`
const Home: NextPage = () => {
  const enterpriseNext = enterprisesData.filter((data, index) => index == 1);
  const [count, setCount] = useState(1);
  const [name, setName] = useState(enterprisesData[0].name);
  const [nextName, setNextName] = useState(enterpriseNext[0].name);
  const [mainDescription, setMainDescription] = useState(enterprisesData[0].mainDescription);
  const [secondaryDescription, setSecondaryDescription] = useState(enterprisesData[0].secondaryDescription);
  const [url, setUrl] = useState(enterprisesData[0].url);
  const [logoColor, setLogoColor] = useState(enterprisesData[0].logoColor);
  const [textColor, setTextColor] = useState(enterprisesData[0].textColor);
  const [colorMenu, setColorMenu] = useState(enterprisesData[0].colorMenu);

  function handleNextEnterprises() {
    if (count < Object.keys(enterprisesData).length) {
      const enterprise = enterprisesData.filter((data, index) => index == count);
      const enterpriseNext = enterprisesData.filter((data, index) => {
        if (count !== Object.keys(enterprisesData).length - 1) {
          return index == count + 1
        } else {
          return index == 0
        }
      });
      setName(enterprise[0].name);
      setNextName(enterpriseNext[0].name)
      setMainDescription(enterprise[0].mainDescription);
      setSecondaryDescription(enterprise[0].secondaryDescription);
      setUrl(enterprise[0].url);
      setLogoColor(enterprise[0].logoColor);
      setTextColor(enterprise[0].textColor);
      setColorMenu(enterprise[0].colorMenu);
      setCount(count + 1);
    } else {
      setCount(1);
      setName(enterprisesData[0].name);
      const enterpriseNext = enterprisesData.filter((data, index) => index == 1)
      setNextName(enterpriseNext[0].name);
      setMainDescription(enterprisesData[0].mainDescription);
      setSecondaryDescription(enterprisesData[0].secondaryDescription);
      setUrl(enterprisesData[0].url);
      setLogoColor(enterprisesData[0].logoColor);
      setTextColor(enterprisesData[0].textColor);
      setColorMenu(enterprisesData[0].colorMenu);
    }
  }

  function handlePreviousClick() {
    if (count > 1) {
      const enterprise = enterprisesData.filter((data, index) => index == count - 2);
      const enterpriseNext = enterprisesData.filter((data, index) => index ==  count - 1);
      setName(enterprise[0].name);
      setNextName(enterpriseNext[0].name)
      setMainDescription(enterprise[0].mainDescription);
      setSecondaryDescription(enterprise[0].secondaryDescription);
      setUrl(enterprise[0].url);
      setLogoColor(enterprise[0].logoColor);
      setTextColor(enterprise[0].textColor);
      setColorMenu(enterprise[0].colorMenu);
      setCount(count - 1);
    } else {
      const enterprise = enterprisesData.filter((data, index) => index == Object.keys(enterprisesData).length - 1);
      setName(enterprise[0].name);
      const enterpriseNext = enterprisesData.filter((data, index) => index == count - 1)
      setNextName(enterpriseNext[0].name);
      setMainDescription(enterprise[0].mainDescription);
      setSecondaryDescription(enterprise[0].secondaryDescription);
      setUrl(enterprise[0].url);
      setLogoColor(enterprise[0].logoColor);
      setTextColor(enterprise[0].textColor);
      setColorMenu(enterprise[0].colorMenu);
      setCount(Object.keys(enterprisesData).length);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextEnterprises();
    }, 7000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <Flex>
      <Box
        key={url}
        backgroundImage={url}
        animation={`${fadeIn} 1s ease`}
        backgroundSize="cover"
        width={['100vw', '100vw', '100vw', 'calc(100vw - 280px)']}
        height="100vh"
      >
        <Header
          logoColor={logoColor}
          colorMenu={colorMenu}
        />
        <Menu logoColor={logoColor} />
        <MainSection
          textColor={textColor}
          count={count}
          name={name}
          mainDescription={mainDescription}
          secondaryDescription={secondaryDescription}
        />
        <Next
          key={nextName}
          logoColor={logoColor}
          name={nextName}
          nextClick={handleNextEnterprises}
          previousClick={handlePreviousClick}
        />
      </Box>

      <RightSide
        logoColor={logoColor}
      />
    </Flex>
  );
};

export default Home;
