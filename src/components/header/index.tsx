import React from 'react';
import cl from "./header.module.css"
import {Link} from "react-router-dom";
import Icon from "../icon";
import {ReactComponent as Logo} from "../../media/img/header/logo.svg"

const Header = () => {
    return (
        <div className={cl.header}>
            <Link to={"/"} className={cl.home__link}>
                <Icon id={"logo"} className={cl.logo}/>
                <p className={cl.title}>WeatherCheck</p>
            </Link>

        </div>
    );
};

export default Header;