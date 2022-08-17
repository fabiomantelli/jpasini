import { Box, Flex, Text } from "@chakra-ui/react";
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
    <Box as="header">
      <Flex padding="0 5vw" alignItems="center">
        <Box w="15%" fontSize="md">
          <Text color="gray.500">{date}</Text>
        </Box>
        <Box w="45%">
          <Text fontSize="5xl" fontWeight="medium">
            {enterpriseName}
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box paddingLeft="18.4%">
          <Flex>
            <Box width="12vw">
              <Text fontSize="xs">TIPO</Text>
              <Text fontSize="sm" color="gray.500">
                {typeOfEnterprise}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs">LOCALIZAÇÃO</Text>
              <Text fontSize="sm" color="gray.500">
                {location}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex paddingTop="20px">
        <Box paddingLeft="18.4%">
          <Flex>
            <Box width="12vw">
              <Text fontSize="xs">ANDARES</Text>
              <Text fontSize="sm" color="gray.500">
                {floors}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs">STATUS</Text>
              <Text fontSize="sm" color="gray.500">
                {status}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex position="absolute" right={70} top={150} justifyContent="flex-end">
        <img
          src={imageLogo.url}
          alt={imageLogo.alt}
        />
      </Flex>

      <Flex paddingTop="50px">
        <Box paddingLeft="18.4%" width="59%">
          <Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                {mainTitle}
              </Text>
            </Box>
            <Box paddingTop="10px">
              <Text as="p" fontWeight="md" color="gray.500">
                {mainSubTitle}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w="36%">
          <Flex justifyContent="flex-end" alignItems="center">
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
