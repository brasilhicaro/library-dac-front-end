
function Book(){
    return (
      <div className="container">
        <div className="container-book">
          <div className="wrap-book">
            <form className="form-book">
              <span className="book-form-title">Gerar Livro</span>
              <div className="container-book-form-btn">
                <span className="book-form-title-input">Nome do Livro</span>
                <input type="text" className="book-form-input" />
                <span className="book-form-title-input">Ano de Publicação</span>
                <input type="text" className="book-form-input" />
                <span className="book-form-title-input">Editora</span>
                <input type="text" className="book-form-input" />
                <span className="book-form-title-input">Autor</span>
                <input type="text" className="book-form-input" />
                <button className="book-form-btn"  type="button">Cadastrar Livro</button>
              </div>
            </form>
          </div>      
        </div>
      </div>
    );
}

export default Book;