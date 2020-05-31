import React  from 'react';
import cx from 'classnames';

import './button.scss';

type Props = JSX.IntrinsicElements['button'] & {
    red?: boolean;
    green?: boolean;
    blue?: boolean; 
    input?: boolean;
}

const Button : React.FC<Props> = ({
    red,
    green,
    blue,
    children,
    input,
    ...rest
}) => {

    const btnClass = cx(
        "btn",
        {
            "btn-red":  red,
            "btn-green": green,
            "btn-blue": blue,
            "btn-input": input
        } 
    );

    return(
        <button className={btnClass} {...rest}>
            {children}
        </button>
    );
}

export default Button;