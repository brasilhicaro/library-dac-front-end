import React, { Component, useRef } from 'react';
import axios from 'axios';
import { Messages } from 'primereact/messages';
import BookTable from './../../components/BookTable';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

    this.messagesRef = useRef(null);
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:8080/book/books');
      const books = response.data.map((book) => ({
        id: book.id,
        title: book.title,
        year: book.year,
        publisher: book.publisher,
        author: book.author,
      }));
      this.setState({ books });
    } catch (error) {
      console.log(error);
    }
  }

  edit = (bookId) => {
    window.location.href = `/editBook/:${bookId}`;
  };

  deleteBook = async (book) => {
    try {
      await axios.delete(`http://localhost:8080/book/${book.id}`);
      this.setState({
        books: this.state.books.filter((b) => b.id !== book.id),
      });
      this.showNotification('success', 'Livro deletado com sucesso!');
    } catch (error) {
      console.error(error);
      this.showNotification('error', 'Erro ao deletar o livro. Por favor, tente novamente mais tarde.');
    }
  };

  showNotification = (severity, summary) => {
    this.messagesRef.current.show({
      severity: severity,
      summary: summary
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container-book">
          <div className="wrap-book">
            <form className="form-book">
              <span className="book-form-title">Gerar Livro</span>
              <div className="container-book-form-btn">
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-lg btn-primary"
                    onClick={() => window.location.href = "/createBook"}
                    type="button"
                  >
                    Criar Livro
                  </button>
                  <button
                    className="btn btn-lg btn-primary"
                    type="button"
                    onClick={() => window.location.href = "/"}
                  >
                    Voltar
                  </button>
                </div>
              </div>
              <BookTable books={this.state.books} deleteBook={this.deleteBook} edit={this.edit} />
            </form>
          </div>
        </div>
        {/* Componente Messages do PrimeReact para exibir notificações */}
        <Messages ref={this.messagesRef} />
      </div>
    );
  }
}

export default Book;
