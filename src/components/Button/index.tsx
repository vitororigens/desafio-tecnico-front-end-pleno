import { Container, IconMenu, IconPlay, Text } from "./style";

type ButtonProps = {
    text?: string;
    showIconPlay?: boolean;
    showIconMenu?: boolean;
    onClick?: () => void;
}

export function Button({ text, showIconPlay, showIconMenu, onClick }: ButtonProps) {
    return (
        <Container onClick={onClick}>
            <Text>{text}</Text>
            {showIconPlay &&
                <IconPlay />
            }
            {showIconMenu &&
                <IconMenu />
            }
        </Container>
    );
}
