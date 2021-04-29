import React from 'react';
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import styles from './styles.module.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {            
            isLoading: true,
        }
    }

    componentDidMount() {

    }

    render() {
        const { login, name } = this.props;
        return(
            <Link to={`user/${login}`}>
                <li>
                    <Card className={styles.card}>
                        <CardContent>                        
                            <span>{name}</span>
                        </CardContent>
                    </Card>
                </li>
            </Link>
        )
    }
}

export default UserCard;