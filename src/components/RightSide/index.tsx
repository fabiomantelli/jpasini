import {
  Box,
  Flex,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';

import {
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiLinkedinLine,
} from 'react-icons/ri'

interface logoProps {
  logoColor: string;
}

function RightSide({ logoColor }: logoProps) {
  return (
    <Box
      width='280px'
      height='100vh'
      background={logoColor == 'white' ? 'green.500' : 'black'}
      display={['none', 'none', 'none', 'block']}
    >
      <Flex
        alignItems='flex-end'
        justifyContent='center'
        color='white'
        height="100vh"
      >
        <List
          display='flex'
          bottom={0}
          flexDir={['column', 'column', 'column', 'column', 'row']}
          alignItems="center"
          gap={5}
          paddingBottom={['40px', '40px', '40px', '40px', '0']}
          height={['auto', 'auto', 'auto', 'auto', '80px']}
          zIndex={10}
        >
          <ListItem _hover={{ color: 'green.600', transition: '0.3s' }}>
            <Link href='https://www.instagram.com/jpasiniarquiteturaeengenharia/' target='_blank'>
              <RiInstagramLine size={20} />
            </Link>
          </ListItem>
          <ListItem _hover={{ color: 'green.600', transition: '0.3s' }}>
            <Link href='https://wa.me/5548999517642' target='_blank'>
              <RiWhatsappLine size={20} />
            </Link>
          </ListItem>
          <ListItem _hover={{ color: 'green.600', transition: '0.3s' }}>
            <Link href='https://www.facebook.com/jpasiniarquiteturaeengenharia/' target='_blank'>
              <RiFacebookBoxLine size={20} />
            </Link>
          </ListItem>
          <ListItem _hover={{ color: 'green.600', transition: '0.3s' }}>
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