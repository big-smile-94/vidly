const Like = ({ onLikeToggle, liked }) => {
  return (
    <i
      // style={{ cursor: 'pointer' }}
      className={`fa fa-heart${liked ? '' : '-o'}`}
      onClick={onLikeToggle}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
