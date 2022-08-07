import { Box, Link, List, ListItem, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";

import Logo from "../../../public/Logo.svg";
import WhiteLogo from "../../../public/WhiteLogo.svg";

interface LogoProps {
  logo: string
}

function Header({ logo }: LogoProps) {
  return (
    <Box bg={logo == 'white' ? '' : 'gray.900'} padding='10px'>
      <Flex alignItems="center" textDecor='none'>
        <Link href="/">
          <Image src={logo == 'white' ? WhiteLogo : Logo} />
        </Link>
        <Spacer />
        <List>
          <Flex alignItems="center" gap="150px" color='white'>
            <Link
              href="/projetos"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'gray.900', transition: '0.3s' }}
            >
              <ListItem>.Projetos</ListItem>
            </Link>
            <Link
              href="/vendas"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'gray.900', transition: '0.3s' }}
            >
              <ListItem>.Vendas</ListItem>
            </Link>
            <Link
              href="/futuro"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'gray.900', transition: '0.3s' }}
            >
              <ListItem>.Futuro</ListItem>
            </Link>
          </Flex>
        </List>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Header;
