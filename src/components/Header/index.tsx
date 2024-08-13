"use client";
import { Button } from "../Button";
import { Search } from "../Search";
import { Container, Title } from "./style";

export function Header() {
    return (
        <Container>
            <Title>Rater</Title>
            <Search/>
            <Button text="Login"/>
        </Container>
    );
}
