import type { NextPage } from 'next'

import Header from '../components/Header'
import MainSection from '../components/MainSection'
import RightSide from '../components/RightSide'
import { Box, Flex } from '@chakra-ui/react'
import Div100vh from 'react-div-100vh'

const Home: NextPage = () => {
  return (
    <Div100vh>
      <Box
        backgroundImage='/background.webp'
        backgroundSize='cover'
        // height='100vh'
        width='100vw'
      >
        <Header logo='white' />
        <MainSection logo='white' />
      </Box>
      <RightSide logo='white' />
    </Div100vh>
  )
}

export default Home
