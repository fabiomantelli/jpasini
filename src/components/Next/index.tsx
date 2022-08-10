import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react"

interface LogoProps {
 logo: string
}

function Next({ logo }: LogoProps) {
 const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
 const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
 
 return (
  <Flex
   position="absolute"
   flexDir="row"
   bottom={0}
   left={0}
   margin="10px 0 10px"
   width={isLargerThan768 ? "480px" : "calc(95vw - 10px);"}
   height="80px"
   alignItems="center"
   background={
    isLargerThan768 ? (logo == "white" ? "green.500" : "black") : "none"
   }
   justifyContent="space-between"
   marginLeft={isLargerThan768 ? "10px" : "5vw"}
  >
   <Box paddingLeft={isLargerThan768 ? "4vw" : "0"}>
    <Text color="white" fontSize="xs">
     PRÓXIMO
    </Text>
    <Text color="white" fontSize="3xl">
     VIENA
    </Text>
   </Box>
   <Box marginRight={isLargerThan768 ? "50px" : "none"}>
    <ArrowLeftIcon color="white" marginRight="50px" />
    <ArrowRightIcon color="white" />
   </Box>
  </Flex>
 )
}

export default Next