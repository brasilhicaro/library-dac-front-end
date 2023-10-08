import React, { Component } from 'react';
import axios from 'axios';

class UpdateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      bookData: null,
      notification: null,
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split('/').pop().replace(':', '');

    if (id) {
      this.setState({ id }, () => {
        this.loadBookData();
      });
    }
  }

  loadBookData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/book/find/${this.state.id}`);
      const bookData = response.data;

      this.setState({ bookData });
    } catch (error) {
      console.error(error);
    }
  };

  update = async () => {
    const { id, bookData } = this.state;
    
    const confirmed = window.confirm(`Deseja editar o Livro: "${bookData.title}"?`);
  
    if (!confirmed) {
      return;
    }
  

    if (!bookData.title) {
      this.showNotification('error', 'O campo Título é obrigatório.');
      return;
    }
  
    if (!bookData.publisher) {
      this.showNotification('error', 'O campo Editora é obrigatório.');
      return;
    }
  
    const yearAsNumber = parseInt(bookData.year, 10);
    if (isNaN(yearAsNumber) || yearAsNumber <= 0) {
      this.showNotification('error', 'Digite um ano válido.');
      return;
    }
  
    try {
      const response = await axios.put(`http://localhost:8080/book/${this.state.id}`, {
        id,
        title: bookData.title,
        publisher: bookData.publisher,
        year: yearAsNumber, // Convertido para número
        author: bookData.author,
      });
  
      if (response.status === 200) {
        this.showNotification('success', 'Livro atualizado com sucesso!');
        setTimeout(() => {
          window.location.href = '/book';
        }, 1000); 
      } else {
        this.showNotification('error', 'Erro ao atualizar o livro.');
      }
    } catch (error) {
      console.error(error);
      this.showNotification('error', 'Erro ao atualizar o livro.');
    }
  };

  showNotification = (severity, message) => {
    this.setState({
      notification: { severity, message },
    });
  };

  render() {
    const { bookData, notification } = this.state;

    return (
      <div className="container">
        {notification && (
          <div className={`alert alert-${notification.severity}`} role="alert">
            {notification.message}
          </div>
        )}

        <div className="container-book">
          <div className="wrap-book">
            <form className="form-book">
              <span className="book-form-title">Atualizar Livro</span>
              {bookData && (
                <div className="book-details">
                  <div className="form-group">
                    <label htmlFor="title">Título:</label> 
                    <input
                      type="text"
                      id="title"
                      name="title" 
                      value={bookData.title}
                      onChange={(e) =>
                        this.setState({
                          bookData: { ...bookData, title: e.target.value }, 
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="publisher">Editora:</label>
                    <input
                      type="text"
                      id="publisher"
                      name="publisher"
                      value={bookData.publisher}
                      onChange={(e) =>
                        this.setState({
                          bookData: { ...bookData, publisher: e.target.value },
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Ano:</label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={bookData.year}
                      onChange={(e) =>
                        this.setState({
                          bookData: { ...bookData, year: e.target.value },
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Autor:</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={bookData.author}
                      onChange={(e) =>
                        this.setState({
                          bookData: { ...bookData, author: e.target.value },
                        })
                      }
                      className="form-control"
                    />
                  </div>
                </div>
              )}
              <div className="container-book-form-btn">
                <div className="d-grid gap-2">
                  <button
                    onClick={this.update}
                    className="btn btn-lg btn-primary"
                    type="button"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => window.location.href = '/book'}
                    className="btn btn-lg btn-primary"
                    type="button"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBook;
