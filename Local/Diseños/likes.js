// app.js
function HomePage() {
  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);  
  
  const handleClick = () => {
    setLiked(!liked); // Toggle liked state between true and false
    if (disliked) setDisliked(false); // Ensure dislike is removed if like is clicked
  };

  const handleClick2 = () => {
    setDisliked(!disliked); // Toggle disliked state between true and false
    if (liked) setLiked(false); // Ensure like is removed if dislike is clicked
  };

  return (
    <div>
      <ul className="d-flex">
        <button onClick={handleClick} type="button" className="btn rounded-3" id="button2">
          Likes {liked ? 1 : 0}
        </button>
        <button onClick={handleClick2} type="button" className="ms-3 btn rounded-3" id="button1">
          Dislikes {disliked ? 1 : 0}
        </button>
      </ul>
    </div>
  );
}

// Render the component in the root container
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);
