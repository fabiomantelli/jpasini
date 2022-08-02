import type { NextPage } from 'next'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const AntonioEmilio: NextPage = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }
        return (
            <ThemeProvider theme={theme}>
                <Header toggleTheme={toggleTheme} />
            </ThemeProvider>
        )
}

export default AntonioEmilio