import React from 'react';
import cl from "./search.module.css"
import Icon from "../icon";
const Search = () => {
    return (
        <div className={cl.search}>
            <form className={cl.form}>
                <input type="text" className={cl.field} placeholder="Укажите город"/>

                <div className={cl.info}>
                    {/*<Icon id={"arrow"} className={cl.arrow}/>*/}
                    <p className={cl.text}>
                        <Icon id={"arrow"} className={cl.arrow}/>
                        Начните вводить город, <br/> например, <a className={cl.link}>Ижевск</a>
                    </p>
                </div>

            </form>

        </div>
    );
};

export default Search;