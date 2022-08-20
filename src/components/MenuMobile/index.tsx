import { Box, Flex, keyframes, Link, List, ListItem, Text } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
  logoColor: string;
}


const moveTextDown = keyframes`
  0%, 50%  {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

function MenuMobile({ menuIsVisible, setMenuIsVisible, logoColor }: MenuProps) {
  const moveTextDownAnimation = `${moveTextDown} 1.5s ease-in-out`;

  return (
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
        zIndex={15}
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

      <List>
        <Flex
          display={menuIsVisible ? 'block' : 'none'}
          transition='2s'
          animation={moveTextDownAnimation}
          fontSize='6xl'
          textColor='white'
          flexDir='column'
          textAlign='center'
        >
          <Link 
            href="/quem-somos"
          >
            <ListItem>Quem Somos</ListItem>
          </Link>
          <Link 
            href="/incorporadora"
          >
            <ListItem>Incorporadora</ListItem>
          </Link>
          <Link 
            href="/projetos"
          >
            <ListItem>Projetos</ListItem>
          </Link>
          <Link 
            href="/administracao"
          >
            <ListItem>Administração</ListItem>
          </Link>
          <Link 
            href="/vendas"
          >
            <ListItem>Vendas</ListItem>
          </Link>
        </Flex>
      </List>

    </Flex>
  );
}

export default MenuMobile;
