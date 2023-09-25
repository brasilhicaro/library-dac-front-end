import './../styles/styles.css'
import {Component } from 'react';
import axios from 'axios';
import BookTable from './../../components/BookTable';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3000/book');
      const books = response.data.map((book) => ({
        id: book.id,
        title: book.title,
        year: book.year,
        publisher: book.publisher,
        author: book.author,
      }));
      this.setState({ books });

    }catch (error){
      console.log("Não consigo buscar a música",error);
    }
  }

  async deleteBook(book) {
    try{
      await axios.delete(`http://localhost:3000/book/${book.id}`);
      this.setState({
        books: this.state.books.filter((book) => book.id !== book.id),
      });
      alert('Livro deletado com sucesso!');
    }catch (error){
      console.log("Não consigo deletar a música",error);
    }

}
  render() {
    return (
      <div className="container">
         <div className="container-book">
           <div className="wrap-book">
             <form className="form-book">
               <span className="book-form-title">Gerar Livro</span>
               <div className="container-book-form-btn">
                 <div class="d-grid gap-2">
                   <button 
                   class="btn btn-lg btn-primary" 
                   type="button"
                   onClick={() => window.location.href = "/createBook"}
                   >Criar Livro
                   </button>
                   <button 
                   class="btn btn-lg btn-primary" 
                   type="button"
                   onClick={() => window.location.href = "/"}
                   >Voltar</button>
                 </div>
               </div>
                <BookTable books={this.state.books} deleteBook={this.deleteBook} />
             </form>
           </div>      
         </div>
       </div>
    )}
}

export default Book;