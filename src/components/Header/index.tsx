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

function Header(enterprise: LogoProps) {
  return (
    <Box
      padding='10px 80px 10px 5vw'
      width='calc(100vw - 280px)'
    >
      <Flex
        alignItems="center"
        textDecor='none'
        height="60px"
        justifyContent="space-evenly"
      >
        <Link href="/">
          <img src={enterprise.logoColor == 'white' ? '../white-logo.svg' : '../logo.svg'} width='100%' height='100%' />
        </Link>
        <Spacer />
        <List display={['none', 'none', 'none', 'flex', 'block']}>
          <Flex
            fontSize='sm'
          >
            <Link
              href="/empreendimentos/antonio-emilio"
              style={{ textDecoration: 'none' }}
              textColor={enterprise.colorMenu == 'white' ? 'white' : 'black'}
              _hover={enterprise.logoColor == 'white' ? 
                { color: 'gray.900', transition: '0.3s' } : 
                { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Projetos</ListItem>
            </Link>
            <Link
              href="/vendas"
              style={{ textDecoration: 'none' }}
              textColor={enterprise.colorMenu == 'white' ? 'white' : 'black'}
              _hover={enterprise.logoColor == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Vendas</ListItem>
            </Link>
            <Link
              href="/futuro"
              style={{ textDecoration: 'none' }}
              textColor={enterprise.colorMenu == 'white' ? 'white' : 'black'}
              _hover={enterprise.logoColor == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
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
