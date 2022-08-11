import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

import { Slant as Hamburger } from "hamburger-react";

interface LogoProps {
 logo: string
}

function Menu({ logo }: LogoProps) {
 const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
 const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
 return (
  <Flex
   position='absolute'
   right={0}
   top={0}
   height="60px"
   // width='14vw'
//    width={isLargerThan768 ? '260px' : '45vw'}
   width={['45vw', '45vw', '45vw', '260px', '260px']}
//    display={['none', 'none', 'none', 'block']}
   margin='10px 10px 0 0'
   padding="5px"
   alignItems='center'
   background={logo == 'white' ? 'green.500' : 'black'}
   justifyContent='space-evenly'
  >
   <Text
    color='white'
    fontSize='as'
   >
    ARQUITETURA & <br />
    ENGENHARIA CIVIL
   </Text>
   <Hamburger
    color='white'
    size={isLargerThan1280 ? 45 : 25}
   />
  </Flex>
 )
}

export default Menu