import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface SectionProps {
  imagePathOne: string;
  imagePathTwo: string;
  imagePathThree: string;
  imageNameOne: string;
  imageNameTwo: string;
  imageNameThree: string;
}

function SectionThree({
  imagePathOne,
  imagePathTwo,
  imagePathThree,
  imageNameOne,
  imageNameTwo,
  imageNameThree,
}: SectionProps) {
  return (
    <>
      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          paddingBottom={10}
        >
          <Image
            src={imagePathOne}
            alt={imageNameOne}
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
            src={imagePathTwo}
            alt={imageNameTwo}
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src={imagePathThree}
            alt={imageNameThree}
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
    </>
  );
}

export default SectionThree;
