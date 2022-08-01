import Image from 'next/image'
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import whiteLogo from '../../../public/whiteLogo.svg'
import Switch from 'react-switch'

import { useRouter } from 'next/router'

import { Container, NavigationMenu } from './styles'

interface Props {
    toggleTheme(): void;
  }
  

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const { locale } = useRouter();

    return (
        <Container>
            <Link href="/"><Image src={whiteLogo} alt="JPasini"/></Link>
            <NavigationMenu>
                <Link href="/"><a><li>.</li></a></Link>
                <Link href="/"><a><li>.</li></a></Link>
                <Link href="/"><a><li>.</li></a></Link>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={colors.primaryLight}
                    onColor={colors.primary}
                />
            </NavigationMenu>
        </Container>
    );
}

export default Header;