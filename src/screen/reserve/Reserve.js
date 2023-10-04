import './../styles/styles.css'
import './../../geralStyles.css'
import React, { Component } from 'react';
import axios from 'axios';
import ReserveTable from '../../components/ReserveTable';

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserves: [],
      notification: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:8080/reserve/reserves');
      const reserves = response.data.map((reserve) => ({
        id: reserve.id,
        responsible: reserve.responsible,
        loanDate: reserve.loanDate,
        returnDate: reserve.returnDate,
        bookCode: reserve.bookCode,
      }));
      this.setState({ reserves });
    } catch (error) {
      this.showNotification('error', 'Erro ao buscar reservas');
      console.log('Não consigo buscar as reservas', error);
    }
  }

  async deleteReserve(reserve) {
    try {
      await axios.delete(`http://localhost:8080/reserve/${reserve.id}`);
      this.setState({
        reserves: this.state.reserves.filter((r) => r.id !== reserve.id),
      });
      this.showNotification('success', 'Reserva deletada com sucesso!');
    } catch (error) {
      this.showNotification('error', 'Erro ao deletar reserva');
      console.log('Não consigo deletar a reserva', error);
    }
  }

  showNotification = (severity, message) => {
    this.setState({
      notification: { severity, message },
    });
  };

  render() {
    const { reserves, notification } = this.state;

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
              <span className="reserve-form-title">Menu de Reserva</span>
              <div className="container-reserve-form-btn">
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-lg btn-primary"
                    type="button"
                    onClick={() => window.location.href = "/createReserve"}
                  >
                    Criar Reserva
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
              <ReserveTable reserves={reserves} deleteReserve={(reserve) => this.deleteReserve(reserve)} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reserve;
