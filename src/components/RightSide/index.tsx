import { Sling } from 'hamburger-react'
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
        </Container>
    )
}

export default RightSide;