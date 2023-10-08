import React, { Component } from 'react';
import axios from 'axios';
import { Messages } from 'primereact/messages';
import BookTable from './../../components/BookTable';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.messagesRef = React.createRef(null);
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
      this.showNotification(
        'error',
        'Erro ao carregar os livros. Por favor, tente novamente mais tarde.'
      );
    }
  }

  edit = (bookId) => {
    const confirmed = window.confirm(`Deseja editar a reserva: "${bookId}"?`);
  
    if (!confirmed) {
      return;
    }
  
    window.location.href = `/editBook/:${bookId}`;
  };
  deleteBook = async (book) => {
    const confirmed = window.confirm(`Deseja excluir o livro: "${book.title}"?`);
  
    if (!confirmed) {
      return;
    }
  
    try {
      await axios.delete(`http://localhost:8080/book/${book.id}`);
      const updatedBooks = this.state.books.filter((b) => b.id !== book.id);
      this.setState({ books: updatedBooks }, () => {
        this.showNotification('success', 'Livro deletado com sucesso!');
    });
  } catch (error) {
      console.error(error);
      this.showNotification(
        'error',
        'Erro ao deletar o livro. Por favor, tente novamente mais tarde.'
      );
    }
  };

  showNotification = (severity, summary) => {
    this.messagesRef.current.show({
      severity: severity,
      summary: summary,
    });
  };

  render() {
    return (
      <div className="container">
        <Messages ref={this.messagesRef} />
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
            </form>
          </div>
        </div>
        <BookTable books={this.state.books} deleteBook={this.deleteBook} edit={this.edit} />
      </div>
    );
  }
}

export default Book;
