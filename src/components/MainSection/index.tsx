import { Box, Stack, Text, Flex, Divider, keyframes } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

interface logoProps {
  logo: string
}

const motionLineToRight = keyframes`
  0% { width: 0%; }
  100% { width: 83.2vw; }
`
const motionCircleToRight = keyframes`
  0% { left: -5%; }
  100% { left: 3%; }
`

const moveTextUp = keyframes`
  0%  {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
`
const moveTextDown = keyframes`
  0%  {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`

function MainSection({ logo }: logoProps) {
  const motionLineToRightAnimation = `${motionLineToRight} 1s linear forwards`;
  const motionCircleToRightAnimation = `${motionCircleToRight} 1s linear forwards`;
  const moveTextUpAnimation = `${moveTextUp} 0.5s ease-in-out`;
  const moveTextDownAnimation = `${moveTextDown} 1s ease-in-out`;

  return (
    <Box>
      <Flex
      position='fixed'
      width='213px'
      height='213px'
      left='41px'
      top='150px'
      border='1px solid rgba(179,179,179,0.3)'
      borderRadius='50%'
      animation={motionCircleToRightAnimation}
      />

      <Divider 
        position='fixed'
        width='83.2vw'
        top='250px'
        border='0px solid rgba(179,179,179,0.3)'
        animation={motionLineToRightAnimation}
      />

      <Stack>
        <Text 
          fontSize='9xl' 
          color='white' 
          paddingLeft='100px'
          fontStyle='body'
          animation={moveTextUpAnimation}
        >
          Antônio Emílio
        </Text>
        <Text 
          fontSize='lg' 
          color='white' 
          paddingLeft='100px' 
          maxW='60%'
          animation={moveTextDownAnimation}
        >
          Projeto com 46 Unidades, todos os apartamentos de 2 quartos,
          sendo 1 suíte. Possui sacada com churrasqueira a carvão com
          bancada de granito, 1 vaga de garagem, salão de festas, dois
          elevadores, guarita, segurança e serviço de TV.
        </Text>
      </Stack>
      <Flex
        position='absolute'
        flexDir='row'
        bottom='0'
        margin='10px'
        width='400px'
        height="80px"
        alignItems='center'
        background={logo == 'white' ? 'green.500' : 'black'}
        justifyContent='space-between'
        paddingLeft='90px'
      >
        <Box>
          <Text color='white' fontSize='xs'>PRÓXIMO</Text>
          <Text color='white' fontSize='3xl'>VIENA</Text>
        </Box>
        <Box marginRight='50px'>
          <ArrowLeftIcon color='white' marginRight='50px' />
          <ArrowRightIcon color='white' />
        </Box>
      </Flex>
    </Box>
  )
}

export default MainSection