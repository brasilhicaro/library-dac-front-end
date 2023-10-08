import React, { Component } from 'react';
import axios from 'axios';

class CreateReserve extends Component {
  state = {
    id: 0,
    responsible: '',
    loan: '',
    devolution: '',
    bookID: '',
    notification: null,
  };

  create = () => {
    const { responsible, loan, devolution, bookID } = this.state;
    const confirmed = window.confirm(`Deseja criar a reserva: "${responsible}"?`);
  
    if (!confirmed) {
      return;
    }
  

    if (!responsible || !loan || !devolution || !bookID) {
      this.showNotification('error', 'Preencha todos os campos obrigatórios.');
      return;
    }

    const loanInMilliseconds = new Date(loan).getTime();
    const devolutionInMilliseconds = new Date(devolution).getTime();

    axios
      .post('http://localhost:8080/reserve', {
        id: this.state.id,
        responsible,
        loan: loanInMilliseconds,
        devolution: devolutionInMilliseconds,
        bookID,
      })
      .then((response) => {
        this.showNotification('success', 'Reserva criada com sucesso!');
        console.log(response);
        setTimeout(() => {
          window.location.href = '/reserve';
        }, 1000);
      })
      .catch((error) => {
        this.showNotification('error', 'Erro ao criar reserva!');
        console.log(error);
      });
  };

  cancel = () => {
    window.location.href = '/reserve';
  };

  showNotification = (severity, message) => {
    this.setState({
      notification: { severity, message },
    });
  };

  render() {
    const { notification } = this.state;

    return (
      <div className="container">
        {notification && (
          <div className={`alert alert-${notification.severity}`} role="alert">
            {notification.message}
          </div>
        )}

        <div className="container-reserve">
          <div className="wrap-reserve">
            <form className="form-reserve">
              <span className="reserve-form-title">Gerar Reserva</span>
              <div className="container-reserve-form-btn">
                <div className="wrap-input">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Responsável"
                      id="inputResponsible"
                      onChange={(event) =>
                        this.setState({ responsible: event.target.value })
                      }
                    />
                    <label htmlFor="inputResponsible">Responsável</label>
                  </div>
                </div>
                <div className="wrap-input">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Data de Empréstimo"
                      id="inputLoan"
                      onChange={(event) =>
                        this.setState({ loan: event.target.value })
                      }
                    />
                    <label htmlFor="inputLoan">Data de Empréstimo</label>
                  </div>
                </div>

                <div className="wrap-input">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Data de Devolução"
                      id="inputDevolution"
                      onChange={(event) =>
                        this.setState({ devolution: event.target.value })
                      }
                    />
                    <label htmlFor="inputDevolution">
                      Data de Devolução
                    </label>
                  </div>
                </div>

                <div className="wrap-input">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Código do Livro"
                      id="inputBookID"
                      onChange={(event) =>
                        this.setState({ bookID: event.target.value })
                      }
                    />
                    <label htmlFor="inputBookID">Código do Livro</label>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    onClick={this.create}
                    className="btn btn-lg btn-primary"
                    type="button"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={this.cancel}
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

export default CreateReserve;
