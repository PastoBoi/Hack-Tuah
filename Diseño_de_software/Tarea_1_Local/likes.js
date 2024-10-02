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
        <ul class="d-flex justify-content-end">
        <button onClick={handleClick} id="boton1" class="mt-1 btn btn-outline-light" type="button">
          Likes {likes}
        </button>
        <button onClick={handleClick2} id="boton2" class="mt-1 btn btn-outline-light" type="button">
          Dislikes {dislikes}
        </button>
        </ul>
      </div>
    );
  }
  // Renderiza el componente HomePage en el contenedor root
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);