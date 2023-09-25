import React from 'react'

import './../../geralStyles.css'
import "bootswatch/dist/cyborg/bootstrap.css";

export default function Home() {

  return (
    <div className="container">
      <div className="container-menu">
        <div className="wrap-menu">
          <form className="form-menu">
            <h2>Bem vindo!</h2>

            <form className="form-menu">
            <h5>Selecione uma opção:</h5>
            <div class="d-grid gap-2">
              <button 
              class="btn btn-lg btn-primary" 
              type="button"
              onClick={() => window.location.href = "/book"}
              >Livro
              </button>
              <button 
              class="btn btn-lg btn-primary" 
              type="button"
              onClick={() => window.location.href = "/reserve"}
              >Reserva</button>
            </div>
            </form>
          </form>
        </div>      
      </div>
    </div>
  );
}
