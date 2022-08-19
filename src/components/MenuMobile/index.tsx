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
      position="absolute"
      right={0}
      top={0}
      transitionDuration='0.4s'
      transitionProperty='all'
      transitionTimingFunction='linear'
      height={menuIsVisible ? "100%" : "60px"}
      width={
        menuIsVisible
          ? ["100%", "100%", "100%", "100%", "100%"]
          : ["45vw", "45vw", "45vw", "260px", "260px"]
      }
      margin={menuIsVisible ? 0 : '10px'}
      padding="5px"
      border={menuIsVisible ? '10px solid black' : 0}
      alignItems="center"
      backgroundColor="green.500"
      zIndex={5}
      background={
        menuIsVisible
          ? "rgba(46, 76, 70, 0.95)"
          : logoColor == "white"
          ? "black"
          : "green.500"
      }
      justifyContent="space-evenly"
      backdropFilter={menuIsVisible ? "blur(2px)" : "none"}
    >
      <Text
        color="white"
        fontSize="as"
        display={menuIsVisible ? "none" : "inline-block"}
      >
        ARQUITETURA &#38; <br />
        ENGENHARIA CIVIL
      </Text>
      <Box
        position={menuIsVisible ? "fixed" : "static"}
        right="5px"
        top="5px"
        onClick={
          menuIsVisible
            ? () => setMenuIsVisible(false)
            : () => setMenuIsVisible(true)
        }
      >
        <Hamburger
          color="white"
          size={30}
          toggled={menuIsVisible}
          toggle={setMenuIsVisible}
        />
      </Box>
    </Flex>
  );
}

export default MenuMobile;
