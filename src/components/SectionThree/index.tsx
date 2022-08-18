import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ImageProps {
  imageOne: {
    id: number;
    url: string;
    alt: string;
  },
  imageTwo: {
    id: number;
    url: string;
    alt: string;
  },
  imageThree: {
    id: number;
    url: string;
    alt: string;
  },
}

function SectionThree({
  imageOne,
  imageTwo,
  imageThree,
}: ImageProps) {
  return (
    <>
      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
          padding={10}
        >
          <Image
            src={imageOne.url}
            alt={imageOne.alt}
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        alignItems="center"
        justifyContent="center"
        padding='0 40px'
        backgroundColor="#D9D9D9"
      >
        <Box paddingRight={6}>
          <Image
            src={imageTwo.url}
            alt={imageTwo.alt}
          />
        </Box>
        <Box paddingLeft={6}>
          <Image
            src={imageThree.url}
            alt={imageThree.alt}
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
      >
        <Box>
          <Text as="p" w="800px" lineHeight="25px" paddingTop={10}>
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
