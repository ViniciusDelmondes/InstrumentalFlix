import React from 'react';
import Logo from '../../assets/logodevflix.png'
import './Menu.css';
import Button from '../Button/index'
//import ButtonLink from './components/ButtonLink';
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DevFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;