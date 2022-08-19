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
  imageTwoMobile: {
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
  imageTwoMobile,
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
          paddingBottom={10}
        >
          <Image
            src={imageOne.url}
            alt={imageOne.alt}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            objectFit='cover'
          />
        </Flex>
      </Box>

      <Flex
      
        as="section"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
        flexDir={['column', 'column', 'column', 'column', 'row', 'row']}
        
      >
        <Box paddingRight={[0, 0, 0, 0, 6, 6]} paddingBottom={[10, 10, 10, 10, 0, 0]}>
          <Image
            src={imageTwo.url}
            alt={imageTwo.alt}
            display={['none', 'none', 'none', 'none', 'inline-block', 'inline-block' ]} 
          />
          <Image 
            src={imageTwoMobile.url} 
            alt={imageTwoMobile.alt} 
            display={['inline-block', 'inline-block', 'inline-block', 'inline-block', 'none', 'none', ]}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            height='412px'
            objectFit='cover'
          />
        </Box>
        <Box paddingLeft={[0, 0, 0, 0, 6, 6]}>
          <Image
            src={imageThree.url}
            alt={imageThree.alt}
            objectFit='cover'
            display={['none', 'none', 'none', 'none', 'inline-block', 'inline-block' ]}
          />
          <Image
            src={imageThree.url}
            alt={imageThree.alt}
            display={['inline-block', 'inline-block', 'inline-block', 'inline-block', 'none', 'none', ]}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            objectFit='cover'
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
        <Box paddingTop={10} paddingBottom={10}>
          <Text 
            as="p" 
            maxW="800px" 
            w='90vw'
            lineHeight="25px" 
            fontSize={['xs', 'xs', 'sm', 'sm', 'md', 'md']}
          >
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
