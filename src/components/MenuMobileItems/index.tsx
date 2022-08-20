import { Flex, keyframes, Link, List, ListItem } from "@chakra-ui/react"


const moveTextDown = keyframes`
  0%, 50%  {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

interface MenuMobileProps {
 menuIsVisible: boolean;
}

function MenuMobileItems({ menuIsVisible }: MenuMobileProps) {
 const moveTextDownAnimation = `${moveTextDown} 1.5s ease-in-out`;
 return (
  <List>
   <Flex
    position="absolute"
    justifyContent='center'
    alignItems='center'
    top='25%'
    left='25%'
    width='50%'
    height='50%'
    display={menuIsVisible ? 'flex' : 'none'}
    transition='2s'
    animation={moveTextDownAnimation}
    fontSize={['3xl', '3xl', '3xl', '4xl', '5xl', '5xl']}
    textColor='white'
    flexDir='column'
    textAlign='center'
    zIndex={4}
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
 )
}

export default MenuMobileItems