import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiLinkedinBoxFill } from "react-icons/ri";

interface ImageProps {
  imageOne: {
    id: number;
    url: string;
    alt: string;
  };
  imageTwo: {
    id: number;
    url: string;
    alt: string;
  };
  imageThree: {
    id: number;
    url: string;
    alt: string;
  };
  textDescription: string;
  side: number;
}

function SectionTwo({ 
  imageOne, 
  imageTwo, 
  imageThree, 
  textDescription,
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
          <Image src={imageThree.url} alt={imageTwo.alt} />
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
        <Box w="500px" order={side}>
          <Flex justifyContent="center" alignItems="center">
            <Text>COMPARTILHAR</Text>
            <RiFacebookBoxFill size={20} />
            <RiLinkedinBoxFill size={20} />
          </Flex>
        </Box>
        <Box w="500px" marginLeft="4vw">
          <Text as="p" lineHeight="25px" padding="70px 0">
            {textDescription}
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default SectionTwo;
