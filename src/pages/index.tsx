import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import RightSide from '../components/RightSide'

const Home: NextPage = () => {
  return (
    <Flex>
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
    </Flex>
  )
}

export default Home
