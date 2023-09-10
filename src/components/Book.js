import './styles/Book.css'

function Book(){
    return (
      <div className="container">
        <div className="container-book">
          <div className="wrap-book">
            <form className="form-book">
              <span className="book-form-title">Gerar Livro</span>
              <div className="container-book-form-btn">

                <div className="wrap-input">
                <input type="text" className="book-form-input book-input" />
                <span className="book-form-title-input" data-placeholder='Nome do Livro'></span>
                </div>
                
                <div className="wrap-input">
                  <input type="text" className="book-form-input book-input" />
                  <span className="book-form-title-input" data-placeholder='Editora'></span>
                </div>

                <div className="wrap-input">
                  <input type="text" className="book-form-input book-input" />
                  <span className="book-form-title-input" data-placeholder='Ano de Publicação'></span>
                </div>

                <div className="wrap-input">
                  <input type="text" className="book-form-input book-input" />
                  <span className="book-form-title-input" data-placeholder='Autor'></span>
                </div>

                <div className="container-cadastrar-login-form-btn">
                <button className="book-form-btn"  type="button">Cadastrar Livro</button>
                </div>    
                 
              </div>
            </form>
          </div>      
        </div>
      </div>
    );
}

export default Book;