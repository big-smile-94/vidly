const Like = ({ onClick, liked }) => {
  return (
    <i
      // style={{ cursor: 'pointer' }}
      className={`fa fa-heart${liked ? '' : '-o'}`}
      onClick={onClick}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
