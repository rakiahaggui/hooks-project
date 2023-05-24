import React from 'react';
import { Link, useParams } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    image: 'https://example.com/movie1.jpg',
    description: 'Description of Movie 1',
    trailerLink: 'https://www.youtube.com/embed/trailer1'
  },
  // Add more movie objects
];

function Description() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === Number(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/MoviesDs">Back to MoviesDs</Link>
    </div>
  );
}

export default Description;