import type { NextPage } from 'next'
import Header from '../components/Header'
import GlobalStyles from '../styles/global'

import MainSection from '../components/MainSection';

const AntonioEmilio: NextPage = () => {
        return (
            <>
            <GlobalStyles />
                <Header />
                <MainSection />
            </>
        )
}

export default AntonioEmilio