import './../styles/styles.css';
import React, { Component } from 'react';
import axios from 'axios';

class CreateReserve extends Component {
  state = {
    id: -1,
    responsible: '',
    loanDate: '',
    returnDate: '',
    bookCode: '',
    notification: null,
  };

  create = () => {
    const { responsible, loanDate, returnDate, bookCode } = this.state;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!responsible || !loanDate || !returnDate || !bookCode) {
      this.showNotification('error', 'Preencha todos os campos obrigatórios.');
      return;
    }

    axios
      .post('http://localhost:8080/reserve', {
        id: this.state.id,
        responsible,
        loanDate,
        returnDate,
        bookCode,
      })
      .then((response) => {
        this.showNotification('success', 'Reserva criada com sucesso!');
        console.log(response);
        setTimeout(() => {
          window.location.href = '/reserve';
        }, 1000); // Redireciona após 1 segundo
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
        {/* Renderize a notificação aqui */}
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
                <div class="wrap-input">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Default input"
                      id="inputDefault"
                      onChange={(event) =>
                        this.setState({ responsible: event.target.value })
                      }
                    />
                    <label for="floatingInput">Responsável</label>
                  </div>
                </div>
                <div class="wrap-input">
                  <div class="form-floating">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Default input"
                      id="inputDefault"
                      onChange={(event) =>
                        this.setState({ loanDate: event.target.value })
                      }
                    />
                    <label for="floatingInput">Pegou</label>
                  </div>
                </div>

                <div class="wrap-input">
                  <div class="form-floating">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Default input"
                      id="inputDefault"
                      onChange={(event) =>
                        this.setState({ returnDate: event.target.value })
                      }
                    />
                    <label for="floatingInput">Devolverá</label>
                  </div>
                </div>

                <div class="wrap-input">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Default input"
                      id="inputDefault"
                      onChange={(event) =>
                        this.setState({ bookCode: event.target.value })
                      }
                    />
                    <label for="floatingInput">Código do Livro</label>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button
                    onClick={this.create}
                    class="btn btn-lg btn-primary"
                    type="button"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={this.cancel}
                    class="btn btn-lg btn-primary"
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
