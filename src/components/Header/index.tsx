"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Search } from "../Search";
import { BannerSearch, Container, Title } from "./style";
import { useSearchMovies } from "@/hooks/useSearchMovies";
import { Card } from "../Card";

export function Header() {
    const [showBannerSearch, setShowBannerSearch] = useState(false);
    const [query, setQuery] = useState('');
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
            <Search
                value={query}
                onChange={setQuery}
                onSearch={() => setQuery(query)} 
            />
            <Button text="Login" />
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
