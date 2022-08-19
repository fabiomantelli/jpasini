import { Flex, Image, Text } from "@chakra-ui/react";

interface SectionProps {
  imagePathOne: string;
  imageNameOne: string;
  textDescription: string;
}

function SectionOne({
  imagePathOne,
  imageNameOne,
  textDescription,
}: SectionProps) {
  return (
    <Flex
      as="section"
      alignItems="center"
      backgroundColor="#D9D9D9"
      flexDir="column"
    >
      <Image
        src={imagePathOne}
        alt={imageNameOne}
        objectFit="cover"
        w="100vw"
      />

      <Text 
        as="p" 
        maxW="800px" 
        lineHeight="25px" 
        padding="70px 40px"
        fontSize={['xs', 'xs', 'sm', 'sm', 'md', 'md']}
        textAlign={['center', 'center', 'center', 'center', 'start', 'start']}
      >
        {textDescription}
      </Text>
    </Flex>
  );
}

export default SectionOne;
