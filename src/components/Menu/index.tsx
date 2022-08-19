import { Flex, Text } from "@chakra-ui/react";

import { Slant as Hamburger } from "hamburger-react";

interface LogoProps {
  logoColor: string
}

function Menu({ logoColor }: LogoProps) {
  return (
    <Flex
      position='absolute'
      right={0}
      top={0}
      height="60px"
      width={['45vw', '45vw', '45vw', '260px', '260px']}
      margin='10px 10px 0 0'
      padding="5px"
      alignItems='center'
      background={logoColor == 'white' ? 'black' : 'green.500'}
      justifyContent='space-evenly'
    >
      <Text
        color='white'
        fontSize='as'
      >
        ARQUITETURA &#38; <br />
        ENGENHARIA CIVIL
      </Text>
      <Hamburger
        color='white'
        size={45}
      />
    </Flex>
  )
}

export default Menu