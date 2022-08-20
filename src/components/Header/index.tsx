import {
  Box,
  Link,
  List,
  ListItem,
  Flex,
  Spacer,
  Image
} from '@chakra-ui/react'

interface LogoProps {
  logoColor: string;
  colorMenu: string;
}

function Header(enterprise: LogoProps) {
  return (
    <Box
      padding='10px 50px 10px 5vw'
      width={['55vw','55vw','55vw', 'calc(100vw - 280px)', 'calc(100vw - 280px)']}
      objectFit='cover'
    >
      <Flex
        alignItems="center"
        textDecor='none'
        height="60px"
        width='100%'
      >
        <Link href="/">
          <Image 
            src={enterprise.logoColor == 'white' ? '../white-logo.svg' : '../logo.svg'} 
          />
        </Link>
        <Spacer />
        <List display={['none', 'none', 'none', 'block', 'block']}>
          <Flex
            fontSize='sm'
            textColor={enterprise.colorMenu == 'white' ? 'white' : 'black'}
          >
            <Link
              href="/empreendimentos/antonio-emilio"
              style={{ textDecoration: 'none' }}
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
              _hover={enterprise.logoColor == 'white' ? { color: 'gray.900', transition: '0.3s' } : { color: 'green.500', transition: '0.3s' }}
              paddingRight="50px"
            >
              <ListItem>.Vendas</ListItem>
            </Link>
            <Link
              href="/futuro"
              style={{ textDecoration: 'none' }}
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
