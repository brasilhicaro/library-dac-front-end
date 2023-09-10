
import './styles.css'

function App() {
  return (
    <div className="container">
      <div className="container-menu">
        <div className="wrap-menu">
          <form className="form-menu">
            <span className="menu-form-title">Bem vindo!</span>
            <span className="menu-form-subtitle">Selecione a opção que deseja</span>
            <div className="container-menu-form-btn">
              <button className="menu-form-btn" type="button">Cadastrar Livro</button>
              <button className="menu-form-btn" type="button">Cadastrar Reserva</button>
            </div>
          </form>
        </div>      
      </div>
    </div>
  );
}

export default App;
