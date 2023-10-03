import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Messages } from 'primereact/messages';

const CreateBook = () => {
  const [formData, setFormData] = useState({
    id: -1,
    title: '',
    year: '',
    publisher: '',
    author: ''
  });

  const messagesRef = useRef(null);

  const create = () => {
    // Verificar se todos os campos estão preenchidos
    if (!formData.title || !formData.year || !formData.publisher || !formData.author) {
      showNotification('error', 'Por favor, preencha todos os campos.');
      return;
    }

    axios
      .post('http://localhost:8080/book', {
        id: formData.id,
        title: formData.title,
        year: formData.year,
        publisher: formData.publisher,
        author: formData.author
      })
      .then((response) => {
        console.log(response);
        showNotification('success', 'Livro criado com sucesso!');
        window.location.href = '/book';
      })
      .catch((error) => {
        console.error(error);
        showNotification('error', 'Erro ao criar o livro. Por favor, tente novamente mais tarde.');
      });
  };

  const showNotification = (severity, summary) => {
    messagesRef.current.show({
      severity: severity,
      summary: summary
    });
  };

  const cancel = () => {
    window.location.href = '/book';
  };

  return (
    <div className="container">
      <div className="container-book">
        <div className="wrap-book">
          <form className="form-book">
            <span className="book-form-title">Gerar Livro</span>
            <div className="container-book-form-btn">
              <div className="wrap-input">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <label htmlFor="title">Título</label>
                </div>
              </div>
              <div className="wrap-input">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ano"
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  />
                  <label htmlFor="year">Ano</label>
                </div>
              </div>
              <div className="wrap-input">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Editora"
                    id="publisher"
                    value={formData.publisher}
                    onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                  />
                  <label htmlFor="publisher">Editora</label>
                </div>
              </div>
              <div className="wrap-input">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Autor"
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                  <label htmlFor="author">Autor</label>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button onClick={create} className="btn btn-lg btn-primary" type="button">
                  Salvar
                </button>
                <button onClick={cancel} className="btn btn-lg btn-primary" type="button">
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Messages ref={messagesRef} />
    </div>
  );
};

export default CreateBook;
