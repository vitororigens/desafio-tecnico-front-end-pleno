import { Button } from "../Button";
import { Container, Content, Icon, Note, SubTitle, Title } from "./style";

export function Banner() {
    return (
        <Container>
            <Title>Deadpool e Wolverine</Title>
            <Content>
                <Icon />
                <Note>
                    8.2
                </Note>
                <SubTitle>120 mil 2h8m </SubTitle>
            </Content>
            <Content>
                <SubTitle>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </SubTitle>
            </Content>
            <Button text="Assistir ao trailer" showIcon />
        </Container>
    )
}