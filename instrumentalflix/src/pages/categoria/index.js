import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // Chave: nome, descrição, cor
    setValues({
      ...values,
      [chave]: valor, // nome: valor
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'https://instrumentalflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      })
    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          "id": "1",
          "nome": "Front-end",
          "descricao": "Categoria Show",
          "cor": "cbd1ff"
          },
        {
          "id": "2",
          "nome": "Back-end",
          "descricao": "Outra Categoria Show",
          "cor": "cbd1ff"
        }
      ]);
    }, 4 * 1000); */
  }, [])

  

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        { categorias.lenght === 0 && (<div>
          Loading...
        </div>)}


        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

// O indice da linha 40 irá criar uma key para cada categoria criada

export default CadastroCategoria;
