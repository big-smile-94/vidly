import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import paginate from '../utils/paginate';
import ListGroup from './common/listGroup';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {},
  };

  componentDidMount() {
    const genres = [
      {
        _id: '5b21ca3eeb7f6fbccd471810',
        name: 'All Genres',
      },
      ...getGenres(),
    ];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }

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

  handleGenreSelect = (group) => {
    this.setState({
      selectedGenre: group,
      currentPage: 1, // Have to reset currentPage to 1 on genre change because if we are on the 2nd or 3rd page on all genres and then click on action genre or any other we don't see any movies in the list and see there are 3 movies in the db it's because we look at the third page
    });
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      genres,
      movies: allMovies,
    } = this.state;

    const moviesByGenre =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const count = moviesByGenre.length;

    if (!count) return <p>There are no movies in the database.</p>;

    const movies = paginate(moviesByGenre, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
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
