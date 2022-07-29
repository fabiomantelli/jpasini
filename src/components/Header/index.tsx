import Image from 'next/image'
import whiteLogo from '../../../public/whiteLogo.svg'
import { Container, NavigationMenu } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <Image src={whiteLogo} alt="JPasini"/>
            <NavigationMenu>
                <li>.Projetos</li>
                <li>.Vendas</li>
                <li>.Futuro</li>
            </NavigationMenu>
        </Container>
    );
}

export default Header;