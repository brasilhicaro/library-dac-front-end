import './../styles/styles.css'
import {React , Component } from 'react';
import axios from 'axios';

class UpdateBook extends Component {
  state = {
    bookName: '',
    publisher: '',
    year: '',
    author: ''
    }
    update = () => 
    {
        axios.put(`http://localhost:3000/book/${this.props.match.params.id}`, {
            bookName: this.state.bookName,
            publisher: this.state.publisher,
            year: this.state.year,
            author: this.state.author
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
        window.location.href = "/book";
    }

    render(){
        return (
            <div className="container">
            <div className="container-book">
            <div className="wrap-book">
                <form className="form-book">
                <span className="book-form-title">Atualizar Livro</span>
                <div className="container-book-form-btn">
                <div class="wrap-input">
                <div class="form-floating">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Default input" 
                    id="inputDefault"
                    onChange={(event) => this.setState({bookName: event.target.value})}
                    />
                    <label for="floatingInput">Titulo</label>
                
                </div>
                </div>
                <div class="wrap-input">
                    <div class="form-floating">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Default input" 
                    id="inputDefault"
                    onChange={(event) => this.setState({year: event.target.value})}
                    />
                    <label for="floatingInput">Ano</label>
                    </div>
                </div>

                <div class="wrap-input">
                    <div class="form-floating">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Default input" 
                    id="inputDefault"
                    onChange={(event) => this.setState({publisher: event.target.value})}
                    />
                    <label for="floatingInput">Editora</label>
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
                    <label for="floatingInput">Autor</label>
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
export default UpdateBook;