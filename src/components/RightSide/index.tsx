import NextLink from 'next/link'
import { Box, Flex, Text, List, ListItem, Link, keyframes, Divider } from '@chakra-ui/react';
import Hamburger, { Sling } from 'hamburger-react'
import {
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiLinkedinLine,
} from 'react-icons/ri'
import { MenuBottom } from './styles';
import { Container, GreenItem, TextContainer } from "./styles";

interface logoProps {
  logo: string
}

const motionToLeft = keyframes`
  0% { width: 0%; }
  100% { width: 16.7vw; }
`

function RightSide({ logo }: logoProps) {
  const motionToLeftAnimation = `${motionToLeft} 1s linear backwards`;
  return (
    <Box
      width='20vw'
      height='100vh'
      background={logo == 'white' ? 'black' : 'green.500'}
    >
      <Divider 
        position='fixed'
        top='250px'
        width='16.7vw'
        right='0'
        height="0px"
        borderColor="#383838"
        border={0}
        animation={motionToLeftAnimation}
      />
      <Flex
        width='90%'
        height="60px"
        margin="10px"
        alignItems='center'
        background={logo == 'white' ? 'green.500' : 'black'}
        justifyContent='center'
      >
        <Text color='white' fontSize='as'>ARQUITETURA & ENGENHARIA CIVIL</Text>
        <Hamburger color='white' size={25} />
      </Flex>
      <Flex 
        alignItems='flex-end'
        justifyContent='center'
        color='white'
        height='calc(100vh - 80px); '
      >
       <List 
        display='flex'
        gap={8}
        marginBottom="20px"
        color="white"
       >
          <ListItem _hover={{ color: 'green.900', transition: '0.3s'}}>
            <Link href='https://www.instagram.com/jpasiniarquiteturaeengenharia/' target='_blank'>
              <RiInstagramLine size={20} />
            </Link>
          </ListItem>
          <ListItem _hover={{ color: 'green.900', transition: '0.3s'}}>
            <Link href='https://wa.me/5548999517642' target='_blank'>
              <RiWhatsappLine size={20} />
            </Link>
          </ListItem>
          <ListItem _hover={{ color: 'green.900', transition: '0.3s'}}>
            <Link href='https://www.facebook.com/jpasiniarquiteturaeengenharia/' target='_blank'>
              <RiFacebookBoxLine size={20} />
            </Link>
          </ListItem>
          <ListItem _hover={{ color: 'green.900', transition: '0.3s'}}>
            <Link href='https://www.linkedin.com/company/jpasini/' target='_blank'>
              <RiLinkedinLine size={20} />
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>

    
    
    // <Container>
    //     <GreenItem>
    //         ARQUITETURA & ENGENHARIA CIVIL
    //         <Sling />
    //     </GreenItem>
    //     <TextContainer>
    //         <p>VEJA TODOS OS PROJETOS</p>
    //         <hr id="right-line"></hr>
    //     </TextContainer>
    //     <MenuBottom>
    //         <ul>
    //             <Link 
    //                 href="https://www.instagram.com/jpasiniarquiteturaeengenharia/"
    //                 passHref
    //             >
    //                 <a target="_blank"><li>.<RiInstagramLine size={20}/></li></a>
    //             </Link>
    //             <Link 
    //                 href="https://wa.me/5548999517642"
    //                 passHref
    //             >
    //                 <a target="_blank"><li>.<RiWhatsappLine size={20} /></li></a>
    //             </Link>
    //             <Link 
    //                 href="https://www.facebook.com/jpasiniarquiteturaeengenharia/"
    //                 passHref
    //             >
    //                 <a target="_blank"><li>.<RiFacebookBoxLine size={20} /></li></a>
    //             </Link>
    //             <Link 
    //                 href="https://www.linkedin.com/company/jpasini/"
    //                 passHref
    //             >
    //                 <a target="_blank"><li>.<RiLinkedinLine size={20}/></li></a>
    //             </Link>
    //             <li>
    //                 <select
    //                     // onChange={changeLanguage}
    //                     // defaultValue={locale}
    //                 >
    //                     {/* <option value="en-US">EN</option>
    //                     <option value="pt-BR">PT</option> */}
    //                 </select>
    //             </li>
    //         </ul>
    //     </MenuBottom>
    // </Container>
  )
}

export default RightSide;