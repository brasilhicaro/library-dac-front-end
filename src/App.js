import React, {useState, useEffect} from 'react'
import './App.css'
import Book from './components/Book'
import Reserve from './components/Reserve'
import "bootswatch/dist/cyborg/bootstrap.css";
function App() {
  
  const [chosePage, setPage] = useState(0)	
  
  useEffect(
    ()=>{
    const url=window.location.href
    const urlSplit=url.split("?")
    setPage(urlSplit[1])
    }
  )
  
  const LinksPages=(page)=>{
    if(page === '?book'){
      window.open("http://localhost:3000?book", "_self")
    }else if(page === '?reserve'){
      window.open("http://localhost:3000?reserve", "_self")
    }
  }

  const returnPage=()=>{
    if(chosePage === 'book'){
      return <Book/>
    }else if(chosePage === 'reserve'){
      return <Reserve/>
    }else {
      return (
        <div className="container">
          <div className="container-menu">
            <div className="wrap-menu">
              <form className="form-menu">
                <h2>Bem vindo!</h2>

                <form className="form-menu">
                <h5>Selecione uma opção:</h5>
                <div class="d-grid gap-2">
                  <button class="btn btn-lg btn-primary" type="button">Livro</button>
                  <button class="btn btn-lg btn-primary" type="button">Reserva</button>
                </div>
                </form>
              </form>
            </div>      
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {returnPage()}
    </>
  );
}

export default App;
