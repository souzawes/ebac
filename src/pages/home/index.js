import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../../components/UserCard';

import styles from './styles.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: [],
        }
    }

    componentDidMount() {
        const users = [
            {
                id: 1,
                login: 'souzawes',
                name: 'Wesley Souza',
            },
            {
                id: 2,
                login: 'Ricnaga',
                name: 'Ricardo Nagatomy',
            },
        ];

        this.setState({ users: users, isLoading: false })
    }

    render() {
        const { users, isLoading } = this.state;

        return (
            <div className='app'>
                <div className='app-body'>
                    <p>Seleciona usuário para visualizar o perfil do Gituhub</p>
                    <ul>
                        {isLoading ? <RenderLoader /> : users.map(item => <UserCard key={item.id} login={item.login} name={item.name} />)}
                    </ul>
                </div>
            </div>
        )
    }

}

function RenderLoader() {
    return (
        <li>Carregando...</li>
    )
}

function RenderUserLine({ login, name }) {
    return (
        <li>
            <Link to={`user/${login}`}>{name}</Link>            
        </li>
    )
}

export default Home;