import { Divider, Flex, keyframes, Text } from "@chakra-ui/react";

const moveTextUp = keyframes`
  0%  {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
  }
`;
const moveTextDown = keyframes`
  0%, 50%  {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const motionLineToRight = keyframes`
  0%, 50% { width: 0%; }
  100% { width: calc(100vw - 280px); }
`;
const motionCircleToRight = keyframes`
  0%, 50% { left: -20%; }
  100% { left: 3%; }
`;

const motionToLeft = keyframes`
  0%, 50% { width: 0%; }
  100% { width: 280px; }
`

interface EnterpriseProps {
  textColor: string;
  count: number;
  name: string;
  mainDescription: string;
  secondaryDescription: string;
}

function EmilioText({ textColor, count, name, mainDescription, secondaryDescription }: EnterpriseProps) {
  const moveTextUpAnimation = `${moveTextUp} 1s ease-in-out`;
  const moveTextDownAnimation = `${moveTextDown} 1.5s ease-in-out`;
  const motionLineToRightAnimation = `${motionLineToRight} 1.5s linear forwards`;
  const motionCircleToRightAnimation = `${motionCircleToRight} 1.5s linear forwards`;
  const motionToLeftAnimation = `${motionToLeft} 1.5s linear backwards`;

  return (
    <>
      <Divider
        key={count}
        position="fixed"
        display={["none", "none", "none", "none", "flex"]}
        left="0"
        top={{ xl: "275px", lg: "248px" }}
        borderColor="rgba(179,179,179,1)"
        animation={motionLineToRightAnimation}
      />
      <Divider
        key={count + `rightLine`}
        position='fixed'
        display={["none", "none", "none", "none", "flex"]}
        top={{ xl: "267px", lg: "240px" }}
        width='280px'
        right='0'
        height="0px"
        animation={motionToLeftAnimation}
        borderColor="rgba(179,179,179,1)"
      />
      <Flex
        key={count + `circle`}
        position="fixed"
        display={["none", "none", "none", "none", "flex"]}
        width="213px"
        height="213px"
        top={{ xl: "160px", lg: "130px" }}
        border="1px solid rgba(179,179,179,0.3)"
        borderRadius="50%"
        animation={motionCircleToRightAnimation}
      />
      <Text
        key={name}
        fontSize={{
          xl: "8xl",
          lg: "7xl",
          md: "6xl",
          sm: "5xl",
          base: "3xl",
        }}
        color={textColor == 'white' ? 'white' : 'black'}
        fontStyle="body"
        textAlign={{ md: "initial", base: "center" }}
        textShadow="1px 3px 5px #424141"
        animation={moveTextUpAnimation}
      >
        {name}
      </Text>
      <Text
        key={mainDescription}
        fontSize={{ xl: "lg", lg: "md", md: "sm", sm: "xs", base: "as" }}
        color={textColor == 'white' ? 'white' : 'black'}
        maxW={{ md: "80%" }}
        textAlign={{ md: "initial", base: "center" }}
        textShadow="1px 3px 5px #424141"
        animation={moveTextDownAnimation}
      >
        {mainDescription}
        &nbsp;
      </Text>
      <Text
        key={secondaryDescription}
        display={["none", "none", "none", "none", "flex"]}
        maxW={{ md: "80%" }}
        color={textColor == 'white' ? 'white' : 'black'}
        textShadow="1px 3px 5px #424141"
        animation={moveTextDownAnimation}
        fontSize={{ xl: "lg", lg: "md", md: "sm", sm: "xs", base: "as" }}
      >
        {secondaryDescription}
        {/* Possui sacada com churrasqueira a carvão com bancada de granito, 1
        vaga de garagem, salão de festas, dois elevadores, guarita,
        segurança e serviço de TV. */}
      </Text>
    </>
  );
}

export default EmilioText;
