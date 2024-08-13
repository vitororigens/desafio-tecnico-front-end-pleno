import { useMoviesStore } from "@/hooks/useMoviesStore";
import { Banner } from "../Banner";
import { Card } from "../Card";
import { Container, Content, Divider, Title } from "./style";

export function Section() {
    const movies = useMoviesStore((state) => state.movies);
    return (
        <Container>
            {movies.map((movie) => (
                <Banner key={movie.imdbID} title={movie.Title} />
            ))}
            <Content>
                <div className="flex flex-row">
                    <Divider />
                    <Title>
                        Destaques também
                    </Title>
                </div>
                <Card />
            </Content>
        </Container>
    )
}