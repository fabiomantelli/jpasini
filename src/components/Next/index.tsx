import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react"

interface EnterpriseProps {
  logoColor: string;
  name: string;
  nextClick: () => void;
  previousClick: () => void;
}

function Next({ logoColor, name, nextClick, previousClick }: EnterpriseProps) {
  return (
    <Flex
      position="absolute"
      flexDir="row"
      bottom={0}
      left={0}
      margin="10px 0 10px"
      width={
        ['calc(95vw - 10px)', 'calc(95vw - 10px)', 'calc(95vw - 10px)', 480]
      }
      height="80px"
      alignItems="center"
      background={
        ['none', 'none', 'none', (logoColor == "white" ? "green.500" : "black")]
      }
      justifyContent="space-between"
      marginLeft={['5vw', '5vw', '5vw', '10px']}
    >
      <Box paddingLeft={[0, 0, 0, '4vw']}>
        <Text color="white" fontSize="xs">
          PRÓXIMO
        </Text>
        <Text
          key={name}
          color="white"
          fontSize="2xl"
        >
          {name}
        </Text>
      </Box>
      <Box marginRight={['10px', '10px', 'none', '50px']}>
        <ArrowLeftIcon
          color="white"
          marginRight="30px"
          onClick={previousClick}
          cursor="pointer"
          _hover={{ color: 'green.600', transition: '0.3s' }}
        />
        <ArrowRightIcon
          color="white"
          onClick={nextClick}
          cursor="pointer"
          _hover={{ color: 'green.600', transition: '0.3s' }}
        />
      </Box>
    </Flex>
  )
}

export default Next