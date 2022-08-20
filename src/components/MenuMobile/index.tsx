import { Box, Flex, Text } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import MenuMobileItems from "../MenuMobileItems";

interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
  logoColor: string;
}

function MenuMobile({ menuIsVisible, setMenuIsVisible, logoColor }: MenuProps) {
  return (
    <>
      <Flex
        position="absolute"
        alignItems="center"
        justifyContent="space-evenly"
        right={0}
        top={0}
        margin="10px"
        padding="5px"
        transition="width 0.3s, height 0.3s, outline 0.3s"
        willChange="width, height"
        height={menuIsVisible ? "calc(100% - 20px)" : "60px"}
        width={
          menuIsVisible
            ? [
              "calc(100% - 20px)",
              "calc(100% - 20px)",
              "calc(100% - 20px)",
              "calc(100% - 20px)",
              "calc(100% - 20px)",
            ]
            : ["45vw", "45vw", "45vw", "260px", "260px"]
        }
        backgroundColor="green.500"
        outline={menuIsVisible ? "10px solid var(--chakra-colors-gray-500)" : 'none'}
        background={
          menuIsVisible && logoColor == 'green' ?
            "rgba(46, 76, 70, 0.95)" : menuIsVisible && logoColor == 'white' ?
              "rgba(0, 0, 0, 0.85)" : logoColor == 'white' ?
                "black" : "green.500"
        }
        zIndex={3}
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
          
          right="10px"
          top="10px"
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

      <Box>
        <MenuMobileItems menuIsVisible={menuIsVisible}/>
      </Box>

    </>
  );
}

export default MenuMobile;
