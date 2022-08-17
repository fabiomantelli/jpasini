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
  imageLogo: {
    url: string;
    alt: string
  };
}

function SectionFour({
  imageOne,
  imageTwo,
  imageThree,
  imageLogo
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
          <Image src={imageOne.url} alt={imageOne.alt} />
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
          <Image src={imageTwo.url} alt={imageTwo.alt} />
        </Box>
        <Box paddingLeft={6}>
          <Image src={imageThree.url} alt={imageThree.alt} />
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
              src={imageLogo.url}
              alt={imageLogo.alt}
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
    </>
  );
}

export default SectionFour;
