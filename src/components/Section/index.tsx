import { Banner } from "../Banner";
import { Container, Divider, Title } from "./style";

export function Section() {
    return (
        <Container>
            <Banner />
            <Divider/>
            <Title>
                Destaques também
            </Title>
        </Container>
    )
}