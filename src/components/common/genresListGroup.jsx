import React from 'react';
import { genres } from '../../services/fakeGenreService';

const GenresListGroup = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>
      {genres.map((genre) => (
        <li key={genre._id} className="list-group-item">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenresListGroup;
