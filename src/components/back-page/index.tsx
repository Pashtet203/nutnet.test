import React from 'react';
import {useNavigate} from "react-router-dom";
import Icon from "../icon";
import cl from "./backPage.module.css"

const BackPage = () => {

    const navigate = useNavigate();

    return (
        <div className={cl.backPage} onClick={()=>{navigate(-1)}}>
            <Icon id={"arrowLeft"} width={24} height={24} className={cl.arrowLeft}/> Назад
        </div>
    );
};

export default BackPage;