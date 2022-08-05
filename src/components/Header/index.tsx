import { Box, Link, List, ListItem, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

import Hamburger from 'hamburger-react'

import Logo from "../../../public/Logo.svg";
import WhiteLogo from "../../../public/WhiteLogo.svg";

import { Container, NavigationMenu } from "./styles";

interface LogoProps {
  logo: string
}

function Header({ logo }: LogoProps) {
  return (
    <>
      <Box bg={logo == 'white' ? '' : 'gray.900'} padding='10px'>
        <Flex alignItems="center">
          <Link href="/">
              <Image src={logo == 'white' ? WhiteLogo : Logo} />
          </Link>
          <Spacer />
          <List>
            <Flex alignItems="center" gap="150px">
              <Link href="/projetos">
                <ListItem>.Projetos</ListItem>
              </Link>
              <Link href="/endas">
                <ListItem>.Vendas</ListItem>
              </Link>
              <Link href="/futuro">
                <ListItem>.Futuro</ListItem>
              </Link>
            </Flex>
          </List>
          <Spacer />
          <Flex 
            width="350px"
            height="60px" 
            alignItems='center' 
            background={logo == 'white' ? 'green.500' : 'black'}
            justifyContent='center'
            gap='5'
          >
            <Text color='white' fontSize='xs'>ARQUITETURA & ENGENHARIA CIVIL</Text>
            <Hamburger color='white' />
          </Flex>
        </Flex>
      </Box>
      <Box bg="gray.900" height='50vh'>
        Novo
      </Box>
    </>
    // <Container>
    //     <Link href="/"><Image src={WhiteLogo} alt="JPasini"/></Link>
    //     <NavigationMenu>
    //         <Link href="/"><a><li>.Projects</li></a></Link>
    //         <Link href="/"><a><li>.Sales</li></a></Link>
    //         <Link href="/"><a><li>.Future</li></a></Link>
    //     </NavigationMenu>
    // </Container>
  );
}

export default Header;
