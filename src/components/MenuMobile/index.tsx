import { Box, Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
 menuIsVisible: boolean;
 setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
 logoColor: string;
}

function MenuMobile({ menuIsVisible, setMenuIsVisible, logoColor }: MenuProps) {
 return (
  <Flex
   position='absolute'
   transition='1s'
   right={0}
   top={0}
   height={menuIsVisible ? '100%' : '60px'}
   width={menuIsVisible ? ['100%', '100%', '100%', '100%', '100%'] : ['45vw', '45vw', '45vw', '260px', '260px']}
   margin={menuIsVisible ? 0 : '10px 10px 0 0'}
   padding="5px"
   alignItems='center'
   backgroundColor='green.500'
   zIndex={5}
   background={menuIsVisible ?
    'rgba(46, 76, 70, 0.95)' :
    logoColor == 'white' ? 'black' : 'green.500'
   }
   justifyContent='space-evenly'
   backdropFilter={menuIsVisible ? 'blur(2px)' : 'none'}
  >
   <Text
    color='white'
    fontSize='as'
    display={menuIsVisible ? 'none' : 'inline-block'}
   >
    ARQUITETURA &#38; <br />
    ENGENHARIA CIVIL
   </Text>
   <Box
    position={menuIsVisible ? 'fixed' : 'static'}
    right='10px'
    top='10px'
    onClick={menuIsVisible ? () => setMenuIsVisible(false) : () => setMenuIsVisible(true)}
   >
    <Hamburger
     color='white'
     size={40}
     toggled={menuIsVisible}
     toggle={setMenuIsVisible}
    />
   </Box>
  </Flex>
 )
}

export default MenuMobile