import { Box, Button, Stack } from "@chakra-ui/react";
import EmilioText from "../EmilioText";

interface EnterpriseProps {
  textColor: string;
  count: number;
  name: string;
  mainDescription: string;
  secondaryDescription: string;
}

function MainSection({ 
  textColor, 
  count, name, 
  mainDescription, 
  secondaryDescription,
}: EnterpriseProps) {
  return (
    <>
      <Box 
        width="80vw" 
        display="flex" 
        marginRight="auto" 
        marginLeft="auto"
       
      >
        <Stack
          height={["70vh", "70vh", "70vh", "70vh", "auto"]}
          justifyContent={{ md: "initial", base: "center" }}
          padding="50px 5vw"
          width={['100%', '100%', '100%', 'calc(100vw - 280px);']}
          position="relative"
        >
          <EmilioText
            textColor={textColor}
            count={count}
            name={name}
            mainDescription={mainDescription}
            secondaryDescription={secondaryDescription}
          />
        </Stack>
      </Box>
    </>
  );
}

export default MainSection;
