import { Button } from "../Button";
import { Container, ContainerIcon, IconStar, SubTitle, Title } from "./style";

type CardProps = {
    note?: string;
    title?: string;
}

export function Card({ note, title }: CardProps) {
    return (
        <Container>
            <div className="flex flex-row">
                <ContainerIcon>
                    <IconStar />
                    <SubTitle>
                        {note}
                    </SubTitle>
                </ContainerIcon>
                <ContainerIcon>
                    <IconStar />
                </ContainerIcon>
            </div>
            <div>
                <Title>
                    {title}
                </Title>
                <Button text="Assistir ao trailer" showIcon />
            </div>
        </Container>
    )
}