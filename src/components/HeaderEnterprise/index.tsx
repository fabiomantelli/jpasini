import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiLinkedinBoxFill } from "react-icons/ri";

interface HeaderEnterpriseProps {
  enterpriseName: string;
  date: number;
  location: string;
  floors: string;
  status: string;
  typeOfEnterprise: string;
  imageLogo: LogoProps;
  mainTitle: string;
  mainSubTitle: string;
}

interface LogoProps {
  url: string;
  alt: string;
}

function HeaderEnterprise({
  date,
  enterpriseName,
  typeOfEnterprise,
  location,
  floors,
  status,
  imageLogo,
  mainTitle,
  mainSubTitle,
}: HeaderEnterpriseProps) {
  return (
    <Box as="header" paddingTop={10}>
      <Flex
        padding="0 5vw"
        alignItems="center"
        flexDir={["column", "column", "column", "column", "row", "row"]}
      >
        <Flex
          w="15%"
          fontSize="md"
          order={[1, 1, 1, 1, 0, 0]}
          justifyContent="center"
          paddingBottom={["40px", "40px", "40px", "40px", 0, 0]}
        >
          <Text color="gray.500">{date}</Text>
        </Flex>
        <Box w="45%">
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl", "5xl"]}
            fontWeight="medium"
            textAlign={[
              "center",
              "center",
              "center",
              "center",
              "start",
              "start",
            ]}
          >
            {enterpriseName}
          </Text>
        </Box>
      </Flex>

      <Flex
        justifyContent={[
          "center",
          "center",
          "center",
          "center",
          "flex-start",
          "flex-start",
        ]}
      >
        <Box paddingLeft={[0, 0, 0, 0, "18.4%", "18.4%"]}>
          <Flex
            flexDir={["column", "column", "column", "column", "row", "row"]}
          >
            <Box
              width={["auto", "auto", "auto", "auto", "12vw", "12vw"]}
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "start",
                "start",
              ]}
            >
              <Text fontSize="xs">TIPO</Text>
              <Text
                fontSize="sm"
                color="gray.500"
                paddingBottom={["10px", "10px", "10px", "10px", 0, 0]}
              >
                {typeOfEnterprise}
              </Text>
            </Box>
            <Box
              width={["auto", "auto", "auto", "auto", "12vw", "12vw"]}
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "start",
                "start",
              ]}
            >
              <Text fontSize="xs">LOCALIZAÇÃO</Text>
              <Text fontSize="sm" color="gray.500">
                {location}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        paddingTop="20px"
        justifyContent={[
          "center",
          "center",
          "center",
          "center",
          "flex-start",
          "flex-start",
        ]}
      >
        <Box paddingLeft={[0, 0, 0, 0, "18.4%", "18.4%"]}>
          <Flex
            flexDir={["column", "column", "column", "column", "row", "row"]}
          >
            <Box
              width="12vw"
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "start",
                "start",
              ]}
            >
              <Text fontSize="xs">ANDARES</Text>
              <Text
                fontSize="sm"
                color="gray.500"
                paddingBottom={["10px", "10px", "10px", "10px", 0, 0]}
              >
                {floors}
              </Text>
            </Box>
            <Box
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "start",
                "start",
              ]}
            >
              <Text fontSize="xs">STATUS</Text>
              <Text fontSize="sm" color="gray.500">
                {status}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex position="absolute" right={70} top={150} justifyContent="flex-end">
        <Image
          src={imageLogo.url}
          alt={imageLogo.alt}
          width={["60%", "60%", "60%", "60%", "80%", "100%"]}
          display={[
            "none",
            "none",
            "none",
            "none",
            "inline-block",
            "inline-block",
          ]}
        />
      </Flex>

      <Flex
        paddingTop="50px"
        paddingLeft={[0, 0, 0, 0, "18.4%", "18.4%"]}
        flexDir={["column", "column", "column", "column", "row", "row"]}
        alignItems="center"
      >
        <Box width="59%">
          <Box>
            <Box>
              <Text
                fontSize="lg"
                fontWeight="medium"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "center",
                  "start",
                  "start",
                ]}
              >
                {mainTitle}
              </Text>
            </Box>
            <Box paddingTop="10px">
              <Text
                as="p"
                fontWeight="md"
                color="gray.500"
                textAlign={[
                  "center",
                  "center",
                  "center",
                  "center",
                  "start",
                  "start",
                ]}
              >
                {mainSubTitle}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w="36%">
          <Flex
            justifyContent={[
              "center",
              "center",
              "center",
              "center",
              "flex-end",
              "flex-end",
            ]}
            paddingTop={10}
          >
            <Text>COMPARTILHAR</Text>
            <RiFacebookBoxFill size={20} />
            <RiLinkedinBoxFill size={20} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default HeaderEnterprise;
