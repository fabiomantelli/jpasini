import {
  Box,
  Link,
  List,
  ListItem,
  Flex,
  Spacer,
  useMediaQuery,
} from '@chakra-ui/react'

import Menu from '../../components/Menu'

interface LogoProps {
  logo: string
}

function Header({ logo }: LogoProps) {
  // const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

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
          <img src={logo == 'white' ? '../white-logo.svg' : '../logo.svg'} width='100%' height='100%' />
        </Link>
        <Spacer />
        <List display={['none', 'none', 'none', 'flex', 'block']}>
          <Flex
            color={logo == 'white' ? 'white' : 'black'}
          // border="2px solid red"
          >
            <Link
              href="/projetos"
              style={{ textDecoration: 'none' }}
              // _hover={{ color: 'gray.900', transition: '0.3s' }}
              _hover={logo == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Projetos</ListItem>
            </Link>
            <Link
              href="/vendas"
              style={{ textDecoration: 'none' }}
              _hover={logo == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Vendas</ListItem>
            </Link>
            <Link
              href="/futuro"
              style={{ textDecoration: 'none' }}
              _hover={logo == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
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
