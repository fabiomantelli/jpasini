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
      imageLogo: ImageProps;
      mainTitle: string;
      mainSubTitle: string;
      path: string;
      logoColor: string;
      textColor: string;
      colorMenu: string;
      images: [
        {
          id: number;
          url: string;
          alt: string;
        }
      ];
    }
  ];
}

interface ImageProps {
  url: string;
  alt: string;
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
      <Box 
        margin="0 auto" 
        backgroundColor="#D9D9D9" 
        paddingBottom={10}
      >
        <Header 
          logoColor="green" 
          colorMenu={enterprise[0].colorMenu}
        />
        <Menu logoColor="green" />
        <HeaderEnterprise
          date={Number(enterprise[0].date)}
          enterpriseName={enterprise[0].name}
          typeOfEnterprise={enterprise[0].typeOfEnterprise}
          location={enterprise[0].location}
          floors={enterprise[0].floors}
          status={enterprise[0].status}
          imageLogo={enterprise[0].imageLogo}
          mainTitle={enterprise[0].mainTitle}
          mainSubTitle={enterprise[0].mainSubTitle}
        />
      </Box>

      <SectionOne
        imagePathOne={"../assets/antonioemilio/antonio-party-room-1.webp"}
        imageNameOne={"Antônio Emílio"}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <SectionTwo
        imageOne={enterprise[0].images.find((image) => image.id == 1)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 2)!}
        imageThree={enterprise[0].images.find((image) => image.id == 3)!}
        side={0}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <SectionThree
        imageOne={enterprise[0].images.find((image) => image.id == 4)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 5)!}
        imageThree={enterprise[0].images.find((image) => image.id == 6)!}
      />

      <SectionFour
        imageOne={enterprise[0].images.find((image) => image.id == 7)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 8)!}
        imageThree={enterprise[0].images.find((image) => image.id == 9)!}
        imageLogo={enterprise[0].imageLogo} 
        side={0}
      />

      <SectionTwo
        imageOne={enterprise[0].images.find((image) => image.id == 10)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 11)!}
        imageThree={enterprise[0].images.find((image) => image.id == 12)!}
        side={1}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <SectionFour
        imageOne={enterprise[0].images.find((image) => image.id == 13)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 14)!}
        imageThree={enterprise[0].images.find((image) => image.id == 15)!}
        imageLogo={enterprise[0].imageLogo}
        side={1}
      />

      <SectionTwo
        imageOne={enterprise[0].images.find((image) => image.id == 16)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 17)!}
        imageThree={enterprise[0].images.find((image) => image.id == 18)!}
        side={0}
        textDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <SectionFour
        imageOne={enterprise[0].images.find((image) => image.id == 19)!}
        imageTwo={enterprise[0].images.find((image) => image.id == 20)!}
        imageThree={enterprise[0].images.find((image) => image.id == 21)!}
        imageLogo={enterprise[0].imageLogo}
        side={0}
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
