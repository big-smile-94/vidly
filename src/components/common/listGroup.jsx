import React from 'react';

const ListGroup = ({ items, onGroupChange }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          className="list-group-item"
          onClick={() => onGroupChange(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
