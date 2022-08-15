import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Menu from '../components/Menu'

interface LogoProps {
  logoColor: string;
  colorMenu: string;
}

function AntonioEmilio({ logoColor, colorMenu }: LogoProps) {
  return (
    <Box
      margin="0 auto"
    >
      <Header logoColor={logoColor} colorMenu={colorMenu} />
      <Menu logoColor={logoColor} />
      <img src="../assets/antonioemilio/antonio-party-room-1.webp" />
    </Box>
  )
}

export default AntonioEmilio