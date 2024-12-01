import React from 'react';
import {ReactComponent as Logo} from "../../media/img/header/logo.svg"
import {ReactComponent as Rain} from "../../media/img/weather/rain.svg"
import {ReactComponent as Clear} from "../../media/img/weather/clear.svg"
import {ReactComponent as Clouds} from "../../media/img/weather/clouds.svg"
import {ReactComponent as Drizzle} from "../../media/img/weather/drizzle.svg"
import {ReactComponent as Mist} from "../../media/img/weather/mist.svg"
import {ReactComponent as Quall} from "../../media/img/weather/quall.svg"
import {ReactComponent as Snow} from "../../media/img/weather/snow.svg"
import {ReactComponent as Thunderstorm} from "../../media/img/weather/thunderstorm.svg"
import {ReactComponent as Tornado} from "../../media/img/weather/tornado.svg"
import {ReactComponent as Dust} from "../../media/img/weather/dust.svg"

type TIconProps = {
    id:string,
    className?: string,
}

const Icon = ({id,className}:TIconProps) => {
    const Icons:Record<any, any> = {
        "logo" : <Logo className={className}/>,
        "rain" : <Rain className={className}/>,
        "clear" : <Clear className={className}/>,
        "clouds" : <Clouds className={className}/>,
        "drizzle" : <Drizzle className={className}/>,
        "mist" : <Mist className={className}/>,
        "quall" : <Quall className={className}/>,
        "snow" : <Snow className={className}/>,
        "thunderstorm" : <Thunderstorm className={className}/>,
        "tornado" : <Tornado className={className}/>,
        "dust" : <Dust className={className}/>,

    }
    return (
        <>
            {
                Icons[id]
            }
        </>
    );
};

export default Icon;