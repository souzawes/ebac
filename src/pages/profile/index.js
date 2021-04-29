import React from 'react';
import { Link } from 'react-router-dom';

import UserService from '../../services/userService';

import styles from './styles.module.css';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            isLoading: true,
        }
    }

    async componentDidMount() {
        const {params: { userLogin }} = this.props.match;

        const userService = new UserService();

        const profileData = await userService.getUserProfile(userLogin)

        this.setState({ profile: profileData, isLoading: false})
    }

    render() {
        const { profile, isLoading } = this.state;

        return(
            <div className='app'>
                <div className='app-body'>
                    <h1>{ profile.name }</h1>
                    <div>{isLoading ? 'Carregando' : <RenderProfile profile={profile} />}</div>
                    <Link to="/">Retornar</Link>
                </div>
            </div>
        ) 
    }
}

function RenderProfile({ profile }) {
    return(
        <>
            <div className={styles.containerImage}>
                <img className={ styles.profileImage } src={profile.avatar_url} alt={'Imagem Perfil'}  />
                <a href={profile.html_url} target='-blank'>
                    <div className={styles.overlayImage}>
                        <div className={styles.textImage}>Visitar repositório</div>
                    </div>
                </a>
            </div>
            <p>{profile.bio}</p>
            <div className={styles.infoProfile}>                
                <p>{profile.login}</p>
                <p>{profile.public_repos}</p>
                <p>{profile.following}</p>
            </div>

        </>
    )
}

export default Profile;