import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenres } from './../services/fakeGenreService';
import { saveMovie, getMovie } from './../services/fakeMovieService';

class MovieForm extends Form {
  state = {
    data: {
      _id: '',
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: '',
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string().allow(null, ''),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label('Number in Stock'),
    dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate'),
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const genres = getGenres();

    if (id === 'new') {
      this.setState({
        genres: [{ _id: '', name: '', selected: true }, ...genres],
      });

      return;
    }

    const movie = getMovie(id);

    if (!movie) {
      this.props.history.push('/not-found');
      return;
    }

    const genre = genres.find((g) => g._id === movie.genre._id);
    const index = genres.indexOf(genre);
    genres[index] = {
      ...genre,
      selected: true,
    };

    this.setState({
      data: {
        _id: movie._id,
        title: movie.title,
        genreId: movie.genre._id,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate,
      },
      genres: genres,
    });
    return;
  }

  doSubmit = () => {
    const { _id, genreId, numberInStock, dailyRentalRate, title } =
      this.state.data;

    const movie = {
      _id: _id,
      title: title,
      genreId: genreId,
      numberInStock: numberInStock,
      dailyRentalRate: dailyRentalRate,
      liked: false,
      publishDate: Date.now(),
    };

    saveMovie(movie);
    this.props.history.push('/movies');
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect()}
          {this.renderInput('numberInStock', 'Number in Stock')}
          {this.renderInput('dailyRentalRate', 'Rate')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MovieForm;
