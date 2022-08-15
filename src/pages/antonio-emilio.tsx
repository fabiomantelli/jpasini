import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Menu from '../components/Menu'

interface LogoProps {
  logoColor: string;
  colorMenu: string;
}

import { enterprisesData } from "../data/enterprises"

function AntonioEmilio({ logoColor, colorMenu }: LogoProps) {
  return (
    <Box
      margin="0 auto"
      backgroundColor="#D9D9D9"
    >
      {/* <Header
          logoColor={enterprise.logoColor}
          colorMenu={enterprise.colorMenu}
        />
        <Menu logoColor={enterprise.logoColor} /> */}
      <img src="../assets/antonioemilio/antonio-party-room-1.webp" />
    </Box>
  )
}

export default AntonioEmilio