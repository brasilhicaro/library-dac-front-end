import React, { Component } from 'react';
import axios from 'axios';

class UpdateReserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      reserveData: null,
      notification: null,
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split('/').pop().replace(':', '');

    if (id) {
      this.setState({ id }, () => {
        this.loadReserveData();
      });
    }
  }

  loadReserveData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/reserve/${this.state.id}`);
      const reserveData = response.data;

      this.setState({ reserveData });
    } catch (error) {
      console.error(error);
    }
  }
  
    update = async () => {
      const { id, reserveData } = this.state;
  
      const confirmed = window.confirm(`Deseja editar a reserva: "${reserveData.responsible}"?`);
    
      if (!confirmed) {
        return;
      }
  
      if (!reserveData.responsible) {
        this.showNotification('error', 'O campo Responsável é obrigatório.');
        return;
      }
      if (!reserveData.loan) {
        this.showNotification('error', 'O campo Pegou é obrigatório.');
        return;
      }
      if (!reserveData.devolution) {
        this.showNotification('error', 'O campo Devolverá é obrigatório.');
        return;
      }
      if (!reserveData.bookID) {
        this.showNotification('error', 'O campo Código do Livro é obrigatório.');
        return;
      }
    try{

      const response = await axios.put(`http://localhost:8080/reserve/${id}`, {
        id,
        responsible: reserveData.responsible,
        loan: reserveData.loan,
        devolution: reserveData.devolution,
        bookID: reserveData.bookID,
      });
        if (response.status === 200) {
          this.showNotification('success', 'Reserva atualizada com sucesso!');
          setTimeout(() => {
          window.location.href = '/reserve';
          }, 1000);
        }else {
          this.showNotification('error', 'Erro ao atualizar reserva');
        }
      } catch(error) {
        this.showNotification('error', 'Erro ao atualizar reserva');
        console.error(error);
      }
  };

  showNotification = (severity, message) => {
    this.setState({
      notification: { severity, message },
    });
  };

  formatDate = (dateInMilliseconds) => {
    const date = new Date(dateInMilliseconds);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  render() {
    const {reserveData, notification} = this.state;
    
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
              <span className="book-form-title">Atualizar Reserva</span>
              {reserveData && (
                <div className="book-details">
                  <div className="form-group">
                    <label htmlFor="title">Responsável:</label> 
                    <input
                      type="text"
                      id="title"
                      name="title" 
                      value={reserveData.responsible}
                      onChange={(e) =>
                        this.setState({
                          reserveData: { ...reserveData, responsible: e.target.value }, 
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="publisher">Pegou:</label>
                    <input
                      type="date"
                      id="publisher"
                      name="publisher"
                      value={this.formatDate(reserveData.loan)}
                      onChange={(e) =>
                        this.setState({
                          reserveData: { ...reserveData, loan: e.target.value },
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Devolverá:</label>
                    <input
                      type="date"
                      id="year"
                      name="year"
                      value={this.formatDate(reserveData.devolution)}
                      onChange={(e) =>
                        this.setState({
                          reserveData: { ...reserveData, devolution: e.target.value },
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Código do Livro:</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={reserveData.bookID}
                      onChange={(e) =>
                        this.setState({
                          reserveData: { ...reserveData, bookID: e.target.value },
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
                    onClick={() => window.location.href = '/reserve'}
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

export default UpdateReserve;
