"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Search } from "../Search";
import { BannerSearch, Container, MenuMobile, Title } from "./style";
import { useSearchMovies } from "@/hooks/useSearchMovies";
import { Card } from "../Card";
import { Filter } from "../Filter";

export function Header() {
    const [showBannerSearch, setShowBannerSearch] = useState(false);
    const [query, setQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { fetchMoviesSearch, movies } = useSearchMovies();

    useEffect(() => {
        if (query) {
            fetchMoviesSearch(query);
            setShowBannerSearch(true);
        } else {
            setShowBannerSearch(false);
        }
    }, [query, fetchMoviesSearch]);

    return (
        <Container>
            <Title>Rater</Title>
            <div className="hidden md:flex">
                <Search
                    value={query}
                    onChange={setQuery}
                    onSearch={() => setQuery(query)}
                />
                <Filter />
            </div>
            <div className="hidden md:flex">
                <Button text="Login" />
            </div>
            <div className="md:hidden">
                <Button showIconMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
            {isMobileMenuOpen && (
                <MenuMobile>
                    <div className="flex mb-4">
                    <Search
                        value={query}
                        onChange={setQuery}
                        onSearch={() => setQuery(query)}
                    />
                    <Filter />
                    </div>
                    <Button text="Login" />
                </MenuMobile>
            )}
            {showBannerSearch && (
                <BannerSearch>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Card
                                key={movie.imdbID}
                                background={movie.Poster}
                                title={movie.Title}
                            />
                        ))
                    ) : (
                        <p>Nenhum filme encontrado</p>
                    )}
                </BannerSearch>
            )}
        </Container>
    );
}
