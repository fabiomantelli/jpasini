import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Flex, keyframes } from "@chakra-ui/react";

import { useSwipeable } from "react-swipeable";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import RightSide from "../components/RightSide";
import Next from "../components/Next";

import { enterprisesData } from "../data/enterprises"
import MenuMobile from "../components/MenuMobile";
import config from "next/config";

const fadeIn = keyframes`
  0% { opacity: 0.6; }
  100% { opacity: 1; }
`

interface EnterpriseProps {
  name: string;
  mainDescription: string;
  secondaryDescription: string;
  url: string;
  logoColor: string;
  textColor: string;
  colorMenu: string;
}

interface IndexProps {
  isTheIndexProps: boolean;
}

const Home: NextPage = () => {
  const handlers = useSwipeable({
    onSwipedRight: (eventData) => handlePreviousClick(),
    onSwipedLeft: (eventData) => handleNextEnterprises(),
    ...config,
  });

  const enterpriseNext = enterprisesData.filter(
    (data, index) => index == 1);

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [enterprise, setEnterprise] = useState<EnterpriseProps>(enterprisesData[0]);
  const [nextEnterprise, setNextEnterprise] = useState(enterpriseNext[0]);
  const [count, setCount] = useState(1);

  const [, windowHeight] = useWindowSize();

  function handleNextEnterprises() {
    if (count < Object.keys(enterprisesData).length) {
      const enterprise = enterprisesData.filter(
        (data, index) => index == count);
      const enterpriseNext = enterprisesData.filter(
        (data, index) => {
          if (count !== Object.keys(enterprisesData).length - 1) {
            return index == count + 1
          } else {
            return index == 0
          }
        });
      setEnterprise(enterprise[0]);
      setNextEnterprise(enterpriseNext[0]);
      setCount(count + 1);
    } else {
      const enterpriseNext = enterprisesData.filter(
        (data, index) => index == 1)
      setEnterprise(enterprisesData[0]);
      setNextEnterprise(enterpriseNext[0]);
      setCount(1);
    }
  }

  function handlePreviousClick() {
    if (count > 1) {
      const enterprise = enterprisesData.filter(
        (data, index) => index == count - 2);
      const enterpriseNext = enterprisesData.filter(
        (data, index) => index == count - 1);
      setEnterprise(enterprise[0]);
      setNextEnterprise(enterpriseNext[0]);
      setCount(count - 1);
    } else {
      const enterprise = enterprisesData.filter(
        (data, index) => index == Object.keys(enterprisesData).length - 1);
      setEnterprise(enterprise[0]);
      const enterpriseNext = enterprisesData.filter(
        (data, index) => index == count - 1)
      setNextEnterprise(enterpriseNext[0]);
      setCount(Object.keys(enterprisesData).length);
    }
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, [size]);
    return size;
  }

  useEffect(() => {
    const intervalBetweenTransitions = setInterval(() => {
      handleNextEnterprises();
    }, 7000);

    return () => clearInterval(intervalBetweenTransitions);
  }, [count]);

  return (
    <Flex h={windowHeight}>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        logoColor={enterprise.logoColor}
      />
      <Box
        key={enterprise.url}
        backgroundImage={enterprise.url}
        animation={`${fadeIn} 1s ease`}
        backgroundSize="cover"
        width={['100vw', '100vw', '100vw', 'calc(100vw - 280px)']}
        height="100vh"
        {...handlers}
      >
        <Header
          logoColor={enterprise.logoColor}
          colorMenu={enterprise.colorMenu}
        />

        <MainSection
          textColor={enterprise.textColor}
          count={count}
          name={enterprise.name}
          mainDescription={enterprise.mainDescription}
          secondaryDescription={enterprise.secondaryDescription}
        />
        <Next
          key={nextEnterprise.name}
          logoColor={nextEnterprise.logoColor}
          name={nextEnterprise.name}
          nextClick={handleNextEnterprises}
          previousClick={handlePreviousClick}
        />
      </Box>

      <RightSide
        logoColor={enterprise.logoColor}
      />
    </Flex>
  );
};

export default Home;
