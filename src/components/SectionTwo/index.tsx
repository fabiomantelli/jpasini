import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiLinkedinBoxFill } from "react-icons/ri";

interface SectionProps {
  imagePathOne: string;
  imagePathTwo: string;
  imagePathThree: string;
  imageNameOne: string;
  imageNameTwo: string;
  imageNameThree: string;
  textDescription: string;
}

function SectionTwo({
  imagePathOne,
  imagePathTwo,
  imagePathThree,
  imageNameOne,
  imageNameTwo,
  imageNameThree,
  textDescription,
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
          <Image src={imagePathOne} alt={imageNameOne} />
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
          <Image src={imagePathTwo} alt={imageNameTwo} />
        </Box>
        <Box paddingLeft={6}>
          <Image src={imagePathThree} alt={imageNameTwo} />
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
            {textDescription}
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default SectionTwo;
