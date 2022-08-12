import {
  Box,
  Link,
  List,
  ListItem,
  Flex,
  Spacer,
} from '@chakra-ui/react'

interface LogoProps {
  logoColor: string;
  colorMenu: string;
}

function Header({ logoColor, colorMenu }: LogoProps) {
  return (
    <Box
      padding='10px 80px 10px 5vw'
    // border="2px solid purple"
    >
      <Flex
        alignItems="center"
        textDecor='none'
        height="60px"
        // border="2px solid green"
        justifyContent="space-evenly"
      >
        <Link href="/">
          <img src={logoColor == 'white' ? '../white-logo.svg' : '../logo.svg'} width='100%' height='100%' />
        </Link>
        <Spacer />
        <List display={['none', 'none', 'none', 'flex', 'block']}>
          <Flex
          // border="2px solid red"
          >
            <Link
              href="/projetos"
              style={{ textDecoration: 'none' }}
              textColor={colorMenu == 'white' ? 'white' : 'black'}
              // _hover={{ color: 'gray.900', transition: '0.3s' }}
              _hover={logoColor == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Projetos</ListItem>
            </Link>
            <Link
              href="/vendas"
              style={{ textDecoration: 'none' }}
              textColor={colorMenu == 'white' ? 'white' : 'black'}
              _hover={logoColor == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Vendas</ListItem>
            </Link>
            <Link
              href="/futuro"
              style={{ textDecoration: 'none' }}
              textColor={colorMenu == 'white' ? 'white' : 'black'}
              _hover={logoColor == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
            >
              <ListItem>.Futuro</ListItem>
            </Link>
          </Flex>
        </List>
      </Flex>
    </Box>
  );
}

export default Header;
