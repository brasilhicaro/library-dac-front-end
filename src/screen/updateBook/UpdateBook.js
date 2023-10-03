import './../styles/styles.css'
import {React , Component } from 'react';
import axios from 'axios';
import Message from './../../components/messages/messages';

class UpdateBook extends Component {
  state = {
    id: -1,
    bookName: '',
    publisher: '',
    year: '',
    author: ''
    }
    update = () => 
    {
        axios.put(`http://localhost:8080/book/${this.props.match.params.id}`, {
            id: this.state.id,
            bookName: this.state.bookName,
            publisher: this.state.publisher,
            year: this.state.year,
            author: this.state.author
        }
        ).then(response => 
            {
                alert(response);
                console.log(response);
                window.location.href = "/book";
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
    setValues = async () => {
        await axios.get(`http://localhost:8080/book/${this.state.id}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                bookName: response.data.bookName,
                publisher: response.data.publisher,
                year: response.data.year,
                author: response.data.author
            }
            );
        }).catch(error => {
                console.log(error);
            }
        );
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
                    value={this.state.bookName}
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
                    value={this.state.year}
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
                    value={this.state.publisher}
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
                    value={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}
                    />
                    <label for="floatingInput">Autor</label>
                    </div>
                    </div>
                    <div class="d-grid gap-2">
                    <button onClick={this.update} class="btn btn-lg btn-primary" type="button">Salvar</button>
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
