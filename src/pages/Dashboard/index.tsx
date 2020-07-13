import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import LogoImage from '../../assets/Logo.svg';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(newRepo);
    // adição de um novo repositório
    // [] consumir api do github
    // [] salvar o novo repositório no estado
  }

  return (
    <>
      <img src={LogoImage} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/62850277?s=460&u=b155be1023d30a02348168792c4e3230e50175da&v=4"
            alt="Henrique Pires"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
