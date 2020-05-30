import React from 'react';

import './input.scss';

type Props = JSX.IntrinsicElements['input'] & {
    title?: string;
    width?: number;
}

const Button : React.FC<Props> = ({
    title,
    width,
    ...rest
}) => { 
    return(
        <div className="input-area">
            <p className="input-area-title">{title ? title : "default"}</p>
            <input {...rest} style={{width: width}} className="input-component"/>
        </div>
    );
}

export default Button;