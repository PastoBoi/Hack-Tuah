// app.js

function Header({ title }) {
    return <h2 class="text-uppercase text-primary text-center p-4">{title}</h2>;
  }
function Famosos({ subtitle }){
    return <h3 class="text-uppercase text-primary text-center p-4">{subtitle}</h3>;
}
  
  function HomePage() {
    const names = ['SpiderMan', 'Batman', 'Superman', 'Ironman', 'Cap. America', 'Thor', 'Deadpool', 'Black Widow', 'Black Widow', 'Ant-Man', 'Groot', 'Loki'];
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
        <Famosos subtitle="Usuarios famosos"/>
        <ul class="p-3 align-content-start fw-semibold justify-content-evenly flex-row navbar-nav mb-2 mb-lg-0">
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <Header title="CALIFICACIONES"/>
        <ul class="d-flex justify-content-end me-5">
        <button onClick={handleClick} class="p-2 mb-4 ms-4 btn btn-outline-primary" type="submit">Likes ({likes})</button>
        <button onClick={handleClick2} class="p-2 mb-4 ms-4 btn btn-outline-primary" type="submit">Dislikes ({dislikes})</button>
        </ul>
      </div>
    );
  }
  
  // Renderiza el componente HomePage en el contenedor root
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);