"use client";

import { useEffect, useState } from 'react';
import { Banner } from '../Banner';
import { Card } from '../Card';
import { Container, Content, Divider, Title } from './style';
import { useMovieStore } from '@/hooks/useMovieStore';
import { useMoviePropts } from '@/hooks/useMoviePropts';

export function Section() {
  const { highestRatedMovie, fetchMovies, movies } = useMovieStore();
  const { fetchMovie, movie } = useMoviePropts();
  const [dataMovies, setDataMovies] = useState<string | null>(null);
  const currentYear = new Date().getFullYear().toString();

  useEffect(() => {
    fetchMovies({ year: currentYear, type: 'movie' });
  }, [currentYear, fetchMovies]);

  useEffect(() => {
    if (highestRatedMovie?.imdbID) {
      setDataMovies(highestRatedMovie.imdbID);
    }
  }, [highestRatedMovie]);

  useEffect(() => {
    if (dataMovies) {
      fetchMovie({ moviePropts: dataMovies });
    }
  }, [dataMovies, fetchMovie]);

  return (
    <Container>
      {movie.length > 0 ? (
        <Banner
          key={movie[0].imdbID}
          title={movie[0].Title}
          note={movie[0].imdbRating}
          year={movie[0].Year}
          description={movie[0].Plot}
          category={movie[0].Genre}
          background={movie[0].Poster}
        />
      ) : (
        <Banner
          title="Carregando..."
          year="Carregando..."
        />
      )}
      <Content>
        <div className="flex flex-row ">
          <Divider />
          <Title>Destaques também</Title>
        </div>
        {movies.slice(1, 4).map((movie) => (
          <Card
            key={movie.imdbID}
            title={movie.Title}
            background={movie.Poster}
          />
        ))}
      </Content>
    </Container>
  );
}
