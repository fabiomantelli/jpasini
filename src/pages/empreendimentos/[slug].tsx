import { Box, Flex, Text, Image } from "@chakra-ui/react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

interface EnterpriseProps {
  enterprise: [
    {
      name: string;
      mainDescription: string;
      secondaryDescription: string;
      url: string;
      path: string;
      logoColor: string;
      textColor: string;
      colorMenu: string;
    }
  ];
}

import { enterprisesData } from "../../data/enterprises";
import { RiFacebookBoxFill, RiLinkedinBoxFill } from "react-icons/ri";

function Empreendimentos({ enterprise }: EnterpriseProps) {
  return (
    <>
      <Box margin="0 auto" backgroundColor="#D9D9D9" paddingBottom={10}>
        <Header logoColor="green" colorMenu={enterprise[0].colorMenu} />
        <Menu logoColor="green" />

        <Box as="header">
          <Flex padding="0 5vw" alignItems="center">
            <Box w="15%" fontSize="md">
              <Text color="gray.500">2022</Text>
            </Box>
            <Box w="45%">
              <Text fontSize="5xl" fontWeight="medium">
                Antônio Emílio
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box paddingLeft="18.4%">
              <Flex>
                <Box width="12vw">
                  <Text fontSize="xs">TIPO</Text>
                  <Text fontSize="sm" color="gray.500">
                    Residencial
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs">LOCALIZAÇÃO</Text>
                  <Text fontSize="sm" color="gray.500">
                    R. Otto Júlio Malina, 1642, Bairro Ipiranga, São José - SC
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Flex paddingTop="20px">
            <Box paddingLeft="18.4%">
              <Flex>
                <Box width="12vw">
                  <Text fontSize="xs">ANDARES</Text>
                  <Text fontSize="sm" color="gray.500">
                    8
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs">STATUS</Text>
                  <Text fontSize="sm" color="gray.500">
                    Em construção
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            position="absolute"
            right={70}
            top={150}
            justifyContent="flex-end"
          >
            <img
              src={"../assets/antonioemilio/antonio-emilio-logo.svg"}
              alt="Antônio Emílio"
            />
          </Flex>

          <Flex paddingTop="50px">
            <Box paddingLeft="18.4%" width="59%">
              <Box>
                <Box>
                  <Text fontSize="lg" fontWeight="medium">
                    Prepare-se para viver com conforto no litoral catarinense.
                  </Text>
                </Box>
                <Box paddingTop="10px">
                  <Text as="p" fontWeight="md" color="gray.500">
                    São 46 apartamentos de 2 quartos, sendo 1 suíte. Sacada com
                    churrasqueira a carvão e bancada de granito. Possui 1 vaga
                    de garagem, salão de festas, 2 elevadores, guarita,
                    segurança e serviço de TV.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box w="36%">
              <Flex justifyContent="flex-end" alignItems="center">
                <Text>COMPARTILHAR</Text>
                <RiFacebookBoxFill size={20} />
                <RiLinkedinBoxFill size={20} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        flexDir="column"
      >
        <Image
          src="../assets/antonioemilio/antonio-party-room-1.webp"
          alt="Antônio Emílio"
          objectFit="cover"
          w="100vw"
        />

        <Text as="p" w="800px" lineHeight="25px" padding="70px 0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image1.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={10}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image2.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image3.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        w="100%"
        padding="0 5vw"
      >
        <Box w="500px">
          <Flex justifyContent="center" alignItems="center">
            <Text>COMPARTILHAR</Text>
            <RiFacebookBoxFill size={20} />
            <RiLinkedinBoxFill size={20} />
          </Flex>
        </Box>
        <Box w="500px" marginLeft="4vw">
          <Text as="p" lineHeight="25px" padding="70px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image4.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={20}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image5.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image6.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        w="100%"
        paddingBottom={20}
      >
        <Box>
          <Text as="p" w="800px" lineHeight="25px">
            RESPONSÁVEIS: <br />
            PROJETO ARQUITETÔNICO: Arq. Ana Cláudia Pasini – CAU/SC nº A 92577-2{" "}
            <br />
            PROJETO HIDRÁULICO: Arq. Ana Cláudia Pasini <br />
            PROJETO ESTRUTURAL: Engº Jaci Pasini Junior – CREA/SC nº 094360-9{" "}
            <br />
            PROJETO ELÉTRICO: Engº Gustavo Novloski <br />
            PROJETO PREVENTIVO DE INCÊNDIO: Arq. Ana Cláudia Pasini <br />
            EXECUÇÃO: Engº Jaci Pasini Junior e Arq. Ana Cláudia Pasini
          </Text>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image7.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={10}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image8.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image9.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        w="100%"
        padding="0 5vw"
      >
        <Box w="500px">
          <Flex justifyContent="center" alignItems="center">
            <img
              src={"../assets/antonioemilio/antonio-emilio-logo.svg"}
              alt="Antônio Emílio"
            />
          </Flex>
        </Box>
        <Box w="500px" marginLeft="4vw">
          <Text as="p" lineHeight="25px" padding="70px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image10.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={20}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image11.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image12.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        w="100%"
        padding="0 5vw"
      >
        <Box w="500px">
          <Flex justifyContent="center" alignItems="center">
            <Text>COMPARTILHAR</Text>
            <RiFacebookBoxFill size={20} />
            <RiLinkedinBoxFill size={20} />
          </Flex>
        </Box>
        <Box w="500px" marginLeft="4vw">
          <Text as="p" lineHeight="25px" padding="70px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image13.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={20}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image14.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image15.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        w="100%"
        padding="0 5vw"
      >
        <Box w="500px" marginRight="4vw">
          <Text as="p" lineHeight="25px" padding="70px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
        <Box w="500px">
          <Flex justifyContent="center" alignItems="center">
            <img
              src={"../assets/antonioemilio/antonio-emilio-logo.svg"}
              alt="Antônio Emílio"
            />
          </Flex>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image16.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={20}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image17.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image18.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        w="100%"
        padding="0 5vw"
      >
        <Box w="500px">
          <Flex justifyContent="center" alignItems="center">
            <Text>COMPARTILHAR</Text>
            <RiFacebookBoxFill size={20} />
            <RiLinkedinBoxFill size={20} />
          </Flex>
        </Box>
        <Box w="500px" marginLeft="4vw">
          <Text as="p" lineHeight="25px" padding="70px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src="../assets/antonioemilio/image19.webp"
            alt="Antônio Emílio"
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        paddingBottom={20}
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src="../assets/antonioemilio/image20.webp"
            alt="Antônio Emílio"
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src="../assets/antonioemilio/image21.webp"
            alt="Antônio Emílio"
          />
        </Box>
      </Flex>
    </>
  );
}

export default Empreendimentos;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "antonio-emilio" } },
      { params: { slug: "residencial-viena" } },
      { params: { slug: "internacional" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const path = params.slug;
  const enterprise = enterprisesData.filter((data) => data.path === path);

  return {
    props: { enterprise },
  };
}
