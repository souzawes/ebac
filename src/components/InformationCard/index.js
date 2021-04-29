import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './styles.module.css';

class InformationCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {            
            isLoading: true,
        }
    }

    componentDidMount() {

    }

    render() {
        const { title, content } = this.props;
        return(
            <>
                <Card className={styles.card}>
                    <CardContent>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default InformationCard;