"use client";
import { Search } from "../Search";
import { Container, Title } from "./style";

export function Header() {
    return (
        <Container>
            <Title>Rater</Title>
            <Search/>
        </Container>
    );
}
