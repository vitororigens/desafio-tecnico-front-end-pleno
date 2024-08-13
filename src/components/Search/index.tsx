import { Container, SearchInput, ContainerIcon, Icon } from "./style";

export function Search() {
    return (
        <Container>
            <ContainerIcon>
                <Icon />
            </ContainerIcon>
            <SearchInput placeholder="Pesquisar..." />
        </Container>
    );
}
