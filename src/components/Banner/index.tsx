import { Button } from "../Button";
import { Container, ContainerIconFire, Content, IconFire, IconStar, SubTitle, Text, Title } from "./style";

type BannerProps ={
    title?: string;
    note?: string;
    hour?: string;
    category?: string;
    year?: string;
    description?: string;
}

export function Banner({category, description, hour, note, title, year}: BannerProps) {
    return (
        <Container>
            <ContainerIconFire>
                <IconFire/> 
                <Text>
                    Em destaque
                </Text>
            </ContainerIconFire>
            <Title>{title}</Title>
            <Content>
                <IconStar/>
                <Text>
                    {note}
                </Text>
                <SubTitle>{hour}{category}{year} </SubTitle>
            </Content>
            <Content>
                <SubTitle>
                   {description}
                </SubTitle>
            </Content>
            <Button text="Assistir ao trailer" showIcon />
        </Container>
    )
}