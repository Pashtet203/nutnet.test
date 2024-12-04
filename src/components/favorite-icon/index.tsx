import React from 'react';
import Icon from "../icon";

type TFavoriteIconProps = {
    className?: string;

}

const FavoriteIcon = ({className}:TFavoriteIconProps) => {
    return (
        <div >
            <Icon id={"bookmark"} width={24} height={24} className={className}/>
        </div>
    );
};

export default FavoriteIcon;