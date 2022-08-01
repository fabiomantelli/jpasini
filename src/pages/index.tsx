import type { NextPage } from 'next'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import Header from '../components/Header'
import Main from '../components/Main'
import RightSide from '../components/RightSide'

import { FlexContainer } from '../styles/home.styles'
import GlobalStyles from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import usePersistedState from '../utils/usePersistedState'

const Home: NextPage = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <FlexContainer>
          <Main />
          <RightSide />
        </FlexContainer>
      </ThemeProvider>
  )
}

export default Home
