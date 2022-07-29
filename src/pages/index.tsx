import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import RightSide from '../components/RightSide'
import { FlexContainer } from '../styles/home.styles'

const Home: NextPage = () => {
  return (
      <>
        <Header />
        <FlexContainer>
          <Main />
          <RightSide />
        </FlexContainer>
      </>
  )
}

export default Home
