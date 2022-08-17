import { Box } from "@chakra-ui/react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

interface EnterpriseProps {
  enterprise: [
    {
      name: string;
      date: number;
      location: string;
      floors: string;
      status: string;
      typeOfEnterprise: string;
      mainDescription: string;
      secondaryDescription: string;
      url: string;
      urlLogo: string;
      mainTitle: string;
      mainSubTitle: string;
      path: string;
      logoColor: string;
      textColor: string;
      colorMenu: string;
    }
  ];
}

import { enterprisesData } from "../../data/enterprises";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
import SectionThree from "../../components/SectionThree";
import SectionFour from "../../components/SectionFour";
import HeaderEnterprise from "../../components/HeaderEnterprise";

function Empreendimentos({ enterprise }: EnterpriseProps) {
  return (
    <>
      <Box margin="0 auto" backgroundColor="#D9D9D9" paddingBottom={10}>
        <Header logoColor="green" colorMenu={enterprise[0].colorMenu} />
        <Menu logoColor="green" />
        <HeaderEnterprise 
          date={Number(enterprise[0].date)}
          enterpriseName={enterprise[0].name}
          typeOfEnterprise={enterprise[0].typeOfEnterprise}
          location={enterprise[0].location}
          floors={enterprise[0].floors}
          status={enterprise[0].status}
          urlLogo={enterprise[0].urlLogo}
          mainTitle={enterprise[0].mainTitle}
          mainSubTitle={enterprise[0].mainSubTitle}
        />
      </Box>

      <SectionOne />
      <SectionTwo
        imagePathOne={"../assets/antonioemilio/image1.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image2.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image3.webp"}
        imageNameThree={"Antônio Emílio"}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <SectionThree
        imagePathOne={"../assets/antonioemilio/image4.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image5.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image6.webp"}
        imageNameThree={"Antônio Emílio"}
      />
      <SectionFour
        imagePathOne={"../assets/antonioemilio/image7.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image8.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image9.webp"}
        imageNameThree={"Antônio Emílio"}
        imagePathLogo={"../assets/antonioemilio/antonio-emilio-logo.svg"}
        imageNameLogo={"Antônio Emílio"}
      />

      <SectionTwo
        imagePathOne={"../assets/antonioemilio/image10.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image11.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image12.webp"}
        imageNameThree={"Antônio Emílio"}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <SectionFour
        imagePathOne={"../assets/antonioemilio/image13.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image14.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image15.webp"}
        imageNameThree={"Antônio Emílio"}
        imagePathLogo={"../assets/antonioemilio/antonio-emilio-logo.svg"}
        imageNameLogo={"Antônio Emílio"}
      />

      <SectionTwo
        imagePathOne={"../assets/antonioemilio/image16.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image17.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image18.webp"}
        imageNameThree={"Antônio Emílio"}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <SectionFour
        imagePathOne={"../assets/antonioemilio/image19.webp"}
        imageNameOne={"Antônio Emílio"}
        imagePathTwo={"../assets/antonioemilio/image20.webp"}
        imageNameTwo={"Antônio Emílio"}
        imagePathThree={"../assets/antonioemilio/image21.webp"}
        imageNameThree={"Antônio Emílio"}
        imagePathLogo={"../assets/antonioemilio/antonio-emilio-logo.svg"}
        imageNameLogo={"Antônio Emílio"}
      />
    </>
  );
}

export default Empreendimentos;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "antonio-emilio" } },
      { params: { slug: "residencial-viena" } },
      { params: { slug: "internacional" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const path = params.slug;
  const enterprise = enterprisesData.filter((data) => data.path === path);

  return {
    props: { enterprise },
  };
}
