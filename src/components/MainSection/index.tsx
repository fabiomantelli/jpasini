import { Box, Stack, Text, Flex, Divider, keyframes } from "@chakra-ui/react";
import EmilioText from "../EmilioText";

interface logoProps {
  logo: string;
}

const motionLineToRight = keyframes`
  0% { width: 0%; }
  100% { width: calc(100vw - 280px); }
`;
const motionCircleToRight = keyframes`
  0% { left: -20%; }
  100% { left: 3%; }
`;

function MainSection({ logo }: logoProps) {
  const motionLineToRightAnimation = `${motionLineToRight} 1s linear forwards`;
  const motionCircleToRightAnimation = `${motionCircleToRight} 1s linear forwards`;

  return (
    <>
      <Box width="80vw" display="flex" marginRight="auto" marginLeft="auto">
        <Divider
          position="absolute"
          display={["none", "none", "none", "none", "flex"]}
          left="0"
          top={{ xl: "275px", lg: "240px" }}
          borderColor="rgba(179,179,179,1)"
          animation={motionLineToRightAnimation}
        />
        <Stack
          height={["70vh", "70vh", "70vh", "70vh", "auto"]}
          justifyContent={{ md: "initial", base: "center" }}
          padding="50px 5vw"
          width="100%"
          position="relative"
        >
          <Flex
            position="absolute"
            display={["none", "none", "none", "none", "flex"]}
            width="213px"
            height="213px"
            top={{ xl: "90px", lg: "60px", md: "60px" }}
            border="1px solid rgba(179,179,179,0.3)"
            borderRadius="50%"
            animation={motionCircleToRightAnimation}
          />
          <EmilioText />
        </Stack>
      </Box>
    </>
  );
}

export default MainSection;
