import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ImageProps {
  imageOne: {
    id: number;
    url: string;
    alt: string;
  },
  imageOneMobile: {
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
  imageThreeMobile: {
    id: number;
    url: string;
    alt: string;
  },
  imageLogo: {
    url: string;
    alt: string
  };
  side: number;
}

function SectionFour({
  imageOne,
  imageOneMobile,
  imageTwo,
  imageTwoMobile,
  imageThree,
  imageThreeMobile,
  imageLogo,
  side
}: ImageProps) {
  return (
    <>
      <Box as="section">
        <Flex
          alignItems="center"
          justifyContent="center"
          backgroundColor="#D9D9D9"
          flexDir="column"
        >
          <Image
            src={imageOne.url}
            alt={imageOne.alt}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            display={['none', 'none', 'none', 'none', 'inline-block', 'inline-block']}
            paddingBottom={10}
          />
          <Image
            src={imageOneMobile.url}
            alt={imageOneMobile.alt}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            display={['inline-block', 'inline-block', 'inline-block', 'inline-block', 'none', 'none',]}
            objectFit='cover'
            paddingBottom={10}
          />
        </Flex>
      </Box>

      <Flex
        as="section"
        flexDir={['column', 'column', 'column', 'column', 'row', 'row']}
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
      >
        <Box
          paddingRight={[0, 0, 0, 0, 6, 6]}
          paddingBottom={[10, 10, 10, 10, 0, 0]}
        >
          <Image
            src={imageTwo.url}
            alt={imageTwo.alt}
            display={['none', 'none', 'none', 'none', 'inline-block', 'inline-block']}
          />
          <Image
            src={imageTwoMobile.url}
            alt={imageTwoMobile.alt}
            display={['inline-block', 'inline-block', 'inline-block', 'inline-block', 'none', 'none',]}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            objectFit='cover'
          />
        </Box>
        <Box
          paddingLeft={[0, 0, 0, 0, 6, 6]}
        >
          <Image
            src={imageThree.url}
            alt={imageThree.alt}
            display={['none', 'none', 'none', 'none', 'inline-block', 'inline-block']}
          />
          <Image
            src={imageThreeMobile.url}
            alt={imageThreeMobile.alt}
            display={['inline-block', 'inline-block', 'inline-block', 'inline-block', 'none', 'none',]}
            width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
            objectFit='cover'
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        flexDir={['column', 'column', 'column', 'column', 'row', 'row']}
        alignItems="center"
        justifyContent="center"
        backgroundColor="#D9D9D9"
      >
        <Box w="500px" order={side} padding={5}>
          <Flex justifyContent="center" alignItems="center">
            <img
              src={imageLogo.url}
              alt={imageLogo.alt}
            />
          </Flex>
        </Box>
        <Box 
          marginLeft={[0, 0, 0, 0, '4vw', '4vw']} 
          maxW="555px"
        >
          <Text 
            as="p" 
            lineHeight="25px"
            padding="40px 0"
            textAlign={['center', 'center', 'center', 'center', 'start', 'start']}
          >
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
    </>
  );
}

export default SectionFour;
