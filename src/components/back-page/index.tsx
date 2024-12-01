import React from 'react';
import {useNavigate} from "react-router-dom";
import Icon from "../icon";
import cl from "./backPage.module.css"

const BackPage = () => {

    const navigate = useNavigate();

    return (
        <div className={cl.backPage}>
            <Icon id={"arrowLeft"} className={cl.arrowLeft}/> Назад
        </div>
    );
};

export default BackPage;