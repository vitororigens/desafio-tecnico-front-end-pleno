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
            <Title>{title}Deadpool e Wolverine</Title>
            <Content>
                <IconStar/>
                <Text>
                    {note}8.2
                </Text>
                <SubTitle>{hour}{category}{year}120 mil 2h8m </SubTitle>
            </Content>
            <Content>
                <SubTitle>
                   {description} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </SubTitle>
            </Content>
            <Button text="Assistir ao trailer" showIcon />
        </Container>
    )
}