import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

const columns = [
  { label: 'Title', path: 'title' },
  { label: 'Genre', path: 'genre.name' },
  { label: 'Stock', path: 'numberInStock' },
  { label: 'Rate', path: 'dailyRentalRate' },
  {},
  {},
];

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
