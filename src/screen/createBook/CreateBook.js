import './../styles/styles.css'
import {React , Component } from 'react';
import axios from 'axios';
import { Messages } from 'primereact/messages';

class CreateBook extends Component {
  state = {
    id: -1,
    title: '',
    year: '',
    publisher: '',
    author: ''
  }
  create = () => 
    {
      axios.post('http://localhost:8080/book', {
        id: this.state.id,
        title: this.state.title,
        year: this.state.year,
        publisher: this.state.publisher,
        author: this.state.author
    }, {
      headers: {
          'Content-Type': 'application/json',
      }}
  ).then(response => 
    {
      console.log(response);

      window.location.href = "/book";
    }
  ).catch(error =>
    {
      msg.{ sticky: true, severity: 'error', summary: 'Error', detail: erro, closable: true }
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
              <span className="book-form-title">Gerar Livro</span>
              <div className="container-book-form-btn">
              <div class="wrap-input">
              <div class="form-floating">
                <input 
                type="text" 
                class="form-control" 
                placeholder="Default input" 
                id="inputDefault"
                onChange={(event) => this.setState({title: event.target.value})}
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

export default CreateBook;