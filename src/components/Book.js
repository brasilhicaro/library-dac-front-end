import './styles/styles.css'
import '../App.css'
import { useState } from 'react';

const Book = ({ onBookSubmit }) => {

  const[bookName, setBook] = useState('');
  const[publisher, setPublisher] = useState('');
  const[year, setYear] = useState('');
  const[author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookData= {
      bookName,
      publisher,
      year,
      author
  };
    onBookSubmit(bookData);
    setBook('');
    setPublisher('');
    setYear('');
    setAuthor('');
  };

    return (
      <div className="container">
        <div className="container-book">
          <div className="wrap-book">
            <form className="form-book" onSubmit={handleSubmit}>
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
                <button className="book-form-btn"  type="submit">Cadastrar Livro</button>
                </div>    
                 
              </div>
            </form>
          </div>      
        </div>
      </div>
    );
  };

    const BookContainer = () => {
      const onBookSubmit = async (bookData) => {
        try{
          const response = await fetch('http://localhost:8080/book', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
          });
          if (response.ok) {
            console.log('Livro cadastrado com sucesso!');
          }else{
            console.log('Erro ao cadastrar livro!');
          }
        }catch(error){
          console.log(error);
        }
      };
      return <Book onBookSubmit={onBookSubmit} />;
    };


export default BookContainer;