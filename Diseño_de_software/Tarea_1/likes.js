// app.js
  function HomePage() {
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    
    const handleClick = () => {
      setLikes(likes + 1);
    };
    const handleClick2 = () => {
      setDislikes(dislikes + 1);
    };
  
    return (
      <div>
        <ul class="d-flex">
        <button onClick={handleClick} type="button" class="btn rounded-3" id="button2">
          Likes {likes}
        </button>
        <button onClick={handleClick2} type="button" class="ms-3 btn rounded-3" id="button1">
          Dislikes {dislikes}
        </button>
        </ul>
      </div>
    );
  }
  // Renderiza el componente HomePage en el contenedor root
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);