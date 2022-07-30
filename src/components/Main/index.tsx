import { Container, GreenItem, MenuBottom, TextContainer } from './styles'

const Main: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <h1>Antônio Emílio</h1>
                <div id="circle"></div>
                <hr id="left-line"></hr>
               
                <p>
                    Projeto com 46 Unidades, todos os apartamentos de 2 quartos,
                    sendo 1 suíte. Possui sacada com churrasqueira a carvão com 
                    bancada de granito, 1 vaga de garagem, salão de festas, dois
                    elevadores, guarita, segurança e serviço de TV. 
                </p>
            </TextContainer>

            <GreenItem>
                <div>
                <h1>PRÓXIMO</h1>
                    <h2>Nossa Senhora</h2>
                </div>
                <div id="arrow-flex">
                    <div id="arrow-left" />
                    <div id="arrow-right" />
                </div>
            </GreenItem>

            <MenuBottom>
                <ul>
                    <li>.Instagram</li>
                    <li>.WhastApp</li>
                    <li>.Facebook</li>
                    <li>PT</li>
                </ul>
            </MenuBottom>

        </Container>
    );
}

export default Main;