import { 
  Box, 
  Flex, 
  Text, 
  List, 
  ListItem, 
  Link, 
  keyframes, 
  Divider, 
  useMediaQuery 
} from '@chakra-ui/react';

import { Slant as Hamburger } from 'hamburger-react'
import {
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiLinkedinLine,
} from 'react-icons/ri'

interface logoProps {
  logo: string
}

const motionToLeft = keyframes`
  0% { width: 0%; }
  100% { width: 16.7vw; }
`

function RightSide({ logo }: logoProps) {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const motionToLeftAnimation = `${motionToLeft} 1s linear backwards`;

  return (
    <Box
      width='280px'
      height='100vh'
      // border="2px solid red"
      background={logo == 'white' ? 'black' : 'green.500'}
      display={isLargerThan768 ? 'block' : 'none'}
      
    >
      <Divider 
        position='fixed'
        top={{ xl: '300px', lg: '265px', md: '230px'}}
        width='16.7vw'
        right='0'
        height="0px"
        borderColor="#383838"
        border={0}
        animation={motionToLeftAnimation}
      />
      <Flex 
        alignItems='flex-end'
        justifyContent='center'
        color='white'
        height="100vh"
      >
       <List 
        display='flex'
        // position="absolute"
        bottom={0}
        flexDir={isLargerThan1024 ? 'row' : 'column'}
        alignItems="center"
        gap={5}
        paddingBottom={isLargerThan1024 ? '0' : "40px"}
        height={isLargerThan1024 ? "80px" : 'auto'}
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
  )
}

export default RightSide;