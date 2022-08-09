import { Box, Stack, Text, Flex, Divider, keyframes, useMediaQuery } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

interface logoProps {
  logo: string
}

const motionLineToRight = keyframes`
  0% { width: 0%; }
  100% { width: 83.2vw; }
`
const motionCircleToRight = keyframes`
  0% { left: -20%; }
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
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const motionLineToRightAnimation = `${motionLineToRight} 1s linear forwards`;
  const motionCircleToRightAnimation = `${motionCircleToRight} 1s linear forwards`;
  const moveTextUpAnimation = `${moveTextUp} 0.5s ease-in-out`;
  const moveTextDownAnimation = `${moveTextDown} 1s ease-in-out`;

  return (
    <Box
      // height="calc(100vh - 180px)"
      maxW='1440px'
      width='100%'
      display='flex'
      marginRight='auto'
      marginLeft='auto'
      border="2px solid red"
    >
    <Divider
      position='fixed'
      display={isLargerThan768 ? 'block' : 'none'}
      width='83.2vw'
      left='0'
      top={{ xl: '300px', lg: '265px', md: '230px'}}
      border='0px solid rgba(179,179,179,0.3)'
      animation={motionLineToRightAnimation}
    />

      <Stack
        height={isLargerThan768 ? 'auto' : '100%'}
        justifyContent={{ md: 'initial', base: 'center' }}
        padding='50px 5vw'
        width='100%'
        position='relative'
      >
        <Flex
          position='absolute'
          display={isLargerThan768 ? 'block' : 'none'}
          width='213px'
          height='213px'
          // top='120px'
          top={{ xl: '120px', lg: '95px', md: '60px'}}
          border='1px solid rgba(179,179,179,0.3)'
          borderRadius='50%'
          animation={motionCircleToRightAnimation}
        />
        <Text
          fontSize={{ xl: '9xl', lg: '8xl', md: '7xl', sm: '6xl', base: '4xl' }}
          color='white'
          fontStyle='body'
          textAlign={{ md: 'initial', base: 'center' }}
          animation={moveTextUpAnimation}
        >
          Antônio Emílio
        </Text>
        <Text
          fontSize={{ xl: 'lg', lg: 'md', md: 'sm', sm: 'xs', base: 'as' }}
          color='white'
          maxW={{ md: '60%' }}
          textAlign={{ md: 'initial', base: 'center' }}
          animation={moveTextDownAnimation}
        >
          Projeto com 46 Unidades, todos os apartamentos de 2 quartos,
          sendo 1 suíte.
          {
            isLargerThan768 && (
              <Text>
                Possui sacada com churrasqueira a carvão com
                bancada de granito, 1 vaga de garagem, salão de festas, dois
                elevadores, guarita, segurança e serviço de TV.
              </Text>
            )
          }
        </Text>
      </Stack>
      <Flex
        position='absolute'
        flexDir='row'
        bottom='0'
        left='0'
        margin='0 0 10px'
        width={isLargerThan768 ? '600px' : 'calc(95vw - 10px);'}
        height="80px"
        alignItems='center'
        background={isLargerThan768 ? logo == 'white' ? 'green.500' : 'black' : 'none'}
        justifyContent='space-between'
        marginLeft={isLargerThan768 ? '10px' : '5vw'}
      >
        <Box
          paddingLeft={isLargerThan768 ? '4vw' : '0'}
        >
          <Text color='white' fontSize='xs'>PRÓXIMO</Text>
          <Text color='white' fontSize='3xl'>VIENA</Text>
        </Box>
        <Box
          marginRight={isLargerThan768 ? '50px' : 'none'}
        >
          <ArrowLeftIcon color='white' marginRight='50px' />
          <ArrowRightIcon color='white' />
        </Box>
      </Flex>
    </Box>
  )
}

export default MainSection