import { Box, Flex } from "@chakra-ui/react"
import { NextPage } from "next"
import Header from "../components/Header"

import Menu from '../components/Menu'


interface LogoProps {
    logo: string
   }
   

function AntonioEmilio({ logo }:  LogoProps) {
    return (
        <Box
            margin="0 auto"
        >
            <Header logo="green" />
            <Menu logo={logo} />
            <img src="../assets/antonioemilio/antonio-party-room-1.webp"/>
        </Box>
    )
}

export default AntonioEmilio