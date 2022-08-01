import { Sling } from 'hamburger-react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    RiFacebookBoxLine, 
    RiWhatsappLine, 
    RiInstagramLine,
    RiLinkedinLine,
} from 'react-icons/ri'
import { MenuBottom } from './styles';
import { Container, GreenItem, TextContainer } from "./styles";


const RightSide: React.FC = () => {

    return (
        <Container>
            <GreenItem>
                ARQUITETURA & ENGENHARIA CIVIL
                <Sling />
            </GreenItem>
            <TextContainer>
                <p>VEJA TODOS OS PROJETOS</p>
                <hr id="right-line"></hr>
            </TextContainer>
            <MenuBottom>
                <ul>
                    <Link 
                        href="https://www.instagram.com/jpasiniarquiteturaeengenharia/"
                        passHref
                    >
                        <a target="_blank"><li>.<RiInstagramLine size={20}/></li></a>
                    </Link>
                    <Link 
                        href="https://wa.me/5548999517642"
                        passHref
                    >
                        <a target="_blank"><li>.<RiWhatsappLine size={20} /></li></a>
                    </Link>
                    <Link 
                        href="https://www.facebook.com/jpasiniarquiteturaeengenharia/"
                        passHref
                    >
                        <a target="_blank"><li>.<RiFacebookBoxLine size={20} /></li></a>
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/company/jpasini/"
                        passHref
                    >
                        <a target="_blank"><li>.<RiLinkedinLine size={20}/></li></a>
                    </Link>
                    <li>
                        <select
                            // onChange={changeLanguage}
                            // defaultValue={locale}
                        >
                            {/* <option value="en-US">EN</option>
                            <option value="pt-BR">PT</option> */}
                        </select>
                    </li>
                </ul>
            </MenuBottom>
        </Container>
    )
}

export default RightSide;