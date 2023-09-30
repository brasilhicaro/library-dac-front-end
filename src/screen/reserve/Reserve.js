import './../styles/styles.css'
import './../../geralStyles.css'
import { Component } from 'react';
import axios from 'axios';
import ReserveTable from '../../components/ReserveTable';

class Reserve extends Component{
  constructor(props) {
    super(props);
    this.state = {
      reserves: []
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:8080/reserve');
      const reserves = response.data.map((reserve) => ({
        id: reserve.id,
        responsible: reserve.responsible,
        loanDate: reserve.loanDate,
        returnDate: reserve.returnDate,
        bookCode: reserve.bookCode,
      }));
      this.setState({ reserves });
    }catch (error){
      console.log("Não consigo buscar a música",error);
    }
  }
  async deleteReserve(reserve) {
    try{
      await axios.delete(`http://localhost:8080/reserve/${reserve.id}`);
      this.setState({
        reserves: this.state.reserves.filter((reserve) => reserve.id !== reserve.id),
      });
      alert('Reserva deletada com sucesso!');
    } catch (error){
      console.log("Não consigo deletar a música",error);
    }
  }
  render() {
    return (
    <div className="container">
      <div className="container-reserve">
        <div className="wrap-reserve">
          <form className="form-reserve">
            <span className="reserve-form-title">Menu de Reserva</span>
            <div className="container-reserve-form-btn">
              <div class="d-grid gap-2">
                <button 
                class="btn btn-lg btn-primary" 
                type="button"
                onClick={() => window.location.href = "/createReserve"}
                >Criar Reserva
                </button>
                <button 
                class="btn btn-lg btn-primary" 
                type="button"
                onClick={() => window.location.href = "/"}
                >Voltar</button>
              </div>
            </div>
            <ReserveTable reserves={this.state.reserves} deleteReserve={this.deteleReserve} />
          </form>
        </div>      
      </div>
    </div>
  )}
}

export default Reserve;
