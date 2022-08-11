import { Box, Stack, Text, Flex, Divider, keyframes } from "@chakra-ui/react";

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

const moveTextUp = keyframes`
  0%  {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
`;
const moveTextDown = keyframes`
  0%  {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

function MainSection({ logo }: logoProps) {
  const motionLineToRightAnimation = `${motionLineToRight} 1s linear forwards`;
  const motionCircleToRightAnimation = `${motionCircleToRight} 1s linear forwards`;
  const moveTextUpAnimation = `${moveTextUp} 0.5s ease-in-out`;
  const moveTextDownAnimation = `${moveTextDown} 1s ease-in-out`;

  return (
    <>
      <Box width="80vw" display="flex" marginRight="auto" marginLeft="auto">
        <Divider
          position="absolute"
          // display={["none", "none", "none", "none", "flex"]}
          left="0"
          top={{ xl: "300px", lg: "265px", md: "230px" }}
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
            // display={["none", "none", "none", "none", "flex"]}
            width="213px"
            height="213px"
            top={{ xl: "120px", lg: "95px", md: "60px" }}
            border="1px solid rgba(179,179,179,0.3)"
            borderRadius="50%"
            animation={motionCircleToRightAnimation}
          />
          <Text
            fontSize={{
              xl: "9xl",
              lg: "8xl",
              md: "7xl",
              sm: "6xl",
              base: "4xl",
            }}
            color="white"
            fontStyle="body"
            textAlign={{ md: "initial", base: "center" }}
            animation={moveTextUpAnimation}
          >
            Antônio Emílio
          </Text>
          <Text
            fontSize={{ xl: "lg", lg: "md", md: "sm", sm: "xs", base: "as" }}
            color="white"
            maxW={{ md: "70%" }}
            textAlign={{ md: "initial", base: "center" }}
            animation={moveTextDownAnimation}
          >
            Projeto com 46 Unidades, todos os apartamentos de 2 quartos, sendo 1
            suíte. &nbsp;
          </Text>
          <Text
            display={["none", "none", "none", "none", "flex"]}
            color='white'
            animation={moveTextDownAnimation}
          >
            Possui sacada com churrasqueira a carvão com bancada de granito, 1
            vaga de garagem, salão de festas, dois elevadores, guarita,
            segurança e serviço de TV.
          </Text>
        </Stack>
      </Box>
    </>
  );
}

export default MainSection;
