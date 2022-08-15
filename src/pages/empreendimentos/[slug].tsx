import { Box } from "@chakra-ui/react"
import { useRouter } from "next/router";
import Header from "../../components/Header"
import Menu from '../../components/Menu'

interface EnterpriseProps {
    name: string;
    mainDescription: string;
    secondaryDescription: string;
    url: string;
    path: string;
    logoColor: string;
    textColor: string;
    colorMenu: string;
}

import { enterprisesData } from "../../data/enterprises";
  
function AntonioEmilio(enterpriseData: EnterpriseProps) {
  const enterprise = enterprisesData.filter(data => data.path === asPath)

  console.log(`enterprise: ${JSON.stringify(enterprise[0].colorMenu)}`)

  return (
    <Box
      margin="0 auto"
      backgroundColor="#D9D9D9"
    >
      <Header
          logoColor={JSON.stringify(enterprise[0].logoColor)}
          colorMenu={JSON.stringify(enterprise[0].colorMenu)}
        />
        <Menu logoColor={JSON.stringify(enterprise[0].logoColor)} />
        <h1>{asPath}</h1>
      <img src="../assets/antonioemilio/antonio-party-room-1.webp" />
    </Box>
  )
}

export default AntonioEmilio


export function getStaticProps() {
  const { asPath } = useRouter();
  const enterprise = enterprisesData.filter(data => data.url == asPath)

  return {
    props: enterprise
  }
}