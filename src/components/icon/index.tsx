import React from 'react';
import {ReactComponent as Logo} from "../../media/img/header/logo.svg"
import {ReactComponent as Rain} from "../../media/img/weather/rain.svg"
import {ReactComponent as Clear} from "../../media/img/weather/clear.svg"
import {ReactComponent as Clouds} from "../../media/img/weather/clouds.svg"
import {ReactComponent as Drizzle} from "../../media/img/weather/drizzle.svg"
import {ReactComponent as Mist} from "../../media/img/weather/mist.svg"
import {ReactComponent as Squall} from "../../media/img/weather/quall.svg"
import {ReactComponent as Snow} from "../../media/img/weather/snow.svg"
import {ReactComponent as Thunderstorm} from "../../media/img/weather/thunderstorm.svg"
import {ReactComponent as Tornado} from "../../media/img/weather/tornado.svg"
import {ReactComponent as Dust} from "../../media/img/weather/dust.svg"
import {ReactComponent as Arrow} from "../../media/img/home/arrow.svg"
import {ReactComponent as Bookmark} from "../../media/img/home/bookmark.svg"
import {ReactComponent as ArrowLeft} from "../../media/img/arrow__left.svg"
import {ReactComponent as Barometer} from "../../media/img/home/barometer.svg"
import {ReactComponent as NoneIcon} from "../../media/img/noneImg.svg"
import {ReactComponent as Delete} from "../../media/img/delete.svg"


type TIconProps = {
    id:string,
    className?: string,
    width?:number,
    height?:number,
    fill?:string
}
enum weather{

}

const Icon = ({id,className,width,height,fill}:TIconProps) => {
    const Icons:Record<any, any> = {
        "logo" : <Logo className={className} width={width} height={height}/>,
        "Rain" : <Rain className={className} width={width} height={height}/>,
        "Clear" : <Clear className={className} width={width} height={height}/>,
        "Clouds" : <Clouds className={className} width={width} height={height}/>,
        "Drizzle" : <Drizzle className={className} width={width} height={height}/>,
        "Mist" : <Mist className={className} width={width} height={height}/>,
        "Squall" : <Squall className={className} width={width} height={height}/>,
        "Snow" : <Snow className={className} width={width} height={height}/>,
        "Thunderstorm" : <Thunderstorm className={className} width={width} height={height}/>,
        "Tornado" : <Tornado className={className} width={width} height={height}/>,
        "Dust" : <Dust className={className} width={width} height={height}/>,
        "arrow": <Arrow className={className} width={width} height={height}/>,
        "bookmark" : <Bookmark className={className} width={width} height={height}/>,
        "arrowLeft" : <ArrowLeft className={className} width={width} height={height}/>,
        "barometer" : <Barometer className={className} width={width} height={height}/>,
        "delete": <Delete className={className} width={width} height={height}/>,
    }
    return (
        <>
            {
                Icons[id] || <NoneIcon style={{fill:"white"}} width={24} height={24}/>
            }
        </>
    );
};

export default Icon;