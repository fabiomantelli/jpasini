import Image from 'next/image'
import Link from 'next/link';

import WhiteLogo from '../../../public/WhiteLogo.svg'

import { Container, NavigationMenu } from './styles'

const Header: React.FC = () => {

    return (
        <h1>Header</h1>
        // <Container>
        //     <Link href="/"><Image src={WhiteLogo} alt="JPasini"/></Link>
        //     <NavigationMenu>
        //         <Link href="/"><a><li>.Projects</li></a></Link>
        //         <Link href="/"><a><li>.Sales</li></a></Link>
        //         <Link href="/"><a><li>.Future</li></a></Link>
        //     </NavigationMenu>
        // </Container>
    );
}

export default Header;