// import _ from 'lodash';
// return _(items).slice(startIndex).take(pageSize).value();

// we can use the above in the below function to get the same result form lodash
const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;

  return items.slice(startIndex, endIndex);
};

export default paginate;
