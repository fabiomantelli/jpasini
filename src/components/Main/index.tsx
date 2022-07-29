import { Container, TextContainer } from './styles'

const Main: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <h1>Antônio Emílio</h1>
                <div id="circle"></div>
                <hr id="left-line"></hr>
                <hr id="right-line"></hr>
                <p>
                    Projeto com 46 Unidades, todos os apartamentos de 2 quartos,
                    sendo 1 suíte. Possui sacada com churrasqueira a carvão com 
                    bancada de granito, 1 vaga de garagem, salão de festas, dois
                    elevadores, guarita, segurança e serviço de TV. 
                </p>
            </TextContainer>

        </Container>
    );
}

export default Main;