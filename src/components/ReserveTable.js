import React from 'react';

const ReserveTable = (props) => {
  const rows = props.reserves.map((reserve) => {
    return (
      <tr key={reserve.id}>
        <td>{reserve.id}</td>
        <td>{reserve.responsible}</td>
        <td>{reserve.loan}</td>
        <td>{reserve.devolution}</td>
        <td>{reserve.bookID}</td>
        <td>
        <button
            type="button"
            title="Editar"
            className="btn btn-primary"
            onClick={() => props.edit(reserve.id)}
          >
            <i className="pi pi-pencil"></i>
          </button>
          <button
            type="button"
            title="Excluir"
            className="btn btn-danger"
            onClick={(e) => props.deleteReserve(reserve)}
          >
            <i className="pi pi-trash"></i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Pegou</th>
          <th scope="col">Devolverá</th>
          <th scope="col">ID Livro</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ReserveTable;
