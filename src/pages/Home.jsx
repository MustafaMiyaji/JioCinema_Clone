import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/tags/Tags";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [japaneseMovies, setJapaneseMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieResponse = await fetch("http://localhost:3000/movies");
        const moviesData = await movieResponse.json();
        setMovies(moviesData);

        // Filter movies as needed
        const featMovies = moviesData.filter(
          (movie) => movie.featured === true
        );
        setFeaturedMovies(featMovies.slice(0, 4));

        const draMovies = moviesData.filter((movie) =>
          movie.genre.includes("Drama")
        );
        setDramaMovies(draMovies.slice(0, 6));

        const hinMovies = moviesData.filter(
          (movie) => movie.language === "Hindi"
        );
        setHindiMovies(hinMovies.slice(0, 6));

        const topRatedMovies = moviesData.filter((movie) => movie.imdb >= 8.5);
        setTopMovies(topRatedMovies.slice(0, 6));

        const japanMovies = moviesData.filter(
          (movie) => movie.country === "Japan"
        );
        setJapaneseMovies(japanMovies.slice(0, 6));
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Carousel images={movies.map((movie) => movie.imageUrl)} />
      <Channels />
      <Featured movies={featuredMovies} />

      <Shows title="Drama Movies" movies={dramaMovies} />
      <Shows title="Hindi Language Movies" movies={hindiMovies} />
      <Shows title="Highly Rated Movies" movies={topMovies} />
      <Shows title="Japanese Movies" movies={japaneseMovies} />
    </>
  );
}
