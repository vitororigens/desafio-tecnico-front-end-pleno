import { Container, SearchInput, ContainerIcon, Icon } from "./style";

type SearchProps = {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

export function Search({ value, onChange, onSearch }: SearchProps) {
    return (
        <Container>
            <SearchInput
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Pesquisar..."
            />
            <ContainerIcon onClick={onSearch}>
                <Icon />
            </ContainerIcon>
        </Container>
    );
}
