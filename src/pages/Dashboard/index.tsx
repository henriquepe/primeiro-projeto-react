import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import LogoImage from '../../assets/Logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImage} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="digite o nome do repositório" />
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
