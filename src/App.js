import React, {useState, useEffect} from 'react'
import './App.css'
import Book from './components/Book'
import Reserve from './components/Reserve'
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
                <span className="menu-form-title">Bem vindo!</span>
                <span className="menu-form-subtitle">Selecione a opção que deseja</span>
                <div className="container-menu-form-btn">
                  <button className="menu-form-btn" onClick={()=>LinksPages('?book')} type="button">Cadastrar Livro</button>
                  <button className="menu-form-btn" onClick={()=>LinksPages('?reserve')} type="button">Cadastrar Reserva</button>
                </div>
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
