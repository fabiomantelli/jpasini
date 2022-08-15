import { Box, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Header from "../../components/Header"
import Menu from '../../components/Menu'

interface EnterpriseProps {
  enterprise: [{
    name: string;
    mainDescription: string;
    secondaryDescription: string;
    url: string;
    path: string;
    logoColor: string;
    textColor: string;
    colorMenu: string;
  }]
}

import { enterprisesData } from "../../data/enterprises"

function Empreendimentos({ enterprise }: EnterpriseProps) {
  return (
    <Box
      margin="0 auto"
      backgroundColor="#D9D9D9"
    >
      <Header
        logoColor="green"
        colorMenu={enterprise[0].colorMenu}
      />
      <Menu logoColor={enterprise[0].logoColor} />
      <img src={`..${enterprise[0].url}`} />
    </Box>
  )
}

export default Empreendimentos

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'antonio-emilio' } },
      { params: { slug: 'residencial-viena' } },
      { params: { slug: 'internacional' } },
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const path = params.slug;
  const enterprise = enterprisesData.filter(data => data.path === path)
  
  return {
    props: { enterprise }
  }
}
