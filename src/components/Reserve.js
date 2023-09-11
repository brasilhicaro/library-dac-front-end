import './styles/styles.css'
import '../App.css'
import { useState } from 'react';

const Reserve = ({ onReserveSubmit }) =>{

  const[responsible, setResponsible] = useState('');
  const[loanDate, setLoanDate] = useState('');
  const[returnDate, setReturnDate] = useState('');
  const[bookCode, setBookCode] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const reserveData = {
      responsible,
      loanDate,
      returnDate,
      bookCode
    };
    onReserveSubmit(reserveData);
    setResponsible('');
    setLoanDate('');
    setReturnDate('');
    setBookCode('');
  };
  return(
    <div className="container">
      <div className="container-reserve">
        <div className="wrap-reserve">
          <form className="form-reserve" onSubmit={handleSubmit}>
          <span className="reserve-form-title">Gerar Reserva</span>
            <div className="container-reserve-form-btn">
              <div className="wrap-input">
                <input 
                type="text" 
                className={responsible.length > 0 ? "has-value reserve-form-input reserve-input" : "reserve-form-input reserve-input"} 
                value={responsible}
                onChange={(event) => setResponsible(event.target.value)}
                />
                <span className="reserve-form-title-input" data-placeholder='Responsável'></span>
              </div>
              <div className="wrap-input">
                <input
                type="text" 
                className={loanDate.length > 0 ? "has-value reserve-form-input reserve-input" : "reserve-form-input reserve-input"}
                value={loanDate}
                onChange={(event) => setLoanDate(event.target.value)}
                />
                <span className="reserve-form-title-input " data-placeholder='Data de Empréstimo'></span>
              </div>
              <div className="wrap-input">
                <input 
                type="text" 
                className={returnDate.length > 0 ? "has-value reserve-form-input reserve-input" : "reserve-form-input reserve-input"}
                value={returnDate}
                onChange={(event) => setReturnDate(event.target.value)}
                />
                <span className="reserve-form-title-input" data-placeholder='Data de Devolução'></span>
              </div>
              <div className="wrap-input">
                <input 
                type="text" 
                className={"reserve-form-input" + (bookCode.length > 0 ? " has-value reserve-input" : " reserve-input")}
                value={bookCode}
                onChange={(event) => setBookCode(event.target.value)}
                />
                <span className="reserve-form-title-input" data-placeholder='Código do Livro'></span>
              </div>
              <button className="reserve-form-btn"  type="submit">Cadastrar Reserva</button>
            </div>
          </form>
        </div>      
      </div>
    </div>
  );
};
  const ReserveContainer = () => {  
    const onReserveSubmit = async (reserveData) => {
      try{
        const response = await fetch('http://localhost:8080/reserve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reserveData)

      });
      if (response.ok) {
        console.log('Reserva cadastrada com sucesso!');
      }else{
        console.log('Erro ao cadastrar reserva!');
      }
    }catch(error){
      console.log(error);
    }
  };
    return <Reserve onReserveSubmit={onReserveSubmit} />;
  }

export default ReserveContainer;