import React from 'react';
import cl from "./header.module.css"
import {Link} from "react-router-dom";
import logo from "../../media/img/header/logo__header.svg"
const Header = () => {
    return (
        <div className={cl.header}>
            <Link to={"/"}>
                {/*<img className={cl.logo} src={logo} alt=""/>*/}
                <p className={cl.title}>WeatherCheck</p>
            </Link>
        </div>
    );
};

export default Header;