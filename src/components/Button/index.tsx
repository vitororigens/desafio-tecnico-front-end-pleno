import { Container, Text } from "./style";

type ButtonProps ={
    text: string;
}

export function Button({text}: ButtonProps) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    );
}
