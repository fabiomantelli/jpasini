import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react"

interface LogoProps {
 logo: string
}

function Next({ logo }: LogoProps) {
 // const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
 
 return (
  <Flex
   position="absolute"
   flexDir="row"
   bottom={0}
   left={0}
   margin="10px 0 10px"
   width={['calc(95vw - 10px)','calc(95vw - 10px)', 'calc(95vw - 10px)', 480]}
   height="80px"
   alignItems="center"
   background={['none', 'none', 'none', (logo == "white" ? "green.500" : "black")]}
   // background={
   //  isLargerThan768 ? (logo == "white" ? "green.500" : "black") : "none"
   // }
   justifyContent="space-between"
   marginLeft={['5vw', '5vw', '5vw', '10px']}
  >
   <Box paddingLeft={[0, 0, 0, '4vw']}>
    <Text color="white" fontSize="xs">
     PRÓXIMO
    </Text>
    <Text color="white" fontSize="3xl">
     VIENA
    </Text>
   </Box>
   <Box marginRight={['none', 'none', 'none', '50px']}>
   {/* <Box marginRight={isLargerThan768 ? "50px" : "none"}> */}
    <ArrowLeftIcon color="white" marginRight="50px" />
    <ArrowRightIcon color="white" />
   </Box>
  </Flex>
 )
}

export default Next