
function Reserve() {
<div className="container">
   <div className="container-reserve">
     <div className="wrap-reserve">
       <form className="form-reserve">
         <span className="reserve-form-title">Gerar Reserva</span>
         <div className="container-reserve-form-btn">
           <span className="reserve-form-title-input">Responsável</span>
           <input type="text" className="reserve-form-input" />
           <span className="reserve-form-title-input">Data de Emprestimo</span>
           <input type="text" className="reserve-form-input" />
           <span className="reserve-form-title-input">Data de Devolução</span>
           <input type="text" className="reserve-form-input" />
           <span className="reserve-form-title-input">Código do Livro</span>
           <input type="text" className="reserve-form-input" />
           <button className="reserve-form-btn"  type="button">Cadastrar Reserva</button>
         </div>
       </form>
     </div>      
   </div>
 </div>
}

export default Reserve;