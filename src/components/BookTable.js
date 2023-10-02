import React from 'react'

const BookTable = props => {

    const rows = props.books.map(book => {
        return (
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.year}</td>
                <td>{book.publisher}</td>
                <td>{book.author}</td>
                
                <td>
                    <button
                        type="button"
                        title="Editar"
                        className="btn btn-primary"
                        onClick={e => props.edit(book.id)}
                    >
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button
                        type="button"
                        title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.delete(book.name)}
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
                    <th scope="col">Titulo</th>
                    <th scope="col">Ano</th>
                    <th scope="col">Editora</th>
                    <th scope="col">Autor</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};


export default BookTable;
