import { Flex, Image, Text } from "@chakra-ui/react";

function SectionOne() {
  return (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Flex>
  );
}

export default SectionOne;
