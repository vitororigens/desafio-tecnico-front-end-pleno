import { Container, Icon, Text } from "./style";

type ButtonProps = {
    text: string;
    showIcon?: boolean;
}

export function Button({ text, showIcon }: ButtonProps) {
    return (
        <Container>
            <Text>{text}</Text>
            {showIcon &&
                <Icon />
            }
        </Container>
    );
}
