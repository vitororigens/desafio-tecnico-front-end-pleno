import { Banner } from "../Banner";
import { Card } from "../Card";
import { Container, Content, Divider, Title } from "./style";

export function Section() {
    return (
        <Container>
            <Banner />

            <Content>
                <div className="flex flex-row">
                    <Divider />
                    <Title>
                        Destaques também
                    </Title>
                </div>
                <Card />
            </Content>
        </Container>
    )
}