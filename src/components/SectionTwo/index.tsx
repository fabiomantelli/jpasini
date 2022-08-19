import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiLinkedinBoxFill } from "react-icons/ri";

interface ImageProps {
  imageOne: {
    id: number;
    url: string;
    alt: string;
  };
  imageOneMobile: {
    id: number;
    url: string;
    alt: string;
  };
  imageTwo: {
    id: number;
    url: string;
    alt: string;
  };
  imageTwoMobile: {
    id: number;
    url: string;
    alt: string;
  };
  imageThree: {
    id: number;
    url: string;
    alt: string;
  };
  imageThreeMobile: {
    id: number;
    url: string;
    alt: string;
  };
  textDescription: string;
  side: number;
}

function SectionTwo({
  imageOne,
  imageOneMobile,
  imageTwo,
  imageTwoMobile,
  imageThree,
  imageThreeMobile,
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
        >
          <Box paddingBottom={10}>
            <Image
              src={imageOne.url}
              alt={imageOne.alt}
              display={['none', 'none', 'none', 'none', 'inline-block', 'inline-block']}
            />
            <Image
              src={imageOneMobile.url}
              alt={imageOneMobile.alt}
              width={['90vw', '90vw', '90vw', '90vw', 'auto', 'auto']}
              display={['inline-block', 'inline-block', 'inline-block', 'inline-block', 'none', 'none',]}
              objectFit='cover'
            />

          </Box>
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
        w="100%"
        padding="20px 5vw"
      >
        <Box w="500px" order={side} padding={5}>
          <Flex justifyContent="center" alignItems="center">
            <Text>COMPARTILHAR</Text>
            <RiFacebookBoxFill size={20} />
            <RiLinkedinBoxFill size={20} />
          </Flex>
        </Box>
        <Box
          w="500px"
          marginLeft={[0, 0, 0, 0, '4vw', '4vw']}
          paddingBottom={5}
        >
          <Text
            as="p"
            lineHeight="25px"
            fontSize={['xs', 'xs', 'sm', 'sm', 'md', 'md']}
            textAlign={['center', 'center', 'center', 'center', 'start', 'start']}
          >
            {textDescription}
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default SectionTwo;
