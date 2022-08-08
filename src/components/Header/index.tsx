import Image from "next/image";
import {
  Box,
  Link,
  List,
  ListItem,
  Flex,
  Spacer,
  useMediaQuery,
  Text
} from '@chakra-ui/react'

import Logo from "../../../public/Logo.svg";
import WhiteLogo from "../../../public/WhiteLogo.svg";
import { Slant as Hamburger } from "hamburger-react";

interface LogoProps {
  logo: string
}

function Header({ logo }: LogoProps) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Box
      bg={logo == 'white' ? '' : 'gray.900'}
      padding='10px 10px 10px 5vw'
    >
      <Flex alignItems="center" textDecor='none'>
        <Link href="/">
          <Image src={logo == 'white' ? WhiteLogo : Logo} alt="Logo" />
        </Link>
        <Spacer />
        {
          isLargerThan768 && (
            <>
              <List>
                <Flex alignItems="center" gap="10vw" color='white'>
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
            </>
          )
        }
        {
          isLargerThan768 ? (null) : (
            <Flex
              height="60px"
              width='30vw'
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

      </Flex>
    </Box>
  );
}

export default Header;
