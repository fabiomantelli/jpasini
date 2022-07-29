import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header/Header'



const Home: NextPage = () => {
  return (
      <div className="container">
        <Header />
          <div className="left-side">
            <h1>Dark Theme</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            {/* <button className="accent" 
              onClick={() => setIsDarkTheme(!isDarkTheme)}>
              Trocar Tema
            </button> */}
          </div>
          <div className="right-side">Teste</div>
      </div >
  )
}

export default Home
