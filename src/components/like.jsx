import React, { Component } from 'react';

class Like extends Component {
  render() {
    const { onLike, movie } = this.props;
    return (
      <i
        className={`fa fa-heart${movie.liked ? '' : '-o'}`}
        onClick={() => onLike(movie)}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
