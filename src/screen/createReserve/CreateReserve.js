import './../styles/styles.css'
import {React , Component } from 'react';
import axios from 'axios';

class CreateReserve extends Component {
    state = {
        responsible: '',
        loanDate: '',
        returnDate: '',
        bookCode: ''
    }
    create = () => 
    {
        axios.post('http://localhost:3000/reserve', {
            responsible: this.state.responsible,
            loanDate: this.state.loanDate,
            returnDate: this.state.returnDate,
            bookCode: this.state.bookCode
        } 
        ).then(response => 
            {
                console.log(response);
            }
        ).catch(error =>
            {
                console.log(error);
            }
        );
    }
    cancel = () => 
    {
        window.location.href = "/reserve";
    }
    render(){
        return (
            <div className="container">
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
                    onChange={(event) => this.setState({bookName: event.target.value})}
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
                    onChange={(event) => this.setState({year: event.target.value})}
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
                    onChange={(event) => this.setState({publisher: event.target.value})}
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
                    onChange={(event) => this.setState({author: event.target.value})}
                    />
                    <label for="floatingInput">Código do Livro</label>
                    </div>
                    </div>
                    <div class="d-grid gap-2">
                    <button onClick={this.create} class="btn btn-lg btn-primary" type="button">Salvar</button>
                    <button onClick={this.cancel} class="btn btn-lg btn-primary" type="button">Cancelar</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>      
        )
    }
}
export default CreateReserve;