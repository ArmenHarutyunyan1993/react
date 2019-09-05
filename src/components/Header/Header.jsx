import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (

        <header className="app-header">
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"/>

            <div className="loginBlock">
                { props.isAuth ?
                    <p className="loginedUser">{props.login}</p> :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
