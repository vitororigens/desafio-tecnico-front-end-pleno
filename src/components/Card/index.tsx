import { Button } from "../Button";
import { Container, ContainerIcon, IconStar, SubTitle, Title } from "./style";

type CardProps = {
    title?: string;
    background?: string;
}

export function Card({ title, background }: CardProps) {
    return (
        <Container style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' 
          }}>
                <ContainerIcon>
                    <IconStar />
                </ContainerIcon>
            <div>
                <Title>
                    {title}
                </Title>
                <Button text="Assistir ao trailer" showIconPlay />
            </div>
        </Container>
    )
}