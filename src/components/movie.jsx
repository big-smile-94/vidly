import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Movie = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/movies', { replace: true });
  };

  return (
    <>
      <h1>Movie Form {params.id}</h1>
      <button className="btn btn-primary btn-small" onClick={handleSave}>
        Save
      </button>
    </>
  );
};

export default Movie;
