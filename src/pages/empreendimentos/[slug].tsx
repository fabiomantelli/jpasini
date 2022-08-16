import { Box, Flex, Text } from "@chakra-ui/react"
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
import { RiFacebookBoxFill, RiLinkedinBoxFill } from "react-icons/ri";

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

      <Box>
        <Flex padding='0 5vw' w="100vw">
          <Box w='15%'>
            <Text>2022</Text>
          </Box>
          <Box w='45%'>
            <Text>Antônio Emílio</Text>
          </Box>
          <Box w='40%'>
            <img src={'../assets/antonioemilio/antonio-emilio-logo.svg'} alt="Antônio Emílio" />
          </Box>
        </Flex>

        <Flex>
          <Box paddingLeft="18.4%">
            <Flex>
              <Box width='12vw'>
                <Text>TIPO</Text>
                <Text>Residencial</Text>
              </Box>
              <Box>
                <Text>LOCALIZAÇÃO</Text>
                <Text>R. Otto Júlio Malina, 1642, Bairro Ipiranga, São José - SC</Text>
              </Box>
            </Flex>
          </Box>
          <Box></Box>
        </Flex>

        <Flex paddingTop="20px">
          <Box paddingLeft="18.4%">
            <Flex>
              <Box width='12vw'>
                <Text>ANDARES</Text>
                <Text>8</Text>
              </Box>
              <Box>
                <Text>STATUS</Text>
                <Text>Em construção</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex paddingTop="50px">
          <Box paddingLeft="18.4%">
            <Box>
              <Box>
                <Text>Prepare-se para viver com conforto no litoral catarinense.</Text>
              </Box>
              <Box paddingTop="10px">
                <Text as="p">São 46 apartamentos de 2 quartos, sendo 1 suíte. Sacada com churrasqueira a carvão e bancada de granito. Possui 1 vaga de garagem, salão de festas, 2 elevadores, guarita, segurança e serviço de TV.</Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Flex>
              <Text>COMPARTILHAR</Text>
              <RiFacebookBoxFill size={20} />
              <RiLinkedinBoxFill size={20} />
            </Flex>
          </Box>
        </Flex>
      </Box>
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
