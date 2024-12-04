import React from 'react';
import {Link} from "react-router-dom";
import cl from "./notFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={cl. notFoundPage}>
            Такой страницы не существует. <br/>
            Вернитесь на <Link to={"/"}>главную страницу</Link>
        </div>
    );
};

export default NotFoundPage;