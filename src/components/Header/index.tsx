import Image from 'next/image'
import Link from 'next/link';
import whiteLogo from '../../../public/whiteLogo.svg'
import { Container, NavigationMenu } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <Link href="/"><Image src={whiteLogo} alt="JPasini"/></Link>
            <NavigationMenu>
                <Link href="/"><a><li>.Projetos</li></a></Link>
                <Link href="/"><a><li>.Vendas</li></a></Link>
                <Link href="/"><a><li>.Futuro</li></a></Link>
            </NavigationMenu>
        </Container>
    );
}

export default Header;