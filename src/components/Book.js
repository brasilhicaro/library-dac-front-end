import './styles/Book.css'
import '../App.css'
import { useState } from 'react';

function Book(){

  const[bookName, setBook] = useState('');
  const[publisher, setPublisher] = useState('');
  const[year, setYear] = useState('');
  const[author, setAuthor] = useState('');

    return (
      <div className="container">
        <div className="container-book">
          <div className="wrap-book">
            <form className="form-book">
              <span className="book-form-title">Gerar Livro</span>
              <div className="container-book-form-btn">

                <div className="wrap-input">
                <input
                type="text" 
                className={bookName.length > 0 ? "has-value book-form-input book-input" : "book-form-input"}
                value={bookName}
                onChange={(event) => setBook(event.target.value)}
                />
                <span className="book-form-title-input" data-placeholder='Nome do Livro'></span>
                </div>
                
                <div className="wrap-input">
                  <input 
                  type="text" 
                  className={publisher.length > 0 ? "has-value book-form-input book-input" : "book-form-input"}
                  value={publisher}
                  onChange={(event) => setPublisher(event.target.value)}
                  />
                  <span className="book-form-title-input" data-placeholder='Editora'></span>
                </div>

                <div className="wrap-input">
                  <input
                  type="text"
                  className={year.length > 0 ? "has-value book-form-input book-input" : "book-form-input"}
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  />
                  <span className="book-form-title-input" data-placeholder='Ano de Publicação'></span>
                </div>

                <div className="wrap-input">
                  <input 
                  type="text" 
                  className={author.length > 0 ? "has-value book-form-input book-input" : "book-form-input"}
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                  />
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