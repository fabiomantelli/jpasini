import { keyframes, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import { enterprisesData } from '../../data/enterprises';

const moveTextUp = keyframes`
  0%  {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
`;
const moveTextDown = keyframes`
  0%  {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

function EmilioText() {
  const moveTextUpAnimation = `${moveTextUp} 0.5s ease-in-out`;
  const moveTextDownAnimation = `${moveTextDown} 1s ease-in-out`;

  const [count, setCount] = useState(1);
  const [name, setName] = useState(enterprisesData[0].name);
  const [mainDescription, setMainDescription] = useState(enterprisesData[0].mainDescription);
  const [secondaryDescription, setSecondaryDescription] = useState(enterprisesData[0].secondaryDescription);

  useEffect(() => {
    const interval = setInterval(() => {

      if (count < Object.keys(enterprisesData).length) {
        const enterprise = enterprisesData.filter((data, index) => index === count);
        setName(enterprise[0].name);
        setMainDescription(enterprise[0].mainDescription);
        setSecondaryDescription(enterprise[0].secondaryDescription);
        setCount(count + 1)
      } else {
        setCount(1);
        setName(enterprisesData[0].name)
        setMainDescription(enterprisesData[0].mainDescription);
        setSecondaryDescription(enterprisesData[0].secondaryDescription);
      }
      
    }, 2000)

    return () => clearInterval(interval);
  }, [count])

  return (
    <>
      <Text
        fontSize={{
          xl: "8xl",
          lg: "7xl",
          md: "6xl",
          sm: "5xl",
          base: "3xl",
        }}
        color="white"
        fontStyle="body"
        textAlign={{ md: "initial", base: "center" }}
        animation={moveTextUpAnimation}
      >
        {name}
      </Text>
      <Text
        fontSize={{ xl: "lg", lg: "md", md: "sm", sm: "xs", base: "as" }}
        color="white"
        maxW={{ md: "80%" }}
        textAlign={{ md: "initial", base: "center" }}
        animation={moveTextDownAnimation}
      >
        {mainDescription}
        &nbsp;
      </Text>
      <Text
        display={["none", "none", "none", "none", "flex"]}
        maxW={{ md: "80%" }}
        color='white'
        animation={moveTextDownAnimation}
        fontSize={{ xl: "lg", lg: "md", md: "sm", sm: "xs", base: "as" }}
      >
        {secondaryDescription}
        {/* Possui sacada com churrasqueira a carvão com bancada de granito, 1
        vaga de garagem, salão de festas, dois elevadores, guarita,
        segurança e serviço de TV. */}
      </Text>

    </>
  )
}

export default EmilioText