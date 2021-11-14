import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import Like from './common/like';
import paginate from '../utils/paginate';
import ListGroup from './common/listGroup';

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [
      {
        _id: '5b21ca3eeb7f6fbccd471812',
        name: 'All Genres',
      },
      ...getGenres(),
    ],
    pageSize: 4,
    currentPage: 1,
    currentGenre: 'All Genres',
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGroupChange = (group) => {
    this.setState({
      currentGenre: group.name,
    });
  };

  render() {
    const {
      pageSize,
      currentPage,
      currentGenre,
      genres,
      movies: allMovies,
    } = this.state;

    const moviesByGenre =
      currentGenre === 'All Genres'
        ? allMovies
        : allMovies.filter((m) => m.genre.name === currentGenre);

    const count = moviesByGenre.length;

    if (!count) return <p>There are no movies in the database.</p>;

    const movies = paginate(moviesByGenre, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            currentGroup={currentGenre}
            onGroupChange={this.handleGroupChange}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onLikeToggle={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
