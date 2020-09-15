import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github.</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/51042003?s=400&u=789fd3788a2cfe8e41bd395323a6b34464e25850&v=4"
                        alt="Matheus Cabral"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/51042003?s=400&u=789fd3788a2cfe8e41bd395323a6b34464e25850&v=4"
                        alt="Matheus Cabral"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/51042003?s=400&u=789fd3788a2cfe8e41bd395323a6b34464e25850&v=4"
                        alt="Matheus Cabral"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;